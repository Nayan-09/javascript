const Multiplier =(x)=>{
    return function(y){
        return x*y;
    };

};
const double = Multiplier(2);
console.log(double(5)); // Outputs: 10