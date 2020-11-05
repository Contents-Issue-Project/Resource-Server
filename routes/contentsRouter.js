import express from "express";
const router = express.Router();
import contentsController from "../controllers/contentsController.js";

router.get('/trending/:result_count', contentsController.getTrendingContents);
router.get('/new/:result_count', contentsController.getNewContents);

//TODO router도 하위 계층으로 directory 분리해야 하는가?
//TODO 순서 배치 큰 범위부터 앞에 놔도 되는가?
router.get('/:content_id/season/:season_number/episode/:episode_number',
    contentsController.getEpisodeDetails);
router.get('/:content_id/season/:season_number', contentsController.getSeasonDetails);
router.get('/:content_id', contentsController.getContentDetails);

// router.get('/content-detail')
// router.get('/season-detail')

export default router;