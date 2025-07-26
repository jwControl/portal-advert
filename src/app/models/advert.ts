import { AdvertCategory } from './advertCategory';

export interface Advert {
  id: number;
  title: string;
  longDescription: string;
  photoUrl: string;
  category: AdvertCategory;
  seqNo: number;
  price: number;
  createdDate: string;
}
