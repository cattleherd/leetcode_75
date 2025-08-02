# TIP

Make sure to study dynamic programming and matrix/grid problems. Leetcode medium only. Some of the questions were on algomonster.

DFS and matrixes

# My LeetCode 75 Journey 🚀

This repository documents my solutions and progress through the **[LeetCode 75](https://leetcode.com/studyplan/leetcode-75/)** study plan. My goal is to master the key patterns needed for technical assessments and to become a more proficient problem-solver.

---

# `Arrays/Strings`

---

## Progress Tracker

### 1. Merge Strings Alternately <a name="Merge Strings"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75)

<details>
  <summary>Click to view problem description</summary>
  
  > You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.
  > 
  > Return the merged string.
  >
  > **Example 1:**
  > ```
  > Input: word1 = "abc", word2 = "pqr"
  > Output: "apbqcr"
  > ```
  >
  > **Example 2:**
  > ```
  > Input: word1 = "ab", word2 = "pqrs"
  > Output: "apbqrs"
  > ```
  >
  > **Example 3:**
  > ```
  > Input: word1 = "abcd", word2 = "pq"
  > Output: "apbqcd"
  > ```

</details>

#### My Solution

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let minLength = Math.min(word1.length, word2.length);

  // Iterate up to the length of the shorter string, merging characters.
  for (let i = 0; i < minLength; i++) {
    res += word1[i];
    res += word2[i];
  }

  // Check which string is longer and append its remaining part.
  if (word1.length > word2.length) {
    res += word1.slice(minLength);
  } else {
    res += word2.slice(minLength);
  }

  return res;
};
```

---

### 2. Greatest Common Divisor of Strings <a name="2-greatest-common-divisor-of-strings"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 1071](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

<details>
  <summary>Click to view problem description</summary>

> For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + t + ... + t` (i.e., `t` is concatenated with itself one or more times).
>
> Given two strings `str1` and `str2`, return _the largest string `x` such that `x` divides both `str1` and `str2`_.
>
> **Example 1:**
>
> ```
> Input: str1 = "ABCABC", str2 = "ABC"
> Output: "ABC"
> ```
>
> **Example 2:**
>
> ```
> Input: str1 = "ABABAB", str2 = "ABAB"
> Output: "AB"
> ```
>
> **Example 3:**
>
> ```
> Input: str1 = "LEET", str2 = "CODE"
> Output: ""
> ```

</details>

