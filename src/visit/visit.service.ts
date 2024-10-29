import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { JwtPayload } from '@auth/jwt-payload.interface';
import { VisitDto } from './dto/visit.dto';
import { WebVisit } from '../entities/web-visit.entity';

@Injectable()
export class VisitService {
  constructor(private readonly em: EntityManager) { }

  async get(user: JwtPayload): Promise<WebVisit[]> {
    const webVisits = await this.em.find(WebVisit, { orgId: user['custom:organization_id'] });
    return webVisits;
  }

  async create(visitDto: VisitDto, user: JwtPayload) {
    const webVisit = new WebVisit();
    webVisit.url = visitDto.url;
    webVisit.date = visitDto.date;
    webVisit.orgId = user['custom:organization_id'];
    
    await this.em.persist(webVisit).flush();

    return webVisit;
  }
}
