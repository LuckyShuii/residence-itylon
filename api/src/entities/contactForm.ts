import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Length, IsEmail } from "class-validator";

@Entity()
export class ContactForm extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'Le prénom doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    firstName: string;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'Le nom doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    lastName: string;

    @Column({ length: 255 })
    @IsEmail()
    @Length(5, 255, {
        message: 'L\'adresse email doit avoir obligatoirement entre 5 et 255 caractères !'
    })
    email: string;

    @Column({ length: 255 })
    @Length(1, 50, {
        message: 'Le numéro de téléphone doit avoir obligatoirement entre 1 et 50 caractères !'
    })
    phone: string;

    @Column()
    @Length(1)
    message: string;
}