/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//아쉬운이 많이 남는 코드다.....시간날때 리펙토링 해봐야겠당!
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let frist = head;
  let second = head;

  while (frist && frist.next) {
    frist = frist.next;
    second = second.next.next;
    if (frist === second) {
      return true;
    }
  }
  return false;
};