#### My Solution

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let smaller;
  let larger;
  let match = "";

  // Determine the smaller and larger strings to set loop bounds.
  if (str1.length > str2.length) {
    larger = str1;
    smaller = str2;
  } else {
    larger = str2;
    smaller = str1;
  }

  // Iterate through all possible prefixes of the smaller string.
  for (let i = 1; i <= smaller.length; i++) {
    let candidate = smaller.slice(0, i);

    // Check if the candidate prefix can form both strings by repeating.
    if (
      candidate.repeat(str1.length / candidate.length) === str1 &&
      candidate.repeat(str2.length / candidate.length) === str2
    ) {
      // If it can, it's a valid common divisor. We keep the longest one found.
      match = candidate;
    }
  }
  return match;
};
```

### Complexity Analysis

- `Time Complexity`: O(min(N, M) \* (N + M)), where N and M are the lengths of str1 and str2. The loop runs min(N, M) times. Inside the loop, repeat() and the string comparison can take up to O(N + M) time in each iteration, leading to a polynomial time complexity which can be slow for long strings.

- `Space Complexity`: O(N + M). The repeat() method can create new strings that are as long as the input strings, consuming significant space.

---

### 3. Kids With the Greatest Number of Candies <a name="3-kids-with-the-greatest-number-of-candies"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

<details>
  <summary>Click to view problem description</summary>
  
  > There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `i`th kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.
  > 
  > Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the `i`th kid all the `extraCandies`, they will have the **greatest** number of candies among all the kids, or `false` otherwise.
  >
  > Note that **multiple** kids can have the **greatest** number of candies.
  >
  > **Example 1:**
  > ```
  > Input: candies = [2,3,5,1,3], extraCandies = 3
  > Output: [true,true,true,false,true] 
  > ```
  >
  > **Example 2:**
  > ```
  > Input: candies = [4,2,1,1,2], extraCandies = 1
  > Output: [true,false,false,false,false] 
  > ```
  >
  > **Example 3:**
  > ```
  > Input: candies = [12,1,12], extraCandies = 10
  > Output: [true,false,true]
  > ```

</details>

#### My Solution

```javascript
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];

  // Find the greatest number of candies any kid currently has.
  let largest = Math.max(...candies);

  // Iterate through each kid's candy count.
  for (let i = 0; i < candies.length; i++) {
    // Check if this kid can have the greatest number of candies.
    if (candies[i] + extraCandies >= largest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
```

---

---

### 4. Can Place Flowers <a name="4-can-place-flowers"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 605](https://leetcode.com/problems/can-place-flowers/)

<details>
  <summary>Click to view problem description</summary>
  
  > You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
  >
  > Given an integer array `flowerbed` containing `0`s and `1`s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise.
  >
  > **Example 1:**
  > ```
  > Input: flowerbed = [1,0,0,0,1], n = 1
  > Output: true
  > ```
  >
  > **Example 2:**
  > ```
  > Input: flowerbed = [1,0,0,0,1], n = 2
  > Output: false
  > ```

</details>

#### My Solution

```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  // Iterate through the flowerbed to find empty plots.
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty.
    if (flowerbed[i] === 0) {
      // Check if the previous plot is empty (or if it's the beginning of the array).
      const isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      // Check if the next plot is empty (or if it's the end of the array).
      const isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      // If both adjacent plots are empty, we can plant a flower here.
      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1; // Plant the flower.
        count++; // Increment the count of newly planted flowers.
      }
    }
  }
  // Return true if we were able to plant at least n flowers.
  return count >= n;
};
```

---

### 5. String Compression <a name="5-string-compression"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 443](https://leetcode.com/problems/string-compression/)

<details>
  <summary>Click to view problem description</summary>
  
  > Given an array of characters `chars`, compress it using the following algorithm:
  >
  > Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:
  > - If the group's length is 1, append the character to `s`.
  > - Otherwise, append the character followed by the group's length.
  >
  > The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are 10 or longer will be split into multiple characters in `chars`.
  >
  > After you are done **modifying the input array**, return *the new length of the array*.
  >
  > You must write an algorithm that uses only constant extra space.
  >
  > **Example 1:**
  > ```
  > Input: chars = ["a","a","b","b","c","c","c"]
  > Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
  > ```
  >
  > **Example 2:**
  > ```
  > Input: chars = ["a"]
  > Output: Return 1, and the first character of the input array should be: ["a"]
  > ```
  >
  > **Example 3:**
  > ```
  > Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
  > Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"]
  > ```

</details>

#### My Solution

```javascript
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // 'read' pointer scans the original array.
  let read = 0;
  // 'write' pointer indicates the position to write the compressed character/count to.
  let write = 0;

  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 0;

    // Count consecutive occurrences of currentChar.
    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }

    // Write the character itself.
    chars[write] = currentChar;
    write++;

    // If the count is greater than 1, write the count as characters.
    if (count > 1) {
      let countString = count.toString();
      for (let i = 0; i < countString.length; i++) {
        chars[write] = countString[i];
        write++;
      }
    }
  }
  // 'write' is now the new length of the compressed array.
  return write;
};
```

> **Note on the if(count > 1) check:**
> This check is crucial. Without it, the function would incorrectly write the number '1' for single-character groups. This can cause a "runaway" issue where the `write` pointer exceeds the original bounds of relevant data, potentially overwriting characters that the `read` pointer hasn't processed yet, or in JavaScript, expanding the array.
>
> **Example without the check:**
> If `chars = ["a", "b", "c"]`:
>
> 1. It processes "a", `count` is 1. It writes "a" at index 0, then writes "1" at index 1. `chars` becomes `["a", "1", "c"]`.
> 2. The `read` pointer is now at index 1 (which is now "1"), but it should be looking at the original "b". This leads to incorrect behavior.
>
> The `if (count > 1)` guard ensures that only counts for groups larger than one are written, which is the correct logic according to the problem description.

### Complexity Analysis

- `Time Complexity`: O(N), where N is the length of the `chars` array. Both the `read` and `write` pointers traverse the array at most once from beginning to end.

- `Space Complexity`: O(1). The compression is done in-place. The space used for variables like `count` and `countString` is mostly constant. For numbers like the index values and count, In most programming languages, a number variable uses a fixed amount of memory (e.g., 64 bits) regardless of whether it holds the value 5 or 5,000,000.

However, since countString is a string, its space complexity is proportional to its number of characters. This growth is logarithmic relative to the value of the count. For example:

If count is 9, countString is "9", which is 1 character long.
If count is 1000, countString is "1000", which is 4 characters long.
The space required grows with the number of digits, which is proportional to log10(count). In the worst-case scenario where count is roughly equal to N, the space complexity for this single variable is O(log N).

---

# `Two Pointers`

---

# `Dynamic Programming`

Dynamic Programming (DP) is a powerful problem-solving technique used in computer science for optimization problems. The core idea is to break down a complex problem into simpler, overlapping subproblems. You solve each subproblem just once, store its solution, and then use these stored solutions to solve the larger problem.

It's different from simple recursion because it avoids re-calculating the same work over and over. It's different from a "greedy" approach because it considers the overall best path, not just the best immediate choice.

This method is especially useful for optimization problems (like finding the maximum or minimum value) or counting problems (finding the number of ways to do something).

#### 1. Optimal Substructure

This means that the optimal solution to the main problem can be constructed from the optimal solutions of its subproblems.

#### 2. Overlapping Subproblems

This means that a simple recursive solution would end up solving the exact same subproblem multiple times. DP avoids this by storing the results. This storage is often called **memoization** (top-down approach) or **tabulation** (bottom-up approach).

### When should we think "Dynamic Programming"?

Look for problems that have these clues:

- The problem asks for a **maximum/minimum** value, the **number of ways** to do something, or if something is **possible**.
- You have to make a sequence of decisions at each step.
- A decision at one step affects the available choices at a later step.
- A "greedy" approach (always making the best local choice) fails.

---

### 1. House Robber <a name="6-house-robber"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 198](https://leetcode.com/problems/house-robber/)

<details>
  <summary>Click to view problem description</summary>
  
  > You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing all of them is that **adjacent houses have security systems connected** and **it will automatically contact the police if two adjacent houses were broken into on the same night**.
  >
  > Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight without alerting the police*.
  >
  > **Example 1:**
  > ```
  > Input: nums = [1,2,3,1]
  > Output: 4
  > Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  > Total amount you can rob = 1 + 3 = 4.
  > ```
  >
  > **Example 2:**
  > ```
  > Input: nums = [2,7,9,3,1]
  > Output: 12
  > Explanation: Rob house 1 (money = 2), house 3 (money = 9) and house 5 (money = 1).
  > Total amount you can rob = 2 + 9 + 1 = 12.
  > ```

</details>

#### My Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // This variable will hold the final answer for arrays of length 3+
  let max;

  // --- Guard Clauses for Edge Cases ---
  // If there are no houses, we can't rob anything :(
  if (nums.length === 0 || !nums) {
    return 0;
    // If there is one house, we must rob it. >:D
  } else if (nums.length === 1) {
    return nums[0];
    // If there are two houses, we rob the richer one. $$
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  } else {
    // --- DP Initialization ---
    // For the second house, the max profit is either robbing it or the first one.
    // This sets up our DP table correctly.
    nums[1] = Math.max(nums[0], nums[1]);

    // --- Main DP Loop ---
    // Iterate from the third house to the end.
    for (let i = 2; i < nums.length; i++) {
      // At each house, we have two choices:
      // 1. Don't rob house `i`: The max profit is the same as the max profit up to `i-1`.
      // 2. Rob house `i`: The profit is `money in house i` + `max profit up to house i-2`.
      max = Math.max(nums[i - 1], nums[i] + nums[i - 2]);

      // Store the result of our choice back into the array.
      // `nums[i]` now represents the max possible profit robbing houses from 0 to `i`.
      nums[i] = max;
    }
  }
  // The final element holds the max profit for the entire street.
  return max;
};
```

