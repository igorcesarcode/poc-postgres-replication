import { IsEnum, IsOptional } from 'class-validator';

export enum OriginRole {
  MASTER = 'master',
  SLAVE = 'slave',
}

export class getUserByIdDto {
  @IsOptional()
  @IsEnum(OriginRole, { message: 'Invalid origin' })
  origin: OriginRole;
}
