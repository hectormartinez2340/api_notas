import insertPhotoModel from "../../models/entries/insertPhotoModel.js";
import selectEntryByIdModel from "../../models/entries/selectEntryByIdModel.js";
import { photoLimitError } from "../../services/errorService.js";
import { savePhotoService } from "../../services/photoService.js";

const addEntryPhotoController = async (req, res, next) => {
  try {
    const { entryId } = req.params;

    //ver si la entrada tiene 3 fotos
    const entry = await selectEntryByIdModel(entryId);

    if (entry.photos.length > 1) photoLimitError();

    // console.log(req.files, 'files');
    const photoName = await savePhotoService(req.files.photo, 1);

    const photoId = await insertPhotoModel(photoName, entryId);

    res.send({
      status: "ok",
      data: {
        photo: {
          id: photoId,
          name: photoName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export default addEntryPhotoController;
