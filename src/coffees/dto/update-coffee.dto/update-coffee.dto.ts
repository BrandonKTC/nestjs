import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';
// inherit from createCoffee data transfer object and transform property to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