---
### 2. Domino Tromino <a name="Domino Tromino"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 790](https://leetcode.com/problems/domino-and-tromino-tiling/?envType=study-plan-v2&envId=leetcode-75)


The key to this problem is a systematic, step-by-step counting method. Instead of trying to find all tilings at once, we calculate the _number of ways_ to tile a `2 x i` board by using the known counts for smaller boards (`2 x (i-1)`, `2 x (i-2)`, etc.). This is the essence of Dynamic Programming.

## Defining the States

To build our solution, we must identify all possible shapes of the tiled area's rightmost boundary. At any column `i`, there are only three possible states.

1.  **`full[i]`:** The number of ways to have a **perfectly tiled, rectangular** `2 x i` board.

    ```
           Column i
              ↓
      +-------+
      | X X X |
      +-------+
      | X X X |
      +-------+
    ```

2.  **`topEmpty[i]`:** The number of ways to tile a `2 x i` area, leaving the **top-right cell empty**.

    ```
           Column i
              ↓
      +-------+
      | X X X |  <-- Empty
      +-------+---+
      | X X X | X |
      +-------+---+
    ```

3.  **`bottomEmpty[i]`:** The number of ways to tile a `2 x i` area, leaving the **bottom-right cell empty**.
    ```
           Column i
              ↓
      +-------+---+
      | X X X | X |
      +-------+---+
      | X X X |  <-- Empty
      +-------+
    ```

