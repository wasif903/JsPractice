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