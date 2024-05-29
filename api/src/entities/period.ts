import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Min } from "class-validator";

@Entity()
export class Period extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Min(1)
    name: string;

    @Column()
    @Min(1)
    startDate: Date;

    @Column()
    @Min(1)
    endDate: Date;
}