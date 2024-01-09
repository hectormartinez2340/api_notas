import upDateUserRegCodeModel from "../models/users/upDateUserRegCodeModel.js";

const validateUserController = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

    await upDateUserRegCodeModel(registrationCode);

    res.send({
      status: "ok",
      message: "Usuario Activo",
    });
  } catch (error) {
    next(error);
  }
};

export default validateUserController;
