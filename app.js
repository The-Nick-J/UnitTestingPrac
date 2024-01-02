// Function to convert from dollars to yen
function fromDollarToYen(amountInDollars) {
    
    const exchangeRate = 142;
    const amountInYen = amountInDollars * exchangeRate;
    return amountInYen;
  }
  
  // Function to convert from euros to dollars
  function fromEuroToDollar(amountInEuros) {
    
    const exchangeRate = 1.09;
    const amountInDollars = amountInEuros * exchangeRate;
    return amountInDollars;
  }
  
  // Function to convert from yen to pounds
  function fromYenToPound(amountInYen) {
    
    const exchangeRate = 0.005;
    const amountInPounds = amountInYen * exchangeRate;
    return amountInPounds;
  }
  
  