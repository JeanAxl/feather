import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BagSectionModule } from '../bag-section/bag-section.module';
import { BagSectionTypeOrmEntity } from '../bag-section/infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { ItemTypeOrmEntity } from '../bag-section/infrastructure/typeorm/item/item.typeorm-entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['apps/**/*.graphql'],
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
