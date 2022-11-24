import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseResponse, UpdateInfoRequest } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/validate-info')
  getConfig(@Body() bodyRequest: UpdateInfoRequest): Promise<BaseResponse> {
    return this.appService.validateInfo(bodyRequest);
  }
}
