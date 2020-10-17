//TODO search router
import express from "express";
import searchController from "../controllers/searchController.js";
const router = express.Router();

router.post('/:contentType', searchController.searchContents);

export default router;