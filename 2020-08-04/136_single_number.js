/**

 * @param {number[]} nums

 * @return {number}

 */

let singleNumber = function (nums) {
  //[2,2,1]   1을 출력하는 문제

  nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    //이렇게 for문을 돌려서  1을 뽑아낼수 있는뎅.. 더 좋은 방법이 있을거 같다!!!!

    if (nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};
