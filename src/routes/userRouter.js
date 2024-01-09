import express from "express";

const router = express.Router();

import authUserController from "../middlewares/index.js";

import {
  newUserController,
  loginUserController,
  validateUserController,
} from "../controllers/users/index.js";

router.post("/users/register", newUserController);

router.post("/users/login", loginUserController);

router.get("/users/validate/:registrationCode", validateUserController);

router.get("/users", authUserController);
