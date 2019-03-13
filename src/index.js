function countCouns(currency){
    var coins = [   {"name":"H","value":50},
                    {"name":"Q","value":25},
                    {"name":"D","value":10},
                    {"name":"N","value":5},
                    {"name":"P","value":1}];
    var resultCoun = {};
    for (var i = 0; i<coins.length; i++){
        coinName = coins[i]["name"]; 
        coinValue = coins[i]["value"];

        while(currency-coinValue >= 0){
            
            if (coinName in resultCoun)
                resultCoun[coinName]++;
            else
                resultCoun[coinName] = 1;
            currency -= coinValue;
        }
    }
    return resultCoun;
}

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0)
        return {};
    else
        if (currency > 10000)
            return {"error" : "You are rich, my friend! We don't have so much coins for exchange"}
        else{
            return countCouns(currency);
        }
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
