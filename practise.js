// At the final state, you can either be holding stock or not

// max profit holding stock

// 1) carried over stock from yesterday
// 2) i bought stock

//max profit holding no stock

//1) sold my stock today
//2) carried over my cash

//Day 1 stock[0] = 1
// 1)  - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//     - Max( -infinity , 0 - 1 ) => Max(-infinity, -1) => -1
// 2)  - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//     - Max( 0 , -infinity + 1 - 2 ) => Max(0, -infinity) => 0

//Day 2 stock[1] = 3

// 1) - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//    - Max(-1, 0-3 = -3) => -1
//
// 2) - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//    - Max( 0, 3-1-2 = 0) = 0

//Day 3 stock[2] = 2
// 1) - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//    - Max(-1, 0 - 2 = -2) => -1 
//    We propogate the lowest buying price of a stock.
//
// 2) - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//    - Max( 0, (2 - 1) - 2) => 0 
//     We propogate the best selling price, or just carry cash over

// Day 4 stock[3] = 8
// 1) - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//    - Max( -1, 0-8 = -8)=> -1
// 2) - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//    - Max(0, (8-1)-2)  => 5! new max.
//
//  So we propogate the lowest buying price of a stock, which is still -1
//  However, we found a new global max of holding cash, its best to sell yesterdays stock rather than hold onto yesterdays cash.


// Day 5 stock[4] = 4
// 1) - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//    - Max( -1, 5-4 = 1)=> 1
// Key moment, better to hold new stock (implying sold first stock for profit earlier. Now we have positive net worth holding a stock from previous sell at 8). Reinvesting our profits for potential future gains.
// 2) - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//    - Max(5, (4-1)-2)  => 5. We propogate the global gainz of selling at 8 (bought at 1).

// Day 6 stock[5] = 9
// 1) - net worth hold stock: Max( yesterdays hold value, hold value when buying stock with yesterday's cash )
//    - Max(1, 5-9 = -4)=> 1
//   We propogate the highest net worth of holding a stock, which is still 1 (bought at 4, sold at 5.)
// 2) - net worth no stock: Max(yesterdays cash value, cash value selling yesterdays stock)
//    - Max(5, (9+1)-2)  => 8. New global max. 
// we realized best to buy at 1, sell at 8, then buy at 4, sell at 9. Rather than just keep profit at 5 (buy 1 sell at 8)


/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let cashNetWorth = Array.from(prices.length).fill(0)
    let holdStockNetWorth = Array.from(prices.length).fill(0)
    holdStockNetWorth[0] = -Infinity
    cashNetWorth[0] = 0;

    for(let i = 0; i < prices.length; i++){
        holdStockNetWorth[i+1] = Math.max(holdStockNetWorth[i],(cashNetWorth[i]-prices[i]))
        cashNetWorth[i+1] = Math.max(cashNetWorth[i], (prices[i] + holdStockNetWorth[i])-fee)
    }
    return cashNetWorth[cashNetWorth.length-1]
}; 

maxProfit([1,3,2,8,4,9], 2)