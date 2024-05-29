import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Length } from "class-validator";

@Entity()
export class Residence extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'Le titre d\'en-tête doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    headerTitle: string;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'Le titre doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    pictures: string;

    @Column()
    postalAddress: string;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'L\'email doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    email: string;

    @Column({ length: 50 })
    @Length(8, 50, {
        message: 'Le numéro de téléphone doit avoir obligatoirement entre 8 et 50 caractères !'
    })
    phone: string;

    @Column()
    socials: string;
}