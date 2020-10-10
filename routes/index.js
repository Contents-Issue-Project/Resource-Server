import express from "express";
import cors from "cors";
import healthCheck from './healthCheck.js';

const router = express.Router();
router.use(cors());

router.get('/hello', healthCheck);

export default router;
