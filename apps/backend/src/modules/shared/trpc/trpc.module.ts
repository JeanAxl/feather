import { Module } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Module({
  providers: [
    {
      provide: 'InitTrpc',
      useFactory: () => initTRPC.create(),
    },
  ],
  exports: ['InitTrpc'],
})
export class TrpcModule {}
