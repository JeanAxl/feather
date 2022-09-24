import { Module } from '@nestjs/common';
import { BagSectionResolver } from './bag-section.resolver';

@Module({
  providers: [BagSectionResolver],
})
export class BagSectionModule {}
