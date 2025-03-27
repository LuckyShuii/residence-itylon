import type { PriceType } from '@/types/PriceType';

export interface HouseType {
    id: number;
    title: string;
    descriptionTitle: string;
    description: string;
    previewPicture: string;
    pictures: string;
    capacityMin: number;
    capacityMax: number;
    wifi: number;
    barbecue: number;
    ac: number;
    parking: number;
    terrace: number;
    bed: number;
    canapeLit: number;
    kitchen: number;
    bathroom: number;
    room: number;
    price: PriceType[];
}