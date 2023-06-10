import express from "express";

const router = express.Router();

import login from "../controllers/auth/login.js";
import register from "../controllers/auth/register.js";

router.post("/register", register);
router.post("/login", login);

export default router;
