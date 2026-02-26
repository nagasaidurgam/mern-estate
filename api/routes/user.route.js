import express from 'express';
import {test} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test); //dont forgot to add .js

export default router;