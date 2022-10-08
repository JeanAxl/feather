import { Inject, Injectable } from '@nestjs/common';
import { BagSectionTrpcRouter } from '../../../bag-section/interface/trpc/bag-section.trpc-router';
import { InitTRPC } from '../../../shared/trpc/trpc.type';

export type AppRouterType = AppTrpcRouter['router'];

@Injectable()
export class AppTrpcRouter {
  public router;
  constructor(
    @Inject('InitTrpc') private readonly trpcInit: InitTRPC,
    private readonly bagSectionTrpcRouter: BagSectionTrpcRouter
  ) {
    this.router = trpcInit.router({
      bagSection: bagSectionTrpcRouter.router,
    });
    console.log(this.router);
  }
}
