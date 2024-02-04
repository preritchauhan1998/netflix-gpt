export const checkValidDate=(name,email,password)=>{
    // const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isValidEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // if(!isValidName) return "Name is not Valid";
    if(!isValidEmail) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}