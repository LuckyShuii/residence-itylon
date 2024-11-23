import Price from "../services/priceService";
import { Request, Response } from "express";

const PriceController = {
    getAllPrices: async (_req: Request, res: Response) => {
        try {
            const price = await Price.getAllPrices();
            res.status(200).send(price);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all prices");
        }
    }
}

export default PriceController;