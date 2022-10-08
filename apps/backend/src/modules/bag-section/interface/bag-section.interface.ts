import { BagSectionResolver } from './graphql/bag-section.resolver';
import { BagSectionTrpcRouter } from './trpc/bag-section.trpc-router';

export const bagSectionInterfaces = [BagSectionResolver, BagSectionTrpcRouter];
