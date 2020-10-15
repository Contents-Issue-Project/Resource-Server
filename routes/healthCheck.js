import express from "express";
const router = express.Router();

/* healthCheck */
router.get('/', function(req, res, next) {
    // console.log("hello!")
    res.json({result:'hello'});
});

export default router;