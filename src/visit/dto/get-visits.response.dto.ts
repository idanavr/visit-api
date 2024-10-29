import { WebVisit } from '@src/entities/web-visit.entity';

export interface GetVisitsResponse {
  items: WebVisit[];
  totalCount: number;
  length: number;
  page: number;
};
