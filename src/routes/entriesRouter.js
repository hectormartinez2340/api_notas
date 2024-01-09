import express from "express";
const router = express.Router();

//middlewares
import authUserController from "../middlewares/authUserController.JS";
import { addEntryPhotoController } from "../middlewares/index.js";

//controladores
import {
  newEntryController,
  listEntriesController,
} from "../controllers/entries/index.js";

//routes
router.get("./entries", listEntriesController);
router.post("/entries", authUserController, newEntryController);

//chequeamos si existe la nota
router.get("/entries/:entryId", getEntryController);

//fotos
router.post(
  "/entries/:entryId/photos",
  authUserController,
  cantEditController,
  addEntryPhotoController
);

export default router;
