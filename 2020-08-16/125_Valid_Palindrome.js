/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  //약간 느린듯.. 116ms !!
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/gi, '');
  let rev = s.split('').reverse().join('');
  return s.indexOf(rev) == 0;
};
