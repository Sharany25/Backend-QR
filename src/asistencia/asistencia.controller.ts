import { Controller, Post, Body } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  // Ruta POST para registrar o actualizar la asistencia
  @Post('registrar')
  async registrar(@Body() body: CreateAsistenciaDto) {
    // Llamamos al servicio para registrar o actualizar la asistencia
    return this.asistenciaService.registrarAsistencia(body);
  }
}