These three state variables will store the counts we need to solve the problem. Our final goal is the value of `full[n]`.

## The Recurrence Relations (State Transitions)

These are the formulas that describe how to calculate the counts for a state at column `i` using the known counts from previous columns.

---

To count the ways to fill a full `2 × i` board, look at the **last tile(s) placed**.  
There are **four** possibilities:

| Step  | Last action                        | Description                                                                                                                                                                 | Contribution       |
| ----- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **A** | **Vertical domino**                | We can create a full[i] perfect 2 x i board by placing one vertical domino to a full[i-1] `2 × (i − 1)` board. Thus we must consider the full[i-1] permutation.             | `full[i‑1]`        |
| **B** | **Two horizontal dominoes**        | We can create a full[i] perfect 2 x i board by placing two horizontal dominoes to a perfect full[i-2] `2 × (i − 2)` board. Thus we must consider the full[i-2] permutation. | `full[i‑2]`        |
| **C** | **Tromino in a `topEmpty` gap**    | We can create a full[i] perfect 2 x i board by placing a tromino block on a `topEmpty[i-1]` board with an L‑shaped tromino.                                                 | `topEmpty[i‑1]`    |
| **D** | **Tromino in a `bottomEmpty` gap** | We can create a full[i] perfect 2 x i board by placing a tromino block on `bottomEmpty[i‑1]` board the same way.                                                            | `bottomEmpty[i‑1]` |

### Permutations / Recurrence relation for a fully tiled board

full[i] = full[i-1] + full[i-2] + topEmpty[i-1] + bottomEmpty[i-1]

---

