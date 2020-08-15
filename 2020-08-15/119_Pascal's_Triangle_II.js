/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//알고리즘을 O (k) 공간 복잡성으로 최적화 하는 문제!
let getRow = function (rowIndex) {
  console.log('로우 인덱스', rowIndex); // 3, 2,1 이렇게 내림차순 형태로 나온다.
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }
  let tempArr = [];

  if (rowIndex >= 2) {
    tempArr.push(1);
    let totalRow = getRow(rowIndex - 1);
    console.log('합계', totalRow); // [1,1] , [1,2,1]

    for (let i = 1; i < rowIndex; i++) {
      tempArr.push(totalRow[i] + totalRow[i - 1]);
      // tempArr.push(1);
      console.log('최종1?', tempArr); //[1,3] ,[1,3,3]
    }
    tempArr.push(1);
    console.log('최종2?', tempArr); //[1,3,3,1]
  }
  return tempArr; //리턴 안해주면 컴파일에러
};
