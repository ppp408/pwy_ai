// 数组对象
const arr = ['1', '2', '3'];
console.log(typeof arr); 
const date=new Date();
console.log(typeof date);

// 如何区分Object这些类型？
console.log(typeof Object.prototype.toString.call(arr)); //[object Array]
console.log(Object.prototype.toString.call(date)); //[object Date]

function getType(value) {
     // string api 的选择
     // split + substring
     return Object.prototype.toString.call(arr)
}

