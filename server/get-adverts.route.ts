import { Request, Response } from 'express';
import { ADVERTS } from './db-data';

export function getAllAdverts(req: Request, res: Response) {
  /*
      console.log("ERROR loading adverts!");
      res.status(500).json({message: 'error occurred.'});
      return;
  */

  console.log(`Called GET /api/adverts`);

  setTimeout(() => {
    console.log(`Returning GET /api/adverts`);

    res.status(200).json({ adverts: Object.values(ADVERTS) });
  }, 1000);
}

export function getAdvertById(req: Request, res: Response) {
  setTimeout(() => {
    const advertId = req.params['id'];

    const adverts: any = Object.values(ADVERTS);

    const advert = adverts.find((advert: { id: string; }) => advert.id == advertId);

    res.status(200).json(advert);
  });
}
