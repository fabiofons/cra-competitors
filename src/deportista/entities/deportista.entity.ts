import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deportista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  nombre: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  apellido: string;

  @Column({
    type: 'numeric',
    unique: true,
  })
  dorsal: number;

  @Column('text', {
    unique: true,
  })
  equipo: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  fechaNacimiento: Date;
}
