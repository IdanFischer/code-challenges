// white a simple temp converter. given a temp in celcius output the eqiivalent tem. in F
// covert one currency to usd
function convertCurrency (euro){
    // this assigns the usaDollar to the equation euro
    let usaDollar = euro * 1.08
    return usaDollar
}
// becomes the variable that we use
const euroOut = 200
// the convertDollar variable gets assigned the function, which also calls the function because of the ()
const convertDollar = convertCurrency(euroOut)
// this just logs what the function outputs
console.log(convertDollar)
// this just is a string that says what the orginal value was, and what it became.
console.log(`${euroOut}EUR is $${convertDollar} `)
//given a number of rows and columms output a grid of *
function  rows(columms) {
}