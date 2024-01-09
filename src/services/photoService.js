import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
import { saveFileError, deleteFileError } from "./errorService.js";

dotenv.config();
const { UPLOADS_DIR } = process.env;

//guarda una imagen EN EL DISCO NO EN LA BD
export const savePhotoService = async (img, width) => {
  try {
    const uploadDir = path.join(process.cwd(), `./src/${UPLOADS_DIR}`);

    //crear carpeta uploads si no existe
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir);
    }

    //crear un objeto de tipo sharp
    const sharpImg = sharp(img.data);

    sharpImg.resize(width);

    const imgName = `${uuid()}.jpg`;

    const imgPath = path.join(uploadDir, imgName);

    //guarda la imagen en el disco
    await sharpImg.toFile(imgPath);

    return imgName;
  } catch (error) {
    saveFileError();
  }
};

export const deletePhotoService = async (imgName) => {
  try {
    const imgPath = path.join(process.cwd(), `./src/${UPLOADS_DIR}`, imgName);

    try {
      await fs.access(imgPath);
    } catch {
      return;
    }

    await fs.unlink(imgPath);
  } catch (error) {
    deleteFileError();
  }
};
