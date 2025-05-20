/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (57.82%)
 * Likes:    4941
 * Dislikes: 2831
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '"IceCreAm"'
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 * 
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "IceCreAm"
 * 
 * Output: "AceCreIm"
 * 
 * Explanation:
 * 
 * The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes
 * "AceCreIm".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "leetcode"
 * 
 * Output: "leotcede"
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s consist of printable ASCII characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (!vowels.includes(arr[left])) {
            left++;
        } else {
            right--;
        }
    }

    return arr.join('');
};
// @lc code=end

