import { Router } from 'express'

import AppController from '../controllers/App.controller';

const router = Router();

const appController = new AppController();

router.post('/submitEntry', appController.submitEntry);

router.get('/getScores', appController.getScores);

export default router;
