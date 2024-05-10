import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import { CoherentAgeValidator } from '../validators/coherent-age.validator';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  Min,
  Max,
  ValidateIf,
  IsIn,
  IsDateString,
  Validate,
} from 'class-validator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  nameLong: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(150)
  age: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ValidateIf((object) => object.age >= 18)
  @IsIn(['single', 'married', 'divorced', 'widowed'])
  maritalStatus: string;

  @IsOptional()
  @IsDateString()
  @Validate(CoherentAgeValidator)
  dateOfBirth: string;
}
