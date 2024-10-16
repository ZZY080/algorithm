// class Solution {
//   // Define ListNode as a method of the Solution class
//   ListNode(val) {
//     return {
//       val: val,
//       next: null,
//     };
//   }

//   createLinkedList(arr) {
//     if (arr.length === 0) return null;

//     let head = this.ListNode(arr[0]); // Call the ListNode method to create a new node
//     let current = head;

//     for (let i = 1; i < arr.length; i++) {
//       let node = this.ListNode(arr[i]);
//       current.next = node;
//       current = current.next;
//     }

//   }

//   printLinkedList(head) {
//     let nodes = [];
//     let current = head;
//     while (current) {
//       nodes.push(current.val);
//       current = current.next;
//     }
//     return nodes.join(' -> ');
//   }
// }

// // Example usage
// let linkedList = new Solution();
// linkedList.createLinkedList([1, 2, 3, 4]);

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey
        ? parentKey +
          (Array.isArray(obj) ? '.' : '.') +
          key.replace(/[^a-zA-Z0-9]/g, '')
        : key;

      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach((item, index) => {
          result[`${newKey}.${index}`] = item;
        });
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const input = { a: 1, b: { c: 2, d: { e: 3, f: [4, 5] } } };
const output = flattenObject(input);

console.log(output);
