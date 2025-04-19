import { IsDateString, IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreateDeportistaDto {
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsString()
  @MinLength(3)
  apellido: string;

  @IsInt()
  @Min(1)
  dorsal?: number;

  @IsString()
  @MinLength(3)
  equipo: string;

  @IsDateString()
  fechaNacimiento: string;
}
