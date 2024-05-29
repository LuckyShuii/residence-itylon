import { validate } from "class-validator";
import { Ads } from "../entities/ads";
import { Tag } from "../entities/tag";
import { category } from "../entities/category";
import { Like } from "typeorm";

const adService = {
    getOneAdById: async (id: number) => {
        try {
            const ad = await Ads.findOne({
                relations: {
                    category: true,
                    tags: true
                },
                where: [{ id: id }]
            });
            return ad;
        } catch (err) {
            console.log("adService/getOneByid: ", err);
            return err;
        }
    },

    getAllAdsByFilter: async (name: string): Promise<Ads[]> => {
        try {
            const ads = await Ads.createQueryBuilder("ads")
                .leftJoinAndSelect("ads.category", "category")
                .leftJoinAndSelect("ads.tags", "tags")
                .where("tags.name = :name", { name: name })
                .getMany();
            return ads;
        } catch (err) {
            console.log("adService/getAllAdsByFilter: ", err)
            return err;
        }
    },

    getAllAds: async (): Promise<Ads[]> => {
        try {
            const ads = await Ads.find({
                relations: {
                    category: true,
                    tags: true
                }
            });
            return ads;
        } catch (err) {
            console.log("adService/getAllAds: ", err)
            return err;
        }
    },

    getAdsByCategoryName: async (categoryName: string): Promise<category[]> => {
        try {
            const adsByCategory = await category.find({
                select: {
                    "title": true
                },
                relations: {
                    ads: true
                },
                where: [{
                    title: categoryName
                }]
            });
            return adsByCategory;
        } catch (err) {
            console.log("adService/getAdsByCategoryName: ", err)
            return err;
        }
    },

    postNewAd: async (ad: any, tags: null | Tag[]): Promise<void> => {
        const newAd = Ads.create(ad);
        if (tags) {
            newAd.tags = tags.map((el: Tag) => ({ id: el }))
        }
        const errors = await validate(newAd)
        if (errors.length > 0) {
            let errorsArray: any = [];
            errors.forEach((e) => {
                errorsArray.push(e.constraints)
            })
            const displayedErrors = errorsArray.length > 0 ? errorsArray : ''
            throw new Error('Validation failed!' + displayedErrors)
        } else {
            newAd.save();
        }
    },

    postResearchAds: async (keyword: string): Promise<Ads[]> => {
        try {
            const ads = await Ads.find({
                relations: {
                    category: true,
                    tags: true
                },
                where: [{ title: Like(`%${keyword}%`) }]
            });
            return ads;
        } catch (err) {
            console.log("adService/postResearchAds: ", err)
            return err;
        }
    },

    editAdPut: async (id: string, bodyRequest: any, tags: null | Tag[]) => {
        try {
            let ad = await Ads.findOneByOrFail({ id: parseInt(id) });
            ad = { ...ad, ...bodyRequest };
            if (tags) {
                ad.tags = tags;
            }
            return ad;
        } catch (err) {
            console.log("adService/editAdPut: ", err)
            return err;
        }
    },

    deleteAdById: async (id: number): Promise<string> => {
        try {
            await Ads.delete({ id });
            return 'ok';
        } catch (err) {
            return err;
        }
    }
}

export default adService;