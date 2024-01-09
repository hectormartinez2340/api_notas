import bcrypt from "bcrypt";
import getpool from "../../../database/getpool.js";
import sendMailUtil from "../../../util/sendMailUtil.js";

import {
  emailAlReadyRegistratedError,
  userAlReadyRegistratedError,
} from "../../../services/errorService.js";

const insertUserModel = async (username, email, password, registrationCode) => {
  const pool = await getpool();

  let [user] = await pool.query(`SELECT id users WHERE username = ?`, [
    username,
  ]);
  if (user.lenght) {
    userAlReadyRegistratedError();
  }

  [user] = await pool.query(`SELECT id users WHERE email = ?`, [email]);

  if (user.lenght) {
    emailAlReadyRegistratedError();
  }
};

/**ya puedo darle de alta al usuario */ */

const emailSubject = "Activa tu usuario de App de notas";
const emailBody = `
!!!Bienvenid@ a ${username}!!!

Esta sera tu poderosa herramienta de notas. Haz click en el sigguiente enlace:

<a href="http//localhost:3001/users/validate/${registrationCode}">Activar mi cuenta</a>

`;

await sendMailUtil(email, emailSubject, emailBody);

const hashedpassword = bcrypt.hash(password, 10);

await pool.query(
  `
INSERT INTO users (username, email, password, registrationCode) VALUES (?,?,?,?)
`,
  [username, email, hashedPassword, registrationCode]
);

export default insertUserModel;
