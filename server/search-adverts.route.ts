import { Request, Response } from 'express';
import { ADVERTS } from './db-data';
import { setTimeout } from 'timers';

export function searchAdverts(req: Request, res: Response) {
  const query = req.query['query'] as string;
  const category = req.query['category'] as string; // Extract category from query params

  const allAdverts: any[] = Object.values(ADVERTS);

  // If neither query nor category is provided, return all adverts
  if (!query && !category) {
    res.status(200).json({ adverts: allAdverts });
    return;
  }

  let filtered: any[] = allAdverts;
  console.log(`Filtering total adverts ${filtered?.length}`, allAdverts);

  if (query) {
    filtered = filtered.filter(
      (advert) =>
        advert?.title?.trim()?.toLowerCase()?.search(query?.toLowerCase()) >= 0
    );
  }

  if (category) {
    filtered = filtered.filter(
      (advert) => advert?.category?.toLowerCase() === category?.toLowerCase()
    );
  }

  const adverts = filtered.slice(0, 10);

  setTimeout(() => {
    res.status(200).json({ adverts });
  }, 1000);
}
