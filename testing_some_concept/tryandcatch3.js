function checkAge(age){
    if(age<18){
    throw new error("you must be at least 18 years old ");
    }
    return "Access Granted";
}

try{
    console.log(checkAge(15));
}catch(error){
    console.log("error:" +error.message);
}