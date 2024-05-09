import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  // IsOptional,
  // IsInt,
  // Min,
  // Max,
} from 'class-validator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  // @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  // @IsOptional()
  // @IsInt()
  // @Min(1)
  // @Max(150)
  // age: number;
}
