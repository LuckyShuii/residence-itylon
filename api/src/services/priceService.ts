import { Price } from "../entities/price";

const PriceService = {
    getAllPrices: async (): Promise<Price[]> => {
        const result = await Price.find({
            relations: {
                house: true
            },
        });
        return result;
    },
}

export default PriceService;