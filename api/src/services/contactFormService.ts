import { ContactForm } from "../entities/contactForm";

const ContactFormService = {
    getAllContactForms: async (): Promise<ContactForm[]> => {
        const result = await ContactForm.find();
        return result;
    },
}

export default ContactFormService;