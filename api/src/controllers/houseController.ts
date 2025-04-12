import houseService from "../services/houseService";
import House from "../services/houseService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const HouseController = {
    getAllHouses: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allHouses");

            if (cacheResult) {
                return res.status(200).send(JSON.parse(cacheResult));
            }

            const house = await House.getAllHouses();

            await redisClient.set('allHouses', JSON.stringify(house), {
                EX: 60 * 60 * 24, // 1 day
                NX: true, // Only set the key if it does not already exist
            });

            return res.status(200).send(house);
        } catch (err) {
            return res.status(500).send("An error has occurred when trying to get all houses");
        }
    },

    getHouseById: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const ad = await houseService.getHouseById(id);
            res.status(200).send(ad);
        } catch (err) {
            res.status(500).send('An error has occurred when trying to get the house');
        }
    },
}

export default HouseController;