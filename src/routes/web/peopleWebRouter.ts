import express from 'express';
import PeopleController from '../../controllers/PeopleController.js';
const router = express.Router();

router.get('/', PeopleController.index);

export default router;
