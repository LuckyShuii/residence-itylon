import { validate } from "class-validator";
// import { Like } from "typeorm";
import { ContactForm } from "../entities/contactForm";

const ContactFormService = {
    getAllContactForms: async (): Promise<ContactForm[]> => {
        const result = await ContactForm.find();
        return result;
    },

    postNewContactForm: async (contactForm: ContactForm): Promise<ContactForm> => {
        // TODO: Send an email
        const newContactForm = ContactForm.create(contactForm);
        const errors = await validate(newContactForm)
        if (errors.length > 0) {
            let errorsArray: any = [];
            errors.forEach((e) => {
                errorsArray.push(e.constraints)
            })
            const displayedErrors = errorsArray.length > 0 ? errorsArray : ''
            throw new Error('Validation failed! ' + displayedErrors)
        } else {
            newContactForm.save();
            return newContactForm;
        }
    },
}

export default ContactFormService;