import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { WebVisit } from './entities/web-visit.entity';

export default {
  entities: [WebVisit],
  clientUrl: 'postgresql://postgres:123456@localhost:5432/postgres',
  extensions: [Migrator],
  driver: PostgreSqlDriver,
};
