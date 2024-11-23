import { Period } from "../entities/period";

const PeriodService = {
    getAllPeriods: async (): Promise<Period[]> => {
        const result = await Period.find();
        return result;
    },
};

export default PeriodService;
