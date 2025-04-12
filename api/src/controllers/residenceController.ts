import Residence from "../services/residenceService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const ResidenceController = {
    getAllResidences: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allResidences");

            if (cacheResult) {
                const allResidences = JSON.parse(cacheResult);
                return res.status(200).send(allResidences);
            }
            
            const residence = await Residence.getAllResidences();

            await redisClient.set('allResidences', JSON.stringify(residence), {
                EX: 60 * 60 * 24, // 1 day
                NX: true, // Only set the key if it does not already exist
            });
            
            return res.status(200).send(residence);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all Residences");
        }
    },
}

export default ResidenceController;