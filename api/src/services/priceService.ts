import { Price } from "../entities/price";
import House from "../services/houseService";

const PriceService = {
    getAllPrices: async (): Promise<Price[]> => {
        const result = await Price.find({
            relations: {
                house: true
            },
        });
        return result;
    },

    getPriceByHouseId: async (houseId: number) => {
        try {
            const house = await House.getHouseById(houseId)

            const result = await Price.findOne({
                relations: {
                    house: true
                },
                where: [{ house: house}]
            })
            return result;
        } catch (err) {
            return err
        }
    },
}

export default PriceService;