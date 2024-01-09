export const notFoundError = (resourse) => {
  throw {
    httpStatus: 404,
    code: "RESOURCE_NOT_FOUND",
    message: `El recurso requerido '${resourse}' no se encuentra`,
  };
};

//servira para NewUserController
export const userAlReadyRegistratedError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: "USER_ALREADY_REGISTERED",
    message: `El nombre de usuario ya se encuentra registrado`,
  };
}; // lo enviara a insertUserMOdels.js

export const emailAlReadyRegistratedError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: "EMAIL_ALREADY_REGISTERED",
    message: `El email ya se encuentra registrado`,
  };
};

//servira para LoginUserController

export const invalidCredentialsError = () => {
  throw {
    httpStatus: 401, //no autorizado
    code: "INVALID_CREDENTIALS",
    message: `Credenciales inválidas`,
  };
};

//servira para SendMailUntil
export const sendMailError = () => {
  throw {
    httpStatus: 500, //no autorizado
    code: "SEND_MAIL_FAILED",
    message: `Error al enviar email`,
  };
};

//usarlo en loginUserController.js
export const pendignActivationError = () => {
  throw {
    httpStatus: 403,
    code: "PENDING_ACTIVATION",
    message: `Usuario pendiente de activación. Verifique su cuenta antes de continuar`,
  };
};

// LO usare en JWT authUserController
export const notAuthenticatedError = () => {
  throw {
    httpStatus: 401, // autenticacion
    code: "NOT_AUTHENTICATED",
    message: 'Se esperaba un token por el header "Authorization" ',
  };
};

//metodos para guardar y borrar imagenes

export const saveFileError = () => {
  throw {
    httpStatus: 500,
    code: "FILE_SAVE_FAILED",
    message: "Error al guardar la imagen",
  };
};

export const deleteFileError = () => {
  throw {
    httpStatus: 409, // conflict
    code: "FILE_DELETED_FAILED",
    message: "Error al eliminar la imagen",
  };
};

//pendiente
export const unauthorizedUserError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: "UNAUTHORIZED",
    message: "El usuario no está autorizado para realizar esta operacion",
  };
};
//usuario no podra mofifica fotos
export const photoLimitError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: "PHOTO_LIMIT_ERROR",
    message: "Se alcanzó el limite de tres fotos en la entrada.",
  };
};

export const cannotVoteOwnEntryError = () => {
  throw {
    httpStatus: 403,
    code: "CANNOT_VOTE_OWN_ERROR",
    message: "No puedes votar tu propia entrada",
  };
};

export const voteAlreadyExistsError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: "VOTE_ALLREADY_ERROR",
    message: "No se puede votar mas de una vez la entrada",
  };
};

export const recoveryCodeError = () => {
  throw {
    httpStatus: 401, //no autorizado
    code: "INVALID_RECOVER_CODE",
    message: "Codigo de recuperación incorrecto",
  };
};
