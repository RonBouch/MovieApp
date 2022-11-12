import * as Yup from 'yup';

export const nameValidation = (matchTxt = "username can only contain Latin letters", reqTxt = "username is a required field") => Yup.string()
    .min(8, 'username is too short - should be 8 chars minimum.')
    .matches(/^[a-zA-Z]{8,30}$/, matchTxt)
    .required(reqTxt)

export const passwordValidation = (matchTxt = "uppercase, lowercase, number and special", reqTxt = "password is a required field") => Yup.string()
    .min(6, 'password must contain 8 or more characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/, matchTxt)
    .required(reqTxt)
