import houseService from "../services/houseService";
import House from "../services/houseService";
import { Request, Response } from "express";

const HouseController = {
    getAllHouses: async (_req: Request, res: Response) => {
        try {
            const house = await House.getAllHouses();
            res.status(200).send(house);
        } catch (err) {
            res.status(500).send("An error has occurred when trying to get all houses");
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
    }
}

export default HouseController;