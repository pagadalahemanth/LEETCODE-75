/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 *
 * https://leetcode.com/problems/string-compression/description/
 *
 * algorithms
 * Medium (57.84%)
 * Likes:    5630
 * Dislikes: 8521
 * Total Accepted:    855.3K
 * Total Submissions: 1.5M
 * Testcase Example:  '["a","a","b","b","c","c","c"]'
 *
 * Given an array of characters chars, compress it using the following
 * algorithm:
 * 
 * Begin with an empty string s. For each group of consecutive repeating
 * characters in chars:
 * 
 * 
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * 
 * 
 * The compressed string s should not be returned separately, but instead, be
 * stored in the input character array chars. Note that group lengths that are
 * 10 or longer will be split into multiple characters in chars.
 * 
 * After you are done modifying the input array, return the new length of the
 * array.
 * 
 * You must write an algorithm that uses only constant extra space.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: chars = ["a","a","b","b","c","c","c"]
 * Output: Return 6, and the first 6 characters of the input array should be:
 * ["a","2","b","2","c","3"]
 * Explanation: The groups are "aa", "bb", and "ccc". This compresses to
 * "a2b2c3".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: chars = ["a"]
 * Output: Return 1, and the first character of the input array should be:
 * ["a"]
 * Explanation: The only group is "a", which remains uncompressed since it's a
 * single character.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * Output: Return 4, and the first 4 characters of the input array should be:
 * ["a","b","1","2"].
 * Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to
 * "ab12".
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= chars.length <= 2000
 * chars[i] is a lowercase English letter, uppercase English letter, digit, or
 * symbol.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;   // This tells us where to write the next character
    let read = 0;    // This tells us where we are reading from

    while (read < chars.length) {
        let char = chars[read];   // current character
        let count = 0;

        // Count how many times current char repeats
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = char;
        write++;

        // If count > 1, write each digit of count
        if (count > 1) {
            let countStr = count.toString(); // convert 12 -> "12"
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write; // new length of compressed array
};

// @lc code=end

