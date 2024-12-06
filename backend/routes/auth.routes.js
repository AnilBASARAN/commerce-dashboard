import express from "express";
import { login, signup,logout, refreshToken, getProfile } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/login",login)
router.post("/logout",logout)
router.post("/sign-up",signup)
router.post("/refresh-token",refreshToken)
router.post("/profile",getProfile)

export default router;