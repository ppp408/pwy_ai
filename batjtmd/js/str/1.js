/*
  @func 反转字符串
  @param {string} str 字符串
  @return {string} 反转后的字符串
*/
function reverseString(str) {
    return str.split('').reverse().join('');
  }

  console.log(reverseString("hello"));