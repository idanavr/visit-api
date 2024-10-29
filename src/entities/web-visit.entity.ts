import { Property, Entity, PrimaryKey } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class WebVisit {
  @PrimaryKey({ type: 'uuid' })
    id: string = uuidv4();

  @Property({ type: 'varchar', length: 2000 })
    url: string;

  @Property()
    date: Date;

  @Property()
    orgId: string;
}
