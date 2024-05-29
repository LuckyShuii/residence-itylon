import { Activity } from "../entities/activity";

const ActivityService = {
    getAllActivities: async (): Promise<Activity[]> => {
        const result = await Activity.find();
        return result;
    },
}

export default ActivityService;