```js
/**
 * @param {number} n The width of the 2 x n board to be tiled.
 * @return {number} The number of ways to tile the board, modulo 10^9 + 7.
 */
var numTilings = function (n) {
  // Define a modulo constant to prevent integer overflow for large results.
  const MOD = 10 ** 9 + 7;

  // DP state definitions:
  // full[i]: The number of ways to completely tile a 2 x i board.
  // topfill[i]: The number of ways to tile a 2 x i board with the top-right cell empty.
  // bottomfill[i]: The number of ways to tile a 2 x i board with the bottom-right cell empty.
  let full = new Array(n + 1).fill(0);
  let topfill = new Array(n + 1).fill(0);
  let bottomfill = new Array(n + 1).fill(0);

  // Handle trivial cases
  if (n === 0) {
    return 1; // One way to tile a 2x0 board: the empty tiling.
  }
  if (n === 1) {
    return 1; // One way to tile a 2x1 board: one vertical domino.
  }

  // --- Base Cases for the DP ---
  // For a 2x0 board, there's one way to tile it (do nothing).
  full[0] = 1;

  // For a 2x1 board:
  full[1] = 1; // One vertical domino.
  topfill[1] = 0; // Impossible to leave a top gap.
  bottomfill[1] = 0; // Impossible to leave a bottom gap.

  // Iterate from i = 2 up to n, building the solution from the base cases.
  for (let i = 2; i <= n; i++) {
    // Calculate the number of ways to fully tile a 2 x i board.
    full[i] =
      (full[i - 1] + full[i - 2] + topfill[i - 1] + bottomfill[i - 1]) % MOD;

    // Calculate the number of ways to have a top-right gap on a 2 x i board.
    topfill[i] = (full[i - 2] + bottomfill[i - 1]) % MOD;

    // Calculate the number of ways to have a bottom-right gap on a 2 x i board.
    bottomfill[i] = (full[i - 2] + topfill[i - 1]) % MOD;
  }

  // The final answer is the number of ways to fully tile the 2 x n board.
  return full[n];
};
```

> ### It's 2025, so this is considered a leetcode 'medium' lol

---

### 62. Unique Paths <a name="62-unique-paths"></a>

