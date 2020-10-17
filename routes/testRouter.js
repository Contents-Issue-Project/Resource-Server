import express from "express";
const router = express.Router();
import testController from "../controllers/testController.js";

/* redis test */
router.get('/redis', testController.getRedisData);
router.post('/redis', testController.setRedisData);
router.delete('/redis', testController.deleteRedisData);

router.post('/mongo/user', testController.addUser);
router.post('/mongo/contents', testController.addContent);

/* mongo db test */
// router.get('/mongo', function(req, res, next) {
//     // console.log("hello!")
//     res.json({result:'hello'});
// });
// router.post('/mongo', function(req, res, next) {
//     // console.log("hello!")
//     res.json({result:'hello'});
// });
// router.delete('/mongo', function(req, res, next) {
//     // console.log("hello!")
//     res.json({result:'hello'});
// });

export default router;