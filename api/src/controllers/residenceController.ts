import Residence from "../services/residenceService";
import { Request, Response } from "express";

const ResidenceController = {
    getAllResidences: async (_req: Request, res: Response) => {
        try {
            const residence = await Residence.getAllResidences();
            res.status(200).send(residence);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all Residences");
        }
    },
}

export default ResidenceController;