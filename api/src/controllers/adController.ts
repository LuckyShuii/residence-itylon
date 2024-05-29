import { Ads } from "../entities/ads";
import adService from "../services/adService";
import { Request, Response } from "express";

const adController = {
    getOneById: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const ad = await adService.getOneAdById(id);
            res.status(200).send(ad);
        } catch (err) {
            res.status(500).send('adController/getOneById: An error has occured');
        }
    },

    getAllAds: async (req: Request, res: Response) => {
        try {
            if (req.query.filter) {
                const filter = req.query.filter;
                const ads = await adService.getAllAdsByFilter(filter as string)
                res.status(200).send(ads)
            } else {
                const ads = await adService.getAllAds()
                res.status(200).send(ads);
            }
        } catch (err) {
            res.status(500).send("adController/getAllAds: An error has occured");
        }
    },

    getAdsByCategoryName: async (req: Request, res: Response) => {
        try {
            const adsByCategory = await adService.getAdsByCategoryName(req.params.categoryName)
            res.send(adsByCategory);
        } catch (err) {
            res.status(500).send("adController/getAdsByCategoryName: An error has occured")
        }
    },

    postNewAd: async (req: Request, res: Response): Promise<void> => {
        try {
            const ad = await adService.postNewAd(req.body, req.body.tags ? req.body.tags : '')
            res.status(201).send('Ad was successfuly added' + ad);
        } catch (err) {
            res.status(500).send("adController/postNewAd: An error has occured")
        }
    },

    postResearchAds: async (req: Request, res: Response) => {
        try {
            const ads = await adService.postResearchAds(req.body.keyword)
            res.status(200).send(ads)
        } catch (err) {
            res.status(500).send("An error has occured");
        }
    },

    editAdPut: async (req: Request, res: Response) => {
        try {
            let ad = await adService.editAdPut(req.params.id, req.body, req.body.tags ? req.body.tags : '')
            Ads.save(ad);
            res.status(200).send(ad)
        } catch (err) {
            res.send("An error has occured: " + err)
        }
    },

    deleteAdById: async (req: Request, res: Response) => {
        try {
            const deleteAd = adService.deleteAdById(Number.parseInt(req.params.id))
            res.status(200).send('Ads was deleted' + deleteAd);
        } catch (err) {
            res.status(500).send("An error has occured: " + err);
        }

    }
}

export default adController;