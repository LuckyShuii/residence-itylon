import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm";

import { Length, Min } from "class-validator";
import { Price } from "./price";

@Entity()
export class House extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'Le titre d\'en-tête doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    title: string;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'La description d\'en-tête doit avoir obligatoirement entre 1 et 255 caractères !'
    })
    descriptionTitle: string;

    @Column()
    previewPicture: string;

    @Column()
    pictures: string;

    @Column()
    @Min(1)
    capacity: number;

    @Column()
    @Min(1)
    wifi: number;

    @Column()
    @Min(1)
    barbecue: number;

    @Column()
    @Min(1)
    ac: number;

    @Column()
    @Min(1)
    parking: number;

    @Column()
    @Min(1)
    terrace: number;

    @Column()
    @Min(1)
    bed: number;

    @Column()
    @Min(1)
    kitchen: number;

    @Column()
    @Min(1)
    bathroom: number;

    @Column()
    @Min(1)
    room: number;

    @OneToMany(() => Price, (price) => price.house)
    price: Price[]
}
