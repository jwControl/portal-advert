import { AdvertCategory } from "../models/advertCategory";

export interface AdvertVM {
  title: string;
  longDescription: string;
  photoUrl: string;
  category: AdvertCategory;
  price: number;
}