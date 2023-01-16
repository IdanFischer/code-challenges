// write a simple temp converter. given a temp in °C output the eqvivalent temp in °F

function tempConverter(celsius) {
    // get user input 
    let convertedCelcius = (celsius * (9/5)) + 32
     return convertedCelcius
}

// we want to find a way to get the celcius variable from the function
// into the console.log
const celsiusOut = 10
const convertTemp = tempConverter(celsiusOut)
console.log(`${celsiusOut}°C is ${convertTemp}°F`)

// const celsiusOut = 10
// const convertTemp = tempConverter(celsiusOut)
// const useInput = `The user has inputed ${celsiusOut}`
// const finalResult = `${celsiusOut}°C is ${convertTemp}°F`

// console.log(useInput)
// console.log(finalResult)