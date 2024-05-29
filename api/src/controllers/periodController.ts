import Period from "../services/periodService";
import { Request, Response } from "express";

const PeriodController = {
    getAllPeriods: async (_req: Request, res: Response) => {
        try {
            const period = await Period.getAllPeriods();
            res.status(200).send(period);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all periods");
        }
    },
}

export default PeriodController;