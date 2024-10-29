import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@auth/auth.guard';
import { VisitDto } from './dto/visit.dto';
import { VisitService } from './visit.service';

@UseGuards(AuthGuard)
@Controller('visit')
export class VisitController {
  constructor(private readonly visitService: VisitService) { }
    
  @Get()
  getVisits(@Request() req) {
    return this.visitService.get(req.user);
  }

  @Post()
  createVisit(@Body() visitDto: VisitDto, @Request() req) {
    return this.visitService.create(visitDto, req.user);
  }

};
