import { DataSource } from "typeorm";
import { Activity } from "../entities/activity";
import { ContactForm } from "../entities/contactForm";
import { House } from "../entities/house";
import { Price } from "../entities/price";
import { Residence } from "../entities/residence";
import { Period } from "../entities/period";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "residence.sqlite",
    entities: [Activity, ContactForm, House, Price, Residence, Period],
    synchronize: process.env.STATUS === "DEV" ? true : false,
    logging: ["error", "query"]
});
