import express, { Router } from 'express';
import peopleApiRouter from './api/peopleApiRouter.js';
import peopleWebRouter from './web/peopleWebRouter.js';
import { notFound, appError } from '../middlewares/error.middleware.js';

const router: Router = express.Router();
router.use('/api/v1/people', peopleApiRouter);
router.use('/views/people', peopleWebRouter);
router.use(notFound);
router.use(appError);

export default router;
