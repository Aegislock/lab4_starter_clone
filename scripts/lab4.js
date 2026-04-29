function sumValues(num1, num2, add) {
    // 1. Check if add is strictly true to perform the sum
    if (add === true) {
        // Validation: Ensure inputs are numbers for the addition path
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return false;
        }
        return num1 + num2;
    } 
    // 2. Otherwise (if add is false), return false per test expectation
    else {
        return false;
    }
}

function discountPrices(prices, discount) {
    // 1. Check if prices is an array (covers 'i'm not an array' test)
    // 2. Check if prices is empty (covers the empty array test)
    if (!Array.isArray(prices) || prices.length === 0) {
        return false;
    }
    
    // 3. Check if discount is a number (covers the 'hello' test)
    if (typeof discount !== 'number') {
        return false;
    }

    const discounted = [];
    const length = prices.length;
    
    for(let i = 0; i < length; i++) {
        // Use standard multiplication; result is now individual, not cumulative
        let discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};