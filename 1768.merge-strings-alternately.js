/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let i=0;let j = 0;
    while(i<word1.length && j< word2.length){
        result += word1[i];
        result += word2[j];
        i++;
        j++;
    }
    while(i<word1.length){
        result+= word1[i];
        i++;
    }
    while(j<word2.length){
        result+=word2[j];
        j++;
    }
    return result;
};
// @lc code=end

