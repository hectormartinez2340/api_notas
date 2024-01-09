import jwt from 'jsonwebtoken';
import {invalidCredentialError, notAuthenticatedError} from '../services/errorService.js';


const authUserController = (req, res, next)=>{
try {
    const {authorization} = req.headers;

    if(!authorization){
        notAuthenticatedError()
    }
    let tokenInfo;


try {
    tokenInfo = jwt.verify(authorization, process.env.SECRET);
} catch (error) {
    invalidCredentialError();
}
req.user = tokenInfo;

next();

} catch (error) {
    next(error);
    
}
}

export default authUserController;

