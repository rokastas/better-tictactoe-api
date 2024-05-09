import { UpdateAgeRequest as UpdateAgeRequestInterface } from '../interfaces/age.interface';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class UpdateAgeRequest implements UpdateAgeRequestInterface {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(150)
  age: number;
}
