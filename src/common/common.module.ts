import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AxiosNestAdapter } from './adapters/axios-nest.adapter';
import { AxiosAdapter } from './adapters/axios.adapter';
import { HttpModuleAdapter } from './adapters/http-module.adapter';

@Module({
  imports: [HttpModule],
  providers: [AxiosAdapter, AxiosNestAdapter, HttpModuleAdapter],
  exports: [AxiosAdapter, AxiosNestAdapter, HttpModuleAdapter],
})
export class CommonModule {}