**Status:** ✅ Completed
**Link:** [LeetCode Problem 62](https://leetcode.com/problems/unique-paths/)

<details>
  <summary>Click to view problem description</summary>
  
  > There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
  >
  > Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
  >
  > The test cases are generated so that the answer will be less than or equal to 2 * 109.
  >
  > **Example 1:**
  > ```
  > Input: m = 3, n = 7
  > Output: 28
  > ```
  >
  > **Example 2:**
  > ```
  > Input: m = 3, n = 2
  > Output: 3
  > ```

</details>

### My Thought Process & Solution Strategy

My approach to solving this problem was to identify a pattern and build the solution from the ground up. This is a classic **Bottom-Up Dynamic Programming** strategy.

1.  **Core Insight:** The key constraint is that the robot can only move **Down** or **Right**. This immediately told me that to reach any given cell `(r, c)`, the robot must have arrived from either the cell directly above, `(r-1, c)`, or the cell directly to the left, `(r, c-1)`.

2.  **The Recurrence Relation:** Based on that insight, I formulated the central rule for this problem: The total number of unique paths to any cell is the sum of the paths to the cell above and the cell to the left.

    - `paths(r, c) = paths(r-1, c) + paths(r, c-1)`

3.  **Identifying the Base Cases:** I then considered the "easiest" parts of the grid. For any cell in the very first row, there is only one way to get there: moving right continuously from the start. The same is true for the very first column, where the only way is to move down continuously. This means every cell in the top row and left column represents exactly **1** unique path.

4.  **The DP Matrix Plan:** With the rule and the base cases defined, I planned my algorithm:
    - Create an `m x n` matrix (a 2D array, `dp`) to store the number of paths to each cell.
    - Initialize the matrix to handle the base cases. A simple way to do this is to set all values in the first row and first column to `1`.
    - Iterate through the rest of the matrix, starting from `dp[1][1]`.
    - Apply my recurrence relation (`dp[i][j] = dp[i-1][j] + dp[i][j-1]`) to fill in each cell based on the values I've already computed.
    - The final answer is the value stored in the bottom-right corner, `dp[m-1][n-1]`.

### Final JavaScript Code

This code implements the bottom-up DP strategy.

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Edge case: If the grid is just a single row or column, there's only one path.
    if (m === 1 || n === 1) {
        return 1;
    }

    // Step 1: Create the DP matrix.
    // I'm initializing the entire m x n grid with 1s. This is a clean way to
    // set up the base cases, since every cell in the first row and first
    // column should have a value of 1.
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    // Step 2: Fill the rest of the grid using the recurrence relation.
    // Start iterating from (1, 1) since the 0-th row and 0-th column are
    // already correctly initialized as our base cases.
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // Apply the core rule: paths to here = paths from above + paths from left.
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // Step 3: The final answer is stored in the bottom-right cell.
    return dp[m - 1][n - 1];
};
```
---

### 1143. Longest Common Subsequence <a name="1143-longest-common-subsequence"></a>
**Status:** ✅ Completed
**Link:** [LeetCode Problem 1143](https://leetcode.com/problems/longest-common-subsequence/)

<details>
  <summary>Click to view problem description</summary>

  > Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.
  >
  > A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
  >
  > * For example, `"ace"` is a subsequence of `"abcde"`.
  >
  > A common subsequence of two strings is a subsequence that is common to both strings.
  >
  > **Example 1:**
  > ```
  > Input: text1 = "abcde", text2 = "ace"
  > Output: 3
  > Explanation: The longest common subsequence is "ace" and its length is 3.
  > ```
  >
  > **Example 2:**
  > ```
  > Input: text1 = "abc", text2 = "abc"
  > Output: 3
  > ```
  >
  > **Example 3:**
  > ```
  > Input: text1 = "abc", text2 = "def"
  > Output: 0
  > ```

</details>

### My Thought Process & Solution Strategy

This problem is a quintessential **Bottom-Up Dynamic Programming** problem. A brute-force approach of generating all subsequences would be far too slow (exponential time). DP allows us to build the solution efficiently.

1.  **Core Insight:** The problem can be broken down into smaller, overlapping subproblems. The LCS of two long strings depends on the LCS of shorter versions of those same strings. This structure is a perfect fit for a DP matrix (or 2D array).

2.  **The DP Matrix Plan:** My central idea was to create a 2D grid, `dp`, where `dp[i][j]` stores the length of the Longest Common Subsequence for the prefixes `text1.substring(0, i)` and `text2.substring(0, j)`. The grid dimensions would be `(text1.length + 1) x (text2.length + 1)` to account for empty string prefixes.

3.  **The Recurrence Relation (The Two Golden Rules):** I then determined how to fill each cell `dp[i][j]` by looking only at its neighbors. This involved comparing the characters `text1[i-1]` and `text2[j-1]`:
    *   **Case 1: The characters match.** This is the "happy path." We've found a character that can extend our subsequence. The length is `1` plus the length of the LCS of the strings *before* these characters. This pre-computed answer is always stored in the diagonal cell: `dp[i-1][j-1]`.
        *   **Rule:** `dp[i][j] = 1 + dp[i-1][j-1]`
    *   **Case 2: The characters do NOT match.** We can't extend the subsequence with the current characters. The best we can do is carry forward the longest subsequence found so far. This means taking the maximum length from either the subproblem without `text1`'s current character (the cell to the left, `dp[i][j-1]`) or the subproblem without `text2`'s current character (the cell above, `dp[i-1][j]`). This is the "messenger propagation" rule.
        *   **Rule:** `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`

4.  **Identifying the Base Cases:** The "easiest" subproblem is finding the LCS between a string and an empty string. The answer is always 0. By creating a grid one size larger than the strings and initializing it with zeros, the entire first row and first column automatically represent these base cases correctly.

5.  **Final Answer:** After applying these rules iteratively to every cell in the grid, the problem for the full strings will be solved. The final answer will be stored in the bottom-right corner of the grid, `dp[text1.length][text2.length]`.

---

### Final JavaScript Code

This code implements the bottom-up DP strategy discussed above.

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // Step 1: Create the DP matrix with +1 size for the empty string base cases.
    // It is initialized with all 0s, which correctly handles the base cases
    // where either string is empty.
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));


            /*      
                    ''  a   b   a  text1 = aba
                ''  0   0   0   0
  text2 = dbab  d   0   0   0   0
                b   0   0   1   0
                a   0   0   1   1
                b   0   1   2   2
                
            */

    // Step 2: Iterate through the grid, starting from (1, 1).
    // The loops fill the grid based on the two rules.
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Get the characters corresponding to the current subproblem.
            // We use i-1 and j-1 because strings are 0-indexed.
            const char1 = text1[i - 1];
            const char2 = text2[j - 1];

            // Step 3: Apply the recurrence relation.
            if (char1 === char2) {
                // Rule 1 (Match): Add 1 to the result from the diagonal.
                // The diagonal is the largest subsequence at a given substr
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // Rule 2 (No Match): Propagate the best result from above or left. This means u aren't extending the largest subsequence.

                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 4: The final answer is in the bottom-right corner.
    return dp[m][n];

};
```

