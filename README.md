# My LeetCode 75 Journey 🚀

This repository documents my solutions and progress through the **[LeetCode 75](https://leetcode.com/studyplan/leetcode-75/)** study plan. My goal is to master the key patterns needed for technical assessments and to become a more proficient problem-solver.

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