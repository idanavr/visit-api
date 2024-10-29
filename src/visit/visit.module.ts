import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { VisitController } from './visit.controller';
import { VisitService } from './visit.service';
import { WebVisit } from '../entities/web-visit.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([WebVisit])
  ],
  controllers: [VisitController],
  providers: [VisitService]
})

export class VisitModule {}
