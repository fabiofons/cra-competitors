import {
  IsDate,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDeportistaDto {
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsString()
  @MinLength(3)
  apellido: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  @IsOptional()
  dorsal?: number;

  @IsString()
  @MinLength(3)
  equipo: string;

  @IsDate()
  fechaNacimiento: Date;
}
