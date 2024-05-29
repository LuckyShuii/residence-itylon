import { Residence } from "../entities/residence";

const ResidenceService = {
    getAllResidences: async (): Promise<Residence[]> => {
        const result = await Residence.find();
        return result;
    },
}

export default ResidenceService;