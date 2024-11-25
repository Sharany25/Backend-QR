import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';
import { CrearDocente } from './dto/crear-docente.dto';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  // Método para crear un nuevo docente
  async crearDocente(data: CrearDocente): Promise<Docente> {
    const docente = this.docenteRepository.create(data);
    return this.docenteRepository.save(docente);
  }

  // Método para obtener todos los docentes
  async obtenerDocentes(): Promise<Docente[]> {
    return this.docenteRepository.find();
  }
}
