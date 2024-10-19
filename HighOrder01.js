const great =() =>{
    return `hello`;
};

const greatSomeone = (greatFunction)=>{
    console.log(greatFunction());
};

console.log(great());