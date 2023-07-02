import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";
const router = express.Router()

// router.get('/', async(req, res)=> {res.send("Post Route")})


router.get("/:id/timeline", getTimelinePosts)
router.put("/:id/likes", likePost)
router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
export default router;