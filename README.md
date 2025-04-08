# Daily-Coding-Problem-Problem-47-Easy-

Absolutely! Here's a clean and professional `README.md` for your coding problem—useful for GitHub repos, sharing with peers, or flexing during mock interviews. 👇

---

```markdown
# 📈 Max Profit from Stock Prices

This coding problem was originally asked by **Facebook**.

## 🧠 Problem Statement

You're given an array of numbers that represent the stock prices of a company in **chronological order**. Write a function that calculates the **maximum profit** you could have made from **buying and selling the stock exactly once**.

> **Note**: You must **buy before you sell**. No shorting allowed. 🚫📉

### ✍️ Function Signature

#### JavaScript
```js
function maxProfit(prices: number[]): number
```

#### Python
```python
def max_profit(prices: List[int]) -> int
```

---

## 💡 Example

```js
Input:  [9, 11, 8, 5, 7, 10]
Output: 5
```

**Explanation**:  
- Buy at \$5  
- Sell at \$10  
- Profit = \$10 - \$5 = **\$5**

---

## ✅ Constraints
- You can only make **one buy and one sell**.
- The array can contain 0 or more prices.
- If no profit is possible, return `0`.

---

## 🚀 Solution Approach

1. Iterate through the array while keeping track of:
   - The **minimum price** so far.
   - The **maximum profit** that could be made at each step.
2. At each step, calculate the profit = `current price - min price`.
3. Update the max profit accordingly.

### Time Complexity: `O(n)`  
### Space Complexity: `O(1)`

---

## 🧪 Test Cases

| Input | Expected Output |
|-------|-----------------|
| `[9, 11, 8, 5, 7, 10]` | `5` |
| `[10, 9, 8, 7]` | `0` |
| `[1, 2, 3, 4, 5]` | `4` |
| `[]` | `0` |
| `[7]` | `0` |

---

## 📂 Bonus

Want more of a challenge?

- Modify the function to allow **multiple buys and sells** to maximize total profit.
- Add unit tests with a testing framework like **Jest** or **PyTest**.

---

## 🧑‍💻 Author

Crafted by someone who knows the pain of buying at the top and selling at the bottom. Trade safely. 💸
```

---

Need the same in `README.md` file format to download or drop into your repo? Just give me the word, captain. 🫡
