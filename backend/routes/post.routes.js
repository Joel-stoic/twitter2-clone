import { protectRoute } from "../middleware/protectRoute.js";
import express from "express";
import { commentOnPost, createPost, deletePost, likeUnlikePost ,getAllPosts,getLikedPosts,getAFollowingPosts,getUserPosts} from "../controllers/post.controller.js";


const router=express.Router()


router.get("/all",protectRoute,getAllPosts)
router.get("/following",protectRoute,getAFollowingPosts)
router.get("/likes/:id",protectRoute,getLikedPosts)
router.get("/user/:username",protectRoute,getUserPosts)
router.post("/create",protectRoute,createPost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentOnPost)
router.delete("/:id",protectRoute,deletePost)



export default router;