import express from "express";
import { login, signup,logout,refreshToken, getProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/login",login)
router.post("/logout",logout)
router.post("/sign-up",signup)
router.post("/refresh-token",refreshToken)
router.get("/profile",protectRoute,getProfile)

export default router;