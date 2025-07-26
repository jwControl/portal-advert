import {Request, Response} from 'express';
import {ADVERTS} from './db-data';

export var advertsKeyCounter = 100;

export function createAdvert(req: Request, res: Response) {

  console.log("Creating new advert ...");

  const changes = req.body;

  const newadvert = {
    id: advertsKeyCounter,
    seqNo: advertsKeyCounter,
    ...changes
  };

  ADVERTS[newadvert.id] = newadvert;

  advertsKeyCounter += 1;

  setTimeout(() => {

    res.status(200).json(newadvert);

  }, 1500);

}
