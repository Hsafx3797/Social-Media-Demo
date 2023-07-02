import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser, } from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleware.js";

const router = express.Router();

// router.get('/', async(req, res)=> {res.send("User Route")})


router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)


export default router;