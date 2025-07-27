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