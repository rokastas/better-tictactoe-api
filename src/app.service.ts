import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import {
  BaseResponse,
  UpdateInfoRequest as UpdateInfoRequestInterface,
} from './interfaces';
import { UpdateInfoRequest } from './models';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async validateInfo(
    rawData: UpdateInfoRequestInterface,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateInfoRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }
}
