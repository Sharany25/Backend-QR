import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { Alumno } from './alumnos/entities/alumno.entity';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { Asistencia } from './asistencia/entities/asistencia.entity';
import { DocenteModule } from './docentes/docentes.module';
import { Docente } from './docentes/entities/docente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-iydo.railway.internal',
      port: 3306,
      username: 'root',
      password: 'XWNujBpylbdmHzmLEQyrbGaEnkKduBji',
      database: 'railway',
      entities: [ Alumno, Asistencia, Docente ],
      synchronize: true,
      autoLoadEntities: true,
      }),
      AlumnosModule,
      AsistenciaModule,
      DocenteModule,
    ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
