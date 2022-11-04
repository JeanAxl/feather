import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../../environments/environment';
import { BagSectionModule } from '../bag-section/bag-section.module';
import { appTypeOrmEntities } from './infrastructure/typeorm/app.typeorm-entities';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [environment.graphqlTypePaths],
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: ':serve:',
      dropSchema: true,
      entities: appTypeOrmEntities,
      synchronize: true,
      keepConnectionAlive: false,
    }),
    BagSectionModule,
  ],
})
export class AppModule {}
