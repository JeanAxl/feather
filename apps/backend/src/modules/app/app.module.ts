import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BagSectionModule } from '../bag-section/bag-section.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeOrmEntity } from '../bag-section/infrastructure/typeorm/item/item.typeorm-entity';
import { BagSectionTypeOrmEntity } from '../bag-section/infrastructure/typeorm/bag-section/bag-section.typeorm-entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':serve:',
      dropSchema: true,
      entities: [ItemTypeOrmEntity, BagSectionTypeOrmEntity],
      synchronize: true,
      keepConnectionAlive: false,
    }),
    BagSectionModule,
  ],
})
export class AppModule {}
