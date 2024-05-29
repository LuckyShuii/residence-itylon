import Activity from "../services/activityService";
import { Request, Response } from "express";

const activityController = {
    getAllActivities: async (_req: Request, res: Response) => {
        try {
            const activity = await Activity.getAllActivities();
            res.status(200).send(activity);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all activities");
        }
    },
}

export default activityController;