import { Injectable } from '@nestjs/common';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private readonly deportistaRepository: Repository<Deportista>,
  ) {}
  async create(createDeportistaDto: CreateDeportistaDto) {
    return 'This action adds a new deportista';
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
}
