import {Request, Response} from 'express';
import {ADVERTS} from "./db-data";
import {setTimeout} from 'timers';


export function saveAdvert(req: Request, res: Response) {

  /*
    console.log("ERROR saving advert!");
    res.sendStatus(500);
    return;
  */


  const id = req.params["id"],
    changes = req.body;

  console.log("Saving advert changes", id, JSON.stringify(changes));

  const newAdvert = {
    ...ADVERTS[id],
    ...changes
  };

  ADVERTS[id] = newAdvert;

  console.log("new advert version", newAdvert);

  setTimeout(() => {

    res.status(200).json(ADVERTS[id]);

  }, 1500);



}
