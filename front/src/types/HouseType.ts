import type { PriceType } from '@/types/PriceType';

export interface HouseType {
    id: number;
    title: string;
    descriptionTitle: string;
    previewPicture: string;
    pictures: string;
    capacity: string;
    wifi: number;
    barbecue: number;
    ac: number;
    parking: number;
    terrace: number;
    bed: string;
    kitchen: number;
    bathroom: number;
    room: number;
    price: PriceType[];
}