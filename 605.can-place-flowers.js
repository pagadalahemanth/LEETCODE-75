/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 *
 * https://leetcode.com/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (28.87%)
 * Likes:    6996
 * Dislikes: 1271
 * Total Accepted:    1.2M
 * Total Submissions: 4M
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * You have a long flowerbed in which some of the plots are planted, and some
 * are not. However, flowers cannot be planted in adjacent plots.
 * 
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty
 * and 1 means not empty, and an integer n, return true if n new flowers can be
 * planted in the flowerbed without violating the no-adjacent-flowers rule and
 * false otherwise.
 * 
 * 
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            count++;
            i++; // skip next plot
        }
    }

    return count >= n;
};
// @lc code=end

