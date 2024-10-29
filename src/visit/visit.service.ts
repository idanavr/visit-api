import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Cursor, EntityManager } from '@mikro-orm/postgresql';
import { JwtPayload } from '@auth/jwt-payload.interface';
import { CreateVisitDto } from './dto/create-visit.request.dto';
import { WebVisit } from '../entities/web-visit.entity';
import { GetVisitsResponse } from './dto/get-visits.response.dto';

const ITEMS_PER_PAGE = 10;

@Injectable()
export class VisitService {
  constructor(private readonly em: EntityManager) { }

  async get(user: JwtPayload, page: number): Promise<GetVisitsResponse> {    
    const [webVisits, count] = await this.em.findAndCount(WebVisit, { 
      orgId: user['custom:organization_id'] 
    }, { 
      orderBy: { date: 'desc' }, 
      limit: ITEMS_PER_PAGE, 
      offset: page * ITEMS_PER_PAGE 
    });
    const response: GetVisitsResponse = {
      items: webVisits,
      totalCount: count,
      length: ITEMS_PER_PAGE,
      page,
    };

    return response;
  }

  async create(visits: CreateVisitDto[], user: JwtPayload) {
    const webVisits = visits.map((visit) => {
      const webVisit = new WebVisit()
      webVisit.url = visit.url;
      webVisit.date = visit.date;
      webVisit.orgId = user['custom:organization_id'];
      return webVisit;
    });
    
    await this.em.persistAndFlush(webVisits);

    return webVisits;
  }
}
