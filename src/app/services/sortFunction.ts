import { AnimalAdvert } from '../models/animalAdvert';

export function sortByCreatedDate(a: AnimalAdvert, b: AnimalAdvert): number {
  return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
}

export function sortByHighestPrice(a: AnimalAdvert, b: AnimalAdvert): number {
  return b.price - a.price;
}

export function sortByLowestPrice(a: AnimalAdvert, b: AnimalAdvert): number {
  return a.price - b.price;
}
