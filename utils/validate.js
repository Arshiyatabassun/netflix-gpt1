

const checkValidateData =(email,password)=>{
    const isEmailValidate = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/.test(email)
    const isPasswordValidate =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValidate) return "Email ID is not valid"
    if(!isPasswordValidate) return "Password is not valid"

  return null;

}
export default checkValidateData;