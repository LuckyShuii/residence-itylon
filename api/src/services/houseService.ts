import { House } from "../entities/house";

const houseService = {
    getAllHouses: async (): Promise<House[]> => {
        const allHouses = await House.find({
            relations: {
                price: true,
            },
        });
        return allHouses;
    },

    getHouseById: async (id: number) => {
        try {
            const ad = await House.findOne({
                relations: {
                    price: true
                },
                where: [{ id: id }]
            });
            return ad;
        } catch (err) {
            return err;
        }
    },
}

export default houseService;