
import {Request, Response} from 'express';
import {ADVERTS} from "./db-data";

export function deleteAdvert(req: Request, res: Response) {

  console.log("Deleting advert ...");

  const id = req.params["id"];

  const advert = ADVERTS[id];

  delete ADVERTS[id];

  setTimeout(() => {

    res.status(200).json({id});

  }, 1500);

}

