import Price from "../services/priceService";
import { Request, Response } from "express";

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
            const prices = await Price.getAllPrices();
            res.status(200).send(prices);
        } catch (err) {
            res.status(500).send("An error has occured when trying to get all prices");
        }
    },

    getHousesPricing: async (_req: Request, res: Response) => {
        try {
            const prices = await Price.getAllPrices();

            const seasonMapping = {
                lowSeason: { season: "Basse saison", dates: "Avril, Mai & Octobre" },
                mediumSeason: { season: "Moyenne saison", dates: "Juin & Septembre" },
                highSeason: { season: "Haute saison", dates: "Du 1er au 27/07" },
                veryHighSeason: { season: "Très haute saison", dates: "Du 28/07 au 24/08" },
                cleaningFee: { season: "Ménage", dates: "" }
            };
            
            const housesType1 = ['romarin', 'eucalyptus', 'laurier', 'olivier', 'rosier', 'ciste', 'myrte', 'lentisque'];
            
            const transformedData = Object.entries(seasonMapping).map(([key, value]) => {
                const type1House = prices.find(house => housesType1.includes(house.house.title.toLowerCase()));
                const otherHouses = prices.filter(house => !housesType1.includes(house.house.title.toLowerCase()));
            
                return {
                    season: value.season,
                    dates: value.dates,
                    pricesWithHouseName: [
                        ...(type1House ? [{ houseName: "Type 1", price: type1House[key as keyof HouseData] }] : []),
                        ...otherHouses.map((house) => ({
                            houseName: house.house.title,
                            price: house[key as keyof HouseData]
                        }))
                    ]
                };
            });

            res.status(200).send(transformedData);
        } catch (err) {
            res.status(500).send("An error has occurred when trying to get all houses pricing");
        }
    }
}

export default PriceController;