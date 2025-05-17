/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 *
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (52.63%)
 * Likes:    5659
 * Dislikes: 1566
 * Total Accepted:    767.6K
 * Total Submissions: 1.5M
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t +
 * ... + t + t (i.e., t is concatenated with itself one or more times).
 * 
 * Given two strings str1 and str2, return the largest string x such that x
 * divides both str1 and str2.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Step 1: Check if str1 + str2 is the same as str2 + str1
    // This tells us if both strings are made from the same repeating block
    if (str1 + str2 !== str2 + str1) {
        return ""; // If not, no common block exists
    }

    // Step 2: Create a function to find the Greatest Common Divisor (GCD)
    const getGCD = function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Step 3: Find GCD of the lengths of the two strings
    const lengthGCD = getGCD(str1.length, str2.length);

    // Step 4: Return the first `lengthGCD` characters from str1
    return str1.slice(0, lengthGCD);
};

// @lc code=end

