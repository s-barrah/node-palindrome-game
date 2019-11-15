import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import DBService from './src/services/DB.service';

// import data
import models from './src/models';

// import modular routes
import routes from './src/routes';

// initialise the express app
const app = express();

// initialise DB service
const dbService = new DBService();

app.use(express.static(__dirname));

// enable cors
app.use(cors());

// enable body parser to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware
// sets up request context
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

// enable modular routes
app.use('/api', routes.AppRoute);





// Home route
app.get('/', function(req, res) {
	res.render('index.html');
});

const eraseDatabaseOnSync = true;

// Connect to mongodb
dbService.connect()
  .then( async () => {
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.GameModel.deleteMany({}),
      ]);
    }
    app.listen(process.env.PORT, () => {
      console.log('Server', process.pid, 'listening on port', process.env.PORT);
    });
  });

