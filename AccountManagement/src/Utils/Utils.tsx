const MIN_PWD_LENGTH = 8;

export const isUserNameValid = (userNameToCheck: string) => {
    return userNameToCheck === '' ? false : true;
};

export const isEmailIdValid = (emailIdToCheck: string) => {
    var emailValidationRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z]{1,4}$/;
    if (!emailIdToCheck) { return false; }

    var valid = emailValidationRegex.test(emailIdToCheck);
    if (!valid) { return false; }

    return true;
};

export const isPasswordValid = (passwordToCheck: string) => {
    return passwordToCheck.length < MIN_PWD_LENGTH ? false : true;
};
