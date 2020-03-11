const R = require('ramda');

// 两数相加
const addNumbers = R.add(2, 3);
console.log(addNumbers);

// 将数组的值替换为经函数变换的值
const mapIndexed = R.addIndex(R.map);
const tempArray = ['f', 'o', 'o', 'b', 'a', 'r'];
const tempMap = mapIndexed((val, idx) => idx + '-' + val, tempArray);
console.log(tempMap);

// 将数组中指定索引处的值替换为经函数变换的值
console.log(R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']));

// 在列表末尾拼接一个元素
console.log(R.append('tests', ['write', 'more']));

// 在列表头部之前拼接一个元素
console.log(R.prepend('tests', ['write', 'more']));

// 将函数 fn 作用于参数列表 args
const nums = [1, 2, 3, -99, 42, 6, 7];
console.log(R.apply(Math.max, nums));

// 创建一个升序比较函数
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const byAge = R.ascend(R.prop('age'));
const peopleByYoungestFirst = R.sort(byAge, people);
console.log(peopleByYoungestFirst);

// 返回一个封装了 if / else，if / else, ... 逻辑的函数 fn。
const fn = R.cond([
  [R.equals(0),   R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T,           temp => 'nothing special happens at ' + temp + '°C']
]);

console.log(fn(0));

// 创建一个降序比较函数。
const byAge2 = R.descend(R.prop('age'));
const people2 = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge2, people2);
console.log(peopleByOldestFirst);

// 删除对象中指定 prop 属性
console.log(R.dissoc('b', {a: 1, b: 2, c: 3}));
