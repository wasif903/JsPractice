// ----------------------------------- Question 1 ------------------------------
// ----------------------------------- Two Sum ------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (target == nums[j] + nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// ----------------------------------- Question 2 ------------------------------
// ----------------------------------- Add Two Numbers ------------------------------

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const addTwoNumbers = (l1, l2) => {
//     const dummyHead = new ListNode(0);
//     let p1 = l1, p2 = l2, current = dummyHead;
//     let carry = 0;

//     while (p1 !== null || p2 !== null || carry > 0) {
//         const val1 = p1 !== null ? p1.val : 0;
//         const val2 = p2 !== null ? p2.val : 0;

//         const sum = val1 + val2 + carry;
//         carry = Math.floor(sum / 10);

//         current.next = new ListNode(sum % 10);
//         current = current.next;

//         if (p1 !== null) p1 = p1.next;
//         if (p2 !== null) p2 = p2.next;
//     }

//     return dummyHead.next;
// }

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// console.log(addTwoNumbers(l1, l2));


// ----------------------------------- Question 3 ------------------------------
// ----------------------------------- Longest Substring Without Repeating Characters ------------------------------

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// const lengthOfLongestSubstring = (s) => {
//     let newString = "";
//     let largest = 0;

//     for (let i = 0; i < s.length; i++) {
//         const char = s.charAt(i);

//         if (newString.includes(char)) {
//             newString = newString.slice(newString.indexOf(char) + 1);
//         }

//         newString += char;

//         if (newString.length > largest) {
//             largest = newString.length;
//         }
//     }

//     return largest;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));

// ----------------------------------- Question 4 ------------------------------
// ----------------------------------- Median of Two Sorted Arrays ------------------------------

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// const findMedianSortedArrays = (nums1, nums2) => {
//     let newArray = [...nums1, ...nums2];
//     let median = 0;

//     newArray = newArray.sort((a, b) => (a - b));

//     if (newArray.length % 2 == 0) {
//         median = (newArray[Math.ceil(newArray.length / 2) - 1] + newArray[Math.ceil(newArray.length / 2)]) / 2;
//     } else {
//         median = newArray[Math.ceil(newArray.length / 2) - 1];
//     }

//     return median;
// };

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

// ----------------------------------- Question 5 ------------------------------
// ----------------------------------- Longest Palindromic Substring ------------------------------

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// const longestPalindrome = (s) => {
//     if (s.length <= 1) return s;

//     let start = 0, maxLength = 0;

//     function expandAroundCenter(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }

//         const length = right - left - 1;
//         if (length > maxLength) {
//             start = left + 1;
//             maxLength = length;
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         expandAroundCenter(i, i);
//         expandAroundCenter(i, i + 1);
//     }

//     return s.substring(start, start + maxLength);
// };

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));


// ----------------------------------- Question 6 ------------------------------
// ----------------------------------- Zigzag Conversion ------------------------------

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);


// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// const convert = (s, numRows) => {
//     if (numRows === 1) return s;

//     const rows = new Array(numRows).fill("");
//     let currentRow = 0;
//     let goingDown = false;

//     for (const char of s) {
//         rows[currentRow] += char;
//         if (currentRow === 0 || currentRow === numRows - 1) {
//             goingDown = !goingDown;
//         }
//         currentRow += goingDown ? 1 : -1;
//     }

//     return rows.join("");
// };

// console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("PAYPALISHIRING", 4));
// console.log(convert("A", 1));

// ----------------------------------- Question 7 ------------------------------
// ----------------------------------- Reverse Integer ------------------------------

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// const reverse = (x) => {
//     let result = "";
//     if (x == 0) return 0;
//     if (x < 0) result += "-"

//     x = Math.abs(x);

//     while (x > 0) {
//         let temp = x % 10;
//         result += temp.toFixed(0).toString();
//         x = Math.floor(x / 10);
//     }

//     if (result < -2147483648 || result > 2147483647) { //This Condition Handle 32 bit integer if input is 64 bit integer returns zero
//         return 0;
//     }

//     return Number(result);
// }

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(102));
// console.log(reverse(1534236469));