-  The largest subsequence at each point is at the bottom right. For example, largest subsequence of ab and dbab is 2.
- likewise, the largest subsequence of aba and dbab is 2 as well. since you dont match on the last letter, just propogate 2 to the right, which propogates largest subsequence from the last 2 substr comparisons. 

---

### 714. Best Time to Buy and Sell Stock with Transaction Fee <a name="714-best-time-to-buy-and-sell-stock-with-transaction-fee"></a>
**Status:** ✅ Completed
**Link:** [LeetCode Problem 714](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

<details>
  <summary>Click to view problem description</summary>

  > You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee.
  >
  > Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
  >
  > **Note:**
  > * You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
  > * The transaction fee is only charged once for each stock purchase and sale.
  >
  > **Example 1:**
  > ```
  > Input: prices = [1,3,2,8,4,9], fee = 2
  > Output: 8
  > Explanation: The maximum profit can be achieved by:
  > - Buying at prices[0] = 1
  > - Selling at prices[3] = 8
  > - Buying at prices[4] = 4
  > - Selling at prices[5] = 9
  > The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
  > ```
  >
  > **Example 2:**
  > ```
  > Input: prices = [1,3,7,5,10,3], fee = 3
  > Output: 6
  > ```

</details>

### My Thought Process & Solution Strategy

This problem is a classic application of **State Machine Dynamic Programming**. A simple greedy approach like "buy lowest, sell highest" fails because it doesn't account for multiple profitable "waves" or transaction fees invalidating small gains. The key is to realize that on any given day, we can only be in one of two states.

1.  **Core Insight:** At the end of any given day, my financial status can be described in one of two ways: I am either **holding a stock**, or I have **cash on hand (no stock)**. The goal is to maximize my net worth in both of these states every single day.

2.  **The State Variables:** My strategy revolves around tracking two variables as I iterate through the prices:
    *   `hold`: Represents the maximum possible net worth if I end the day **holding** one share of stock. This value carries the "memory" of my past transactions.
    *   `cash`: Represents the maximum possible profit if I end the day **not holding** a stock. This is my realized, spendable profit.

3.  **The Recurrence Relation (The Two Golden Rules):** To find the values for the current day, I only need the values from the previous day. This leads to two simple rules for updating my state:
    *   **Rule 1: Calculating the new `cash` value.** To have cash today, I could have either (a) carried over my cash from yesterday, or (b) sold the stock I was holding yesterday. I choose the more profitable option.
        *   `new_cash = max( yesterday's_cash, yesterday's_hold + today's_price - fee )`
    *   **Rule 2: Calculating the new `hold` value.** To be holding a stock today, I could have either (a) kept holding the stock from yesterday, or (b) used my cash from yesterday to buy a stock today. I choose the more profitable option.
        *   `new_hold = max( yesterday's_hold, yesterday's_cash - today's_price )`

4.  **Identifying the Base Cases:** Before the first day, my net worth is 0 and I hold no stock. So, to start the process for Day 0:
    *   Initial `cash` = `0`
    *   Initial `hold` = `-prices[0]` (I used my 0 cash to buy the first stock).

5.  **Final Answer:** After iterating through all the days, the final answer must be the `cash` value. I cannot end with a stock in hand, as profit is only realized upon selling.

```js
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

```
