import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BagSectionModule } from '../bag-section/bag-section.module';
import { AppTrpcRouter } from './interfaces/trpc/app.trpc-router';
import { TrpcModule } from '../shared/trpc/trpc.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    TrpcModule,
    BagSectionModule,
  ],
  providers: [AppTrpcRouter],
})
export class AppModule {}
