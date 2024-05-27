import express from 'express'
import { getTypesPayments } from '../controllers/servicesController.js'
const router = express.Router();

router.route('/')
    .get(getTypesPayments);

export default router;