import express from "express";
const router = express.Router();

/* healthCheck */
router.get('/', function(req, res, next) {
    res.send('hello');
});

export default router;