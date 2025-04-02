
import express from "express";
import "reflect-metadata";
import cors from "cors";
import * as dotenv from "dotenv";

import { dataSource } from "./config/db";

import ContactForm from "./controllers/contactFormController";
import Activity from "./controllers/activityController";
import House from "./controllers/houseController";
import Price from "./controllers/priceController";
import Residence from "./controllers/residenceController";
import Period from "./controllers/periodController";

dotenv.config();

const app = express();

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: '[SWAGGER] Residence Itylon API',
        version: '1.0.0',
        description:
            'This is a simple CRUD API application made with Express and documented with Swagger. It is meant to populate the project frontend with data.',
        contact: {
            name: 'Lucas Boillot',
            url: 'https://www.lucasboillot.fr/',
        },
    },
    servers: [
        {
            url: 'http://localhost:8002',
            description: 'Development server',
        },
        {
            url: 'https://www.residence-itylon.com/',
            description: 'Production server',
        }
    ],
};

const options = {
    swaggerDefinition,
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Residence Itylon API',
            version: '1.0.0',
        },
    },
    apis: ['./src/index.ts'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http://localhost:5173",
    ].filter(Boolean) as string[],
    methods: ["GET", "POST"]
}));

app.use(express.json());

const port = 8002;

app.use(express.json());

app.listen(port, async () => {
    await dataSource.initialize();
    console.log(`Server is listening on port ${port}`);
});

app.get("/api", (_req, res) => {
    res.status(200).send("The server is ON");
});

/**
 * @swagger
 * /contact-forms:
 *   get:
 *     summary: "Get all existing contact forms"
 *     description: "Get all existing contact forms in the database"
*/
app.get("/api/contact-forms", ContactForm.getAllContactForms);

/**
 * @swagger
 * /activies:
 *   get:
 *     summary: "Get all existing activities"
 *     description: "Get all existing activities in the database"
*/
app.get("/api/activities", Activity.getAllActivities);

/**
 * @swagger
 * /houses:
 *   get:
 *     summary: "Get all existing houses"
 *     description: "Get all existing houses in the database"
*/
app.get("/api/houses", House.getAllHouses);

/**
 * @swagger
 * /house/{id}:
 *   get:
 *     summary: "Get a specific house by its id"
 *     description: "Get a specific house by its id in the database"
 *     parameters:
 *      - in: path
 *        name: id
 *        description: "The id of the house to get"
 *        required: true
 *        schema:
 *          type: integer
 *          example: 1
*/
app.get("/api/house/:id", House.getHouseById);

app.get("/api/prices/houses", Price.getHousesPricing);

/**
 * @swagger
 * /prices:
 *   get:
 *     summary: "Get all existing prices"
 *     description: "Get all existing prices in the database"
*/
app.get("/api/prices", Price.getAllPrices);

/**
 * @swagger
 * /residences:
 *   get:
 *     summary: "Get all existing residences"
 *     description: "Get all existing residences in the database"
*/
app.get("/api/residences", Residence.getAllResidences);

/**
 * @swagger
 * /periods:
 *   get:
 *     summary: "Get all existing periods"
 *     description: "Get all existing periods in the database"
*/
app.get("/api/periods", Period.getAllPeriods);