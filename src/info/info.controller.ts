import { Controller, Post, Body } from '@nestjs/common';
import { InfoService } from './info.service';
import { UpdateInfoRequest } from './interfaces';
import { BaseResponse } from '../interfaces';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post('/validate')
  validateInfo(@Body() bodyRequest: UpdateInfoRequest): Promise<BaseResponse> {
    return this.infoService.validateInfo(bodyRequest);
  }

  @Post('/validateAge')
  validateAge(@Body() bodyRequest: { age: number }): Promise<BaseResponse> {
    return this.infoService.validateInfo(bodyRequest);
  }
}
