import express from 'express';

import autorRouter from './autorRouter.js';
import livroRouter from './livroRouter.js';

const router = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'NerdStore' });
  });

  app.use(
    express.json(),
    autorRouter,
    livroRouter,
  );
};

export default router;
