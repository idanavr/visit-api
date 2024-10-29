import { Body, Controller, Get, Post, UseGuards, Request, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@auth/auth.guard';
import { CreateVisitDto } from './dto/create-visit.request.dto';
import { VisitService } from './visit.service';

@UseGuards(AuthGuard)
@Controller('visit')
export class VisitController {
  constructor(private readonly visitService: VisitService) { }
    
  @Get()
  getVisits(@Request() req, @Query('page') page = 0) {
    return this.visitService.get(req.user, page);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createVisit(@Body() visits: CreateVisitDto[], @Request() req) {
    return this.visitService.create(visits, req.user);
  }

};
