const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = (valueInDollar /1.2) * 127.9;
    
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){

    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}
const fromYenToPound = function(valueInYen){
    
    let valueInPound = (valueInYen / 127.9) * 0.8;

    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log (sum(7,3))

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
