/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (67.63%)
 * Likes:    24119
 * Dislikes: 1551
 * Total Accepted:    3.6M
 * Total Submissions: 5.3M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The input is generated such that answer[i] is guaranteed to fit in a 32-bit
 * integer.
 * 
 * 
 * 
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The
 * output array does not count as extra space for space complexity analysis.)
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let result=[];
//     for (let i=0;i<n;i++){
//         let product=1;
//         for (let j=0;j<n;j++){
//         if(i!==j){
//             product *= nums[j];
//         }
//         }
//     result.push(product);
//     }
//     return result;
// };

var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return result;
};
// @lc code=end

