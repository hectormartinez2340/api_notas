import express from "express";

const router = express.Router();

import {
  newUserController,
  loginUserController,
  validateUserController,
} from "../controllers/users/index.js";

router.post("/users/register", newUserController);

router.post("/users/login", loginUserController);

router.get("/users/validate/:registrationCode", validateUserController);

export default router;
