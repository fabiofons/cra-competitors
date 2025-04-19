import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';
import type { DatabaseError } from 'pg-protocol';

@Injectable()
export class DeportistaService {
  private readonly logger = new Logger('DeportistaService');

  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
  ) {}

  async create(createDeportistaDto: CreateDeportistaDto) {
    try {
      const deportista = this.deportistaRepository.create(createDeportistaDto);
      await this.deportistaRepository.save(deportista);
      return deportista;
    } catch (error) {
      this.logger.error(error);
      this.handleDbErrors(error as DatabaseError);
    }
  }

  findAll() {
    return `This action returns all deportista`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deportista`;
  }

  update(id: number, updateDeportistaDto: UpdateDeportistaDto) {
    return `This action updates a #${id} deportista`;
  }

  remove(id: number) {
    return `This action removes a #${id} deportista`;
  }

  private handleDbErrors(error: DatabaseError) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'No se pudo crear el deportista - Porfavor chequea los logs',
    );
  }
}
