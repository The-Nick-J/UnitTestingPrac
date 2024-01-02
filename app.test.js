// Function to convert from dollars to yen
function fromDollarToYen(amountInDollars) {
    
    const exchangeRate = 142.03188;
    const amountInYen = amountInDollars * exchangeRate;
    return amountInYen;
  }
  
  // Function to convert from euros to dollars
  function fromEuroToDollar(amountInEuros) {
    
    const exchangeRate = 1.095968;
    const amountInDollars = amountInEuros * exchangeRate;
    return amountInDollars;
  }
  
  // Function to convert from yen to pounds
  function fromYenToPound(amountInYen) {
    
    const exchangeRate = 0.0055680657;
    const amountInPounds = amountInYen * exchangeRate;
    return amountInPounds;
  }


test('dollar to yen', () =>  {
    const result = fromDollarToYen(100);
    expect(result).toBe(14203.188);
  });
  
  test('euro to dollar', () =>  {
    const result = fromEuroToDollar(100);
    expect(result).toBe(109.5968);
  });
  
  test('yen to pound', () =>  {
    const result = fromYenToPound(100);
    expect(result).toBe(0.55680657);
  });