import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { InitTRPC } from '../../../shared/trpc/trpc.type';
import {
  GetBagSectionQuery,
  GetBagSectionQueryResult,
} from '../../core/application/queries/get-bag-section/get-bag-section.query';

@Injectable()
export class BagSectionTrpcRouter {
  public router;
  constructor(
    @Inject('InitTrpc') private readonly initTrpc: InitTRPC,
    private readonly queryBus: QueryBus
  ) {
    const procedures = this.initProcedures();
    this.router = initTrpc.router(procedures);
  }

  private initProcedures() {
    return {
      bagSection: this.initTrpc.procedure.query(async () =>
        this.queryBus.execute<GetBagSectionQuery, GetBagSectionQueryResult>(
          new GetBagSectionQuery()
        )
      ),
    };
  }
}
