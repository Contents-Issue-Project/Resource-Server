import express from "express";
const router = express.Router();
import contentsController from "../controllers/contentsController.js";

router.get('/trending/:result_count', contentsController.getTrendingContents);
router.get('/new/:result_count', contentsController.getNewContents);

// router.get('/content-detail')
// router.get('/season-detail')

export default router;