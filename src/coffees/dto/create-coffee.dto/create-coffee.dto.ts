import { IsString } from 'class-validator';
// Create a structure to create new coffee and apply nest validator
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
