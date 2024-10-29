import { Migration } from '@mikro-orm/migrations';

export class Migration20241029205530 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "web_visit" alter column "url" type varchar(2000) using ("url"::varchar(2000));`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "web_visit" alter column "url" type varchar(255) using ("url"::varchar(255));`);
  }

}
