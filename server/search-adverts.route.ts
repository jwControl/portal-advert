import {Request, Response} from 'express';
import {ADVERTS} from "./db-data";
import {setTimeout} from "timers";


export function searchAdverts(req: Request, res: Response) {

  const query = req.query["query"] as string;
    // courseId = req.query["courseId"] as string;

  const allAdverts: any[] = Object.values(ADVERTS);

  if (!query) {
    res.status(200).json({adverts: []});
    return;
  }

  let filtered: any[] = allAdverts;
  console.log(`Filtering total adverts ${filtered?.length}`, allAdverts)

  // if (courseId) {
  //   console.log(`Filtering by courseId ${parseInt(courseId)}`)
  //   filtered = filtered.filter(advert => advert.courseId == parseInt(courseId));
  // }

  if (query) {
    filtered = allAdverts.filter(
      advert => advert?.description?.trim()?.toLowerCase()?.search(query?.toLowerCase()) >= 0);
  }

  const adverts = filtered.slice(0, 10); 

  setTimeout(() => {
    res.status(200).json({adverts});
  }, 1000);

}
