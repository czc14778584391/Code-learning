//去重
const array = [1, 23, 6, 6, 8, 9, 4]
const ar = [...new Set(array)]

// 判断元素是否在集合中
const ar2 = new Set(array);
console.log(ar2);//set是一个对象
console.log(ar2.has(6));
// 求交集
const set1 = new Set([1, 6, 8, 9, 8]);
const Repare = [...set1].filter((item) => { return ar2.has(item) })
console.log(Repare);