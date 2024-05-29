import ContactFormService from "../services/contactFormService";
import { Request, Response } from "express";

const contactFormController = {
    getAllContactForms: async (_req: Request, res: Response) => {
        try {
            const contactForm = await ContactFormService.getAllContactForms();
            res.status(200).send(contactForm);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all contact forms");
        }
    },

    postNewContactForm: async (req: Request, res: Response): Promise<void> => {
        try {
            const CF = await ContactFormService.postNewContactForm(req.body)
            res.status(201).send('Contact Form was successfuly added' + CF);
        } catch (err) {
            res.status(500).send("An error has occured when trying to send a new contact form")
        }
    },
}

export default contactFormController;