import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BagSectionModule } from '../bag-section/bag-section.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeOrmEntity } from '../bag-section/infrastructure/typeorm/item/item.typeorm-entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [ItemTypeOrmEntity],
      keepConnectionAlive: false,
    }),
    BagSectionModule,
  ],
})
export class AppModule {}
