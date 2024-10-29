import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        clientUrl: configService.get('DATABASE_CLIENT_URL'),
        autoLoadEntities: true,
        driver: PostgreSqlDriver,
      }),
      inject: [ConfigService],
    }),
  ],
})

export class DbModule {};
