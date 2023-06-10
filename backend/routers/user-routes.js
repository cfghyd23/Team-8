import express from "express";
const { getAllUser, signup, login} = require("../controllers/user-controllers.js");

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;