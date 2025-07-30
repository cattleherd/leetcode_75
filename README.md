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
var mergeAlternately = function(word1, word2) {
    let res = '';
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
  > Given two strings `str1` and `str2`, return *the largest string `x` such that `x` divides both `str1` and `str2`*.
  >
  > **Example 1:**
  > ```
  > Input: str1 = "ABCABC", str2 = "ABC"
  > Output: "ABC"
  > ```
  >
  > **Example 2:**
  > ```
  > Input: str1 = "ABABAB", str2 = "ABAB"
  > Output: "AB"
  > ```
  >
  > **Example 3:**
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
var gcdOfStrings = function(str1, str2) {
    let smaller;
    let larger;
    let match = '';

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
        if (candidate.repeat(str1.length / candidate.length) === str1 && 
            candidate.repeat(str2.length / candidate.length) === str2) {
            // If it can, it's a valid common divisor. We keep the longest one found.
            match = candidate;
        }
    }
    return match;
};
```
### Complexity Analysis
- `Time Complexity`: O(min(N, M) * (N + M)), where N and M are the lengths of str1 and str2. The loop runs min(N, M) times. Inside the loop, repeat() and the string comparison can take up to O(N + M) time in each iteration, leading to a polynomial time complexity which can be slow for long strings.

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
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    
    // Find the greatest number of candies any kid currently has.
    let largest = Math.max(...candies);

    // Iterate through each kid's candy count.
    for(let i = 0; i < candies.length; i++){
        // Check if this kid can have the greatest number of candies.
        if(candies[i] + extraCandies >= largest){
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
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    // Iterate through the flowerbed to find empty plots.
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty.
        if (flowerbed[i] === 0) {
            // Check if the previous plot is empty (or if it's the beginning of the array).
            const isLeftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            // Check if the next plot is empty (or if it's the end of the array).
            const isRightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

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
var compress = function(chars) {
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

### 6. House Robber <a name="6-house-robber"></a>
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
var rob = function(nums) {
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
            max = Math.max(nums[i-1], nums[i] + nums[i-2]);

            // Store the result of our choice back into the array.
            // `nums[i]` now represents the max possible profit robbing houses from 0 to `i`.
            nums[i] = max;
        }
    }
    // The final element holds the max profit for the entire street.
    return max;
};

---

# A Direct Guide to Domino and Tromino Tiling

The key to this problem is a systematic, step-by-step counting method. Instead of trying to find all tilings at once, we calculate the *number of ways* to tile a `2 x i` board by using the known counts for smaller boards (`2 x (i-1)`, `2 x (i-2)`, etc.). This is the essence of Dynamic Programming.

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
### Calculating `full[i]` (a perfect `2 × i` board)

To count the ways to fill a full `2 × i` board, look at the **last tile(s) placed**.  
There are **four** possibilities:

| Step | Last action | Description | Contribution |
|------|-------------|-------------|--------------|
| **A** | **Vertical domino** | Add one vertical domino to a perfect `2 × (i − 1)` board. | `full[i‑1]` |
| **B** | **Two horizontal dominoes** | Add two horizontal dominoes to a perfect `2 × (i − 2)` board. | `full[i‑2]` |
| **C** | **Tromino in a `topEmpty` gap** | Fill the lone empty top‑right cell of a `topEmpty[i‑1]` board with an L‑shaped tromino. | `topEmpty[i‑1]` |
| **D** | **Tromino in a `bottomEmpty` gap** | Fill the lone empty bottom‑right cell of a `bottomEmpty[i‑1]` board the same way. | `bottomEmpty[i‑1]` |


full[i] = full[i-1] + full[i-2] + topEmpty[i-1] + bottomEmpty[i-1]

---

### Calculating `topEmpty[i]` and `bottomEmpty[i]` (incomplete boards)

#### `topEmpty[i]` – only the top‑right cell is empty

| Step | Last action | Contribution |
|------|-------------|--------------|
| **A** | Place a tromino on a `full[i‑2]` board (covers both cells in column `i‑1` and bottom cell in column `i`). | `full[i‑2]` |
| **B** | Place a horizontal domino on a `bottomEmpty[i‑1]` board (covers top cells of columns `i‑1` and `i`). | `bottomEmpty[i‑1]` |


topEmpty[i] = full[i-2] + bottomEmpty[i-1]


---

### Base Cases

| `i` | `full[i]` | `gap[i]` |
|-----|-----------|----------|
| 0 | 1 | 0 |
| 1 | 1 | 0 |

`full[0] = 1`  (empty board),  
`full[1] = 1`  (one vertical domino),  
`gap[0] = gap[1] = 0`  (impossible to leave a corner empty).

---

