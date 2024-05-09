import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateInfoRequest as UpdateInfoRequestInterface } from './interfaces';
import { UpdateAgeRequest as UpdateAgeRequestInterface } from './interfaces/age.interface';
import { BaseResponse } from '../interfaces';
import { UpdateInfoRequest } from './models';
import { UpdateAgeRequest } from './models/age.model';

@Injectable()
export class InfoService {
  async validateInfo(
    rawData: UpdateInfoRequestInterface | UpdateAgeRequestInterface,
  ): Promise<BaseResponse> {
    if ('name' in rawData) {
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
    } else if ('age' in rawData) {
      const data = plainToClass(UpdateAgeRequest, rawData);
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
}
