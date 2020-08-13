/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//이문제는 주어진 트리가 루트노드를 기준으로 대칭트리인지 아닌지 확인하는 문제이다
//계속해서 자식노드를 비교해나가면서 왼쪽과 오른쪽의 대칭여부를 확인해야하니  && 비교 연산자를 사용해서 썼다
let isSymmetric = function (root) {
  //자식노드가 없을때, true 를 리턴합닌다
  // console.log('루트',root);
  if (root === null) return true;
  return isSymmetric(root.left, root.right);

  function TreeNode(leftN, rightN) {
    //왼쪽 자식노드와 오른쪽 자식노드가 없어도 대칭으로 본다
    if (leftN === null && rightN === null) {
      return true;
    }
    if (leftN !== null && rightN !== null) {
      //왼쪽 또는 오른쪽 자식노드 하나가 null이면 내칭이 아니므오 false 를 리턴함
      if (leftN.val !== rightN.val) {
        return false;
      }
      return (
        TreeNode(leftN.left, rightN.right) && TreeNode(leftN.left, rightN.right)
      );
    } else {
      return false;
    }
  }
};
