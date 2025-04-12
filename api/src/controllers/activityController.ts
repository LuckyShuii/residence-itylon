import Activity from "../services/activityService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const activityController = {
    getAllActivities: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get('allActivities');

            if (cacheResult) {
                return res.status(200).send(JSON.parse(cacheResult));
            }

            const activity = await Activity.getAllActivities();
            await redisClient.set('allActivities', JSON.stringify(activity), {
                EX: 60 * 60 * 24, // 1 day
                NX: true, // Only set the key if it does not already exist
            });
            return res.status(200).send(activity);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all activities");
        }
    },
}

export default activityController;