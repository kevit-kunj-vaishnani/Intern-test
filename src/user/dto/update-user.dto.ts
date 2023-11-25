import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  addressId: string;

  @IsOptional()
  @IsString()
  preferredLanguage: string;

  @IsOptional()
  @IsNumber()
  phoneNumber: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
