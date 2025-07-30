import { AnimalAdvert } from '../models/animalAdvert';

export function sortByCreatedDate(a: AnimalAdvert, b: AnimalAdvert): number {
  return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
}
