import express from "express";
import { login, signup,logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/login",login)
router.post("/logout",logout)
router.post("/signup",signup)

export default router;