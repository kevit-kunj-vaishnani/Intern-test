import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  addressId: string;

  @IsString()
  preferredLanguage: string;

  @IsNumber()
  phoneNumber: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
