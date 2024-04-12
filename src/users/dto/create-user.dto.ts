import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  isActive: boolean;
}
