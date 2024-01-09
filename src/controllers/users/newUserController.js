import randomstring from "randomstring";

import insertUserModel from "../../models/users/insertUserModel.js";

const newUserController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const registrationCode = randomstring.generate(30);

    await insertUserModel(username, email, password, registrationCode);

    res.send({
      status: "ok",
      message:
        "Usuario registrado. Verifique su cuenta mediante el Email compartido",
    });
  } catch (error) {
    next(error);
  }
};

export default newUserController;
