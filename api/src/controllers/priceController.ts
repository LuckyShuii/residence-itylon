import Price from "../services/priceService";
import { Request, Response } from "express";
import { redisClient } from "../index";

type HouseData = {
    id: number;
    lowSeason: number;
    mediumSeason: number;
    highSeason: number;
    veryHighSeason: number;
    cleaningFee: number;
    house: {
        id: number;
        title: string;
    };
};

const PriceController = {
    getAllPrices: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allPrices");

            if (cacheResult) {
                const allPrices = JSON.parse(cacheResult);
                return res.status(200).send(allPrices);
            }

            const prices = await Price.getAllPrices();

            await redisClient.set('allPrices', JSON.stringify(prices), {
                EX: 60 * 60 * 24, // 1 day
                NX: true, // Only set the key if it does not already exist
            });
            
            return res.status(200).send(prices);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all prices");
        }
    },

    getHousesPricing: async (_req: Request, res: Response) => {
        const housesPricingCache = await redisClient.get("housesPricing");

        if (housesPricingCache) {
            return res.status(200).send(JSON.parse(housesPricingCache));
        }

        try {
            const cacheResult = await redisClient.get("allPrices");
            const prices = cacheResult ? JSON.parse(cacheResult) : await Price.getAllPrices();

            const seasonMapping = {
                lowSeason: { season: "Basse saison", dates: "Avril, Mai & Octobre" },
                mediumSeason: { season: "Moyenne saison", dates: "Juin & Septembre" },
                highSeason: { season: "Haute saison", dates: "Du 1er au 27/07" },
                veryHighSeason: { season: "Très haute saison", dates: "Du 28/07 au 24/08" },
                cleaningFee: { season: "Ménage", dates: "" }
            };
            
            const housesType1 = ['romarin', 'eucalyptus', 'laurier', 'olivier', 'rosier', 'ciste', 'myrte', 'lentisque'];
            
            const transformedData = Object.entries(seasonMapping).map(([key, value]) => {
                const type1House = prices.find((house: any) => housesType1.includes(house.house.title.toLowerCase()));
                const otherHouses = prices.filter((house: any) => !housesType1.includes(house.house.title.toLowerCase()));
            
                return {
                    season: value.season,
                    dates: value.dates,
                    pricesWithHouseName: [
                        ...(type1House ? [{ houseName: "Type 1", price: type1House[key as keyof HouseData] }] : []),
                        ...otherHouses.map((house: any) => ({
                            houseName: house.house.title,
                            price: house[key as keyof HouseData]
                        }))
                    ]
                };
            });

            await redisClient.set('housesPricing', JSON.stringify(transformedData), {
                EX: 60 * 60 * 1, // 1 hour
                NX: true, // Only set the key if it does not already exist
            });

            return res.status(200).send(transformedData);
        } catch (err) {
            return res.status(500).send("An error has occurred when trying to get all houses pricing");
        }
    }
}

export default PriceController;