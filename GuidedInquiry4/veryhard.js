/* *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
*/
/* My sudo code
1. write a function
2. fewest number of coins
3. amount of the coins total the amount
4. ill need an array of the coins
5. use logical operators (need to look those up)
*/

var coinChange = function (coins, amount) {
    var dp = Array(amount + 1).fill(amount + 1);
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));