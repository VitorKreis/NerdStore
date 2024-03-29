import express from 'express';

import autorRouter from './autorRouter.js';
import livroRouter from './livroRouter.js';
import artistaRouter from './artistaRouter.js';
import mangaRouter from './mangaRouter.js';

const router = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'NerdStore' });
  });

  app.use(
    express.json(),
    autorRouter,
    livroRouter,
    artistaRouter,
    mangaRouter,
  );
};

export default router;
