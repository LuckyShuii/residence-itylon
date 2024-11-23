import express from "express";
import "reflect-metadata";
import cors from "cors";
import { dataSource } from "./config/db";

import ContactForm from "./controllers/contactFormController";
import Activity from "./controllers/activityController";
import House from "./controllers/houseController";
import Price from "./controllers/priceController";
import Residence from "./controllers/residenceController";
import Period from "./controllers/periodController";

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

app.use(cors());
app.use(express.json());

const port = 8002;

app.use(express.json());

app.listen(port, async () => {
    await dataSource.initialize();
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (_req, res) => {
    res.status(200).send("The server is ON");
});

/**
 * @swagger
 * /contact-form:
 *   post:
 *     summary: "Create a new contact form"
 *     description: "Create a new contact form in the database, and send an email to the user & the admin with the contact form informations"
 *     parameters:
 *      - in: body
 *        name: contactForm
 *        description: "Example of a contact form object to create in the database"
 *        schema:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *              description: "The first name of the contact form"
 *              example: "John"
 *            lastName:
 *              type: string
 *              description: "The last name of the contact form"
 *              example: "Doe"
 *            email:
 *              type: string
 *              description: "The email of the contact form"
 *              example: "john@doe.com"
 *            phone:
 *              type: string
 *              description: "The phone number of the contact form"
 *              example: "0606060606"
 *            message:
 *              type: string
 *              description: "The message of the contact form"
 *              example: "Hello, I am interested in your product"
*/
app.post("/contact-form", ContactForm.postNewContactForm);

/**
 * @swagger
 * /contact-forms:
 *   get:
 *     summary: "Get all existing contact forms"
 *     description: "Get all existing contact forms in the database"
*/
app.get("/contact-forms", ContactForm.getAllContactForms);

/**
 * @swagger
 * /activies:
 *   get:
 *     summary: "Get all existing activities"
 *     description: "Get all existing activities in the database"
*/
app.get("/activities", Activity.getAllActivities);

/**
 * @swagger
 * /houses:
 *   get:
 *     summary: "Get all existing houses"
 *     description: "Get all existing houses in the database"
*/
app.get("/houses", House.getAllHouses);

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
app.get("/house/:id", House.getHouseById);

/**
 * @swagger
 * /prices:
 *   get:
 *     summary: "Get all existing prices"
 *     description: "Get all existing prices in the database"
*/
app.get("/prices", Price.getAllPrices);

/**
 * @swagger
 * /residences:
 *   get:
 *     summary: "Get all existing residences"
 *     description: "Get all existing residences in the database"
*/
app.get("/residences", Residence.getAllResidences);

/**
 * @swagger
 * /periods:
 *   get:
 *     summary: "Get all existing periods"
 *     description: "Get all existing periods in the database"
*/
app.get("/periods", Period.getAllPeriods);