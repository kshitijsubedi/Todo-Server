import './env.js';
import './db.js';

import path from "path";
import express from 'express';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/index.js';
import {options} from './docs/swagger.js'
import responsify from './middlewares/response.js';

const app = express();
const specs = swaggerJsdoc(options);

const __dirname = path.resolve();
const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,'view')))

// React Frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'view','index.html'))
});

// Swagger Docs
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
  );
  
// API Routes
app.use('/api',responsify, routes);

app.listen(app.get('port'), app.get('host'), () => {
  console.info(`📢 Server started at http://${app.get('host')}:${app.get('port')}/api
  ✨ React running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
