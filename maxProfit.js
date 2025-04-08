/**
 * Calculates the maximum profit from a single buy/sell of stock prices.
 * @param {number[]} prices - Array of stock prices in chronological order.
 * @returns {number} Maximum profit possible.
 */
function maxProfit(prices) {
    if (!prices || prices.length === 0) return 0;
  
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else {
        const profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
      }
    }
  
    return maxProfit;
  }
  
  // --- Test Cases ---
  
  const testCases = [
    { input: [9, 11, 8, 5, 7, 10], expected: 5 },
    { input: [10, 9, 8, 7], expected: 0 },
    { input: [1, 2, 3, 4, 5], expected: 4 },
    { input: [], expected: 0 },
    { input: [7], expected: 0 },
  ];
  
  testCases.forEach(({ input, expected }, index) => {
    const result = maxProfit(input);
    console.log(
      `Test #${index + 1} | Input: ${JSON.stringify(input)} | Expected: ${expected} | Got: ${result} | ${result === expected ? '✅' : '❌'}`
    );
  });
  