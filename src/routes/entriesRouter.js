import express from "express";
const router = express.Router();

//middlewares
import { addEntryPhotoController } from "../middlewares/index.js";

//controladores
import {
  newEntryController,
  listEntriesController,
  getEntryController,
} from "../controllers/entries/index.js";

//routes
router.get("/entries", listEntriesController);
router.post("/entries", newEntryController);

//chequeamos si existe la nota
router.get("/entries/:entryId", getEntryController);

//fotos
router.post("/entries/:entryId/photos", addEntryPhotoController);

export default router;
