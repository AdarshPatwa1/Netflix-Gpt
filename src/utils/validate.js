

export const checkValidData = (email, password) => {

    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailvalid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    //if(!isNameValid && !isSignInForm) return "Name is not valid";

    return null;
}