import express from "express";
import "reflect-metadata";
import cors from "cors";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import { dataSource } from "./config/db";

import ContactForm from "./controllers/contactFormController";
import Activity from "./controllers/activityController";
import House from "./controllers/houseController";
import Price from "./controllers/priceController";
import Residence from "./controllers/residenceController";
import Period from "./controllers/periodController";

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http://localhost:5173",
    ].filter(Boolean) as string[],
    methods: ["GET", "POST"]
}));

app.use(express.json());

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests from this IP, please try again later.',
    headers: true,
});

app.use(limiter);

const port = 8002;

app.listen(port, async () => {
    await dataSource.initialize();
    console.log(`Server is listening on port ${port}`);
});

app.get("/api", (_req, res) => {
    res.status(200).send("The server is ON");
});

app.get("/api/contact-forms", ContactForm.getAllContactForms);
app.get("/api/activities", Activity.getAllActivities);
app.get("/api/houses", House.getAllHouses);
app.get("/api/house/:id", House.getHouseById);
app.get("/api/prices/houses", Price.getHousesPricing);
app.get("/api/prices", Price.getAllPrices);
app.get("/api/residences", Residence.getAllResidences);
app.get("/api/periods", Period.getAllPeriods);
