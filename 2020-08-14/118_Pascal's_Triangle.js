/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  console.log('로우로우', numRows); //numRows 에는 5가 들어가있다
  let temp = [];
  for (let i = 0; i < numRows; i++) {
    let turnArr = [i]; // 순서대로 [0][1][2][3][4]
    console.log('턴 arr', turnArr);
    (turnArr[0] = 1), (turnArr[i] = 1);
    for (let j = 1; j < i; j++) {
      turnArr[j] = temp[i - 1][j - 1] + temp[i - 1][j];
    }
    temp.push(turnArr); //for문으로 돌린 값을 temp 에 push 해줌!
  }
  return temp;
};
