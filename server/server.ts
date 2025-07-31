import * as express from 'express';
import { Application } from 'express';

import { searchAdverts } from './search-adverts.route';
import { saveAdvert } from './save-advert.route';
import { loginUser } from './login.route';
import { createAdvert } from './create-advert.route';
import { deleteAdvert } from './delete-advert.route';
import { getAdvertById, getAllAdverts } from './get-adverts.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

app.route('/api/adverts').get(getAllAdverts);

app.route('/api/adverts').post(createAdvert);

app.route('/api/adverts/:id').get(getAdvertById);

app.route('/api/search-adverts').get(searchAdverts);

app.route('/api/adverts/:id').put(saveAdvert);

app.route('/api/adverts/:id').delete(deleteAdvert);

// app.route('/api/lessons/:id').put(saveLesson);

app.route('/api/login').post(loginUser);

const httpServer: any = app.listen(9000, () => {
  console.log('HTTP REST API Server running at http://localhost:9000');
});
