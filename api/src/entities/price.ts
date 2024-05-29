import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
    ManyToOne
} from "typeorm";

import { Min } from "class-validator";
import { House } from "./house";

@Entity()
export class Price extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    @Min(1)
    lowSeason: number;

    @Column({ nullable: true })
    @Min(1)
    mediumSeason: number;

    @Column({ nullable: true })
    @Min(1)
    highSeason: number;

    @Column({ nullable: true })
    @Min(1)
    veryHighSeason: number;

    @Column()
    @Min(1)
    cleaningFee: number;

    @ManyToOne(() => House, (house) => house.price)
    house: House
}