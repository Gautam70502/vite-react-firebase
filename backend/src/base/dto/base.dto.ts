import { IsOptional, IsString, IsUUID } from 'class-validator';

export class BaseDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsUUID()
  @IsOptional()
  createdBy: string;

  @IsUUID()
  @IsOptional()
  updatedBy: string;

  @IsUUID()
  @IsOptional()
  deletedBy: string;
}
