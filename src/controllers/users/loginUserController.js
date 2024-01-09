import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import selectUserByEmailModel from "../../models/users/selectUserByEmailModel.js";
import {
  invalidCredentialsError,
  pendingActivationError,
} from "../../services/errorService.js";

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);

    let validPassword;

    if (user) {
      validPassword = await bcrypt.compare(password, user.password);
    }

    if (!user || !validPassword) {
      invalidCredentialsError();
    }

    //pending
    if (!user.active) {
      pendingActivationError();
    }

    /*token*/
    const tokenInfo = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(token.info, process.env.SECRET, {
      expireIn: "7d",
    });

    res.send({
      status: "ok",
      data: {
        token: "va token",
      },
    });
  } catch (error) {
    next(error);
  }
};

export default loginUserController;
