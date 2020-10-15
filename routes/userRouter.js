import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();


router.get('/bookmark', userController.getUserBookmarks);
router.post('/bookmark', userController.addUserBookmark);
router.delete('/bookmark', userController.deleteUserBookmark);


// router.get('/user-details')
// router.get('/user-recent')
// router.update('/user-details')

export default router;