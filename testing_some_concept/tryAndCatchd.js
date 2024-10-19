try{
    const result = 5/0;
    console.log(result);
}catch(error){
    console.log("an error occured "+ error.message);
}