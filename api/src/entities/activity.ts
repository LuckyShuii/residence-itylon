import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn
} from "typeorm";

import { Length } from "class-validator";

@Entity()
export class Activity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'Le titre en en-tête doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    headerTitle: string;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'La description en en-tête doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    headerDescription: string;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'Le titre doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    title: string;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'La description doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    description: string;

    @Column()
    externalLink: string;

    @Column()
    pictures: string;
}