import Period from "../services/periodService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const PeriodController = {
    getAllPeriods: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allPeriods");

            if (cacheResult) {
                return res.status(200).send(JSON.parse(cacheResult));
            }

            const period = await Period.getAllPeriods();
            
            await redisClient.set('allPeriods', JSON.stringify(period), {
                EX: 60 * 60 * 24, // 1 day
                NX: true, // Only set the key if it does not already exist
            });
            
            return res.status(200).send(period);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all periods");
        }
    },
}

export default PeriodController;