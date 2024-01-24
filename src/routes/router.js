import express from 'express';

import autorRouter from './autorRouter.js';

const router = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'NerdStore' });
  });

  app.use(
    express.json(),
    autorRouter,
  );
};

export default router;
