import { Migration } from '@mikro-orm/migrations';

export class Migration20241029185024 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "web_visit" ("id" uuid not null, "url" varchar(255) not null, "date" timestamptz not null, "org_id" varchar(255) not null, constraint "web_visit_pkey" primary key ("id"));`);
  }

}
