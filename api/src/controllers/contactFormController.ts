import ContactFormService from "../services/contactFormService";
import { Request, Response } from "express";

const contactFormController = {
    getAllContactForms: async (_req: Request, res: Response) => {
        try {
            const contactForms = await ContactFormService.getAllContactForms();
            res.status(200).json(contactForms);
        } catch (err) {
            res.status(500).json({ message: "An error has occurred when trying to get all contact forms" });
        }
    },
};

export default contactFormController;
