const R = require('ramda');

const greet = R.replace('{name}', R.__, 'Hello, {name}!');

//console.log(greet('Alice'));

const nums = [1, 2, 3, -99, 42, 6, 7];

const maxNum = R.apply(Math.max, nums); //42

const minNum = R.min(789, 123); //123

//console.log(R.add(maxNum, minNum));

//console.log(R.multiply(maxNum, minNum));

const basket = [
  { item: 'apples', per: .95, count: 3, cost: 2.85 },
  { item: 'peaches', per: .80, count: 2, cost: 1.60 },
  { item: 'plums', per: .55, count: 4, cost: 2.20 },
];

//console.log(R.sum(R.pluck('cost',basket)));

/**
 * 将多个函数合并成一个函数，从右到左执行。
 * 2*(-4) = -8
 * 2+(-8) = -6
 * -6 取绝对值 6
 */
//console.log(R.compose(Math.abs, R.add(2), R.multiply(2))(-4));

/**
 * 将多个函数合并成一个函数，从左到右执行。
 * -4 取绝对值 4
 * 4+2 = 6
 * 6*2 取绝对值 12

 */
//console.log(R.pipe(Math.abs, R.add(2), R.multiply(2))(-4));

const volume = (length, width, height) => {
  return (width) => {
    return (height) => {
      return length * width * height;
    };
  };
};

const len200 = volume(20);

//console.log(len200(10)(20));
//console.log(len200(20)(20));


const volumeFun = (length, width, height) => {
  return length * width * height;
};

const volumeCurry = R.curry(volumeFun);

const len200Curry = volumeCurry(100);
const width200Curry = len200Curry(1);
const height200Curry = width200Curry(2);

//console.log(height200Curry);

const users = [
  {
    id: 124,
    userName: 'yun.zhao',
    role: 1,
  },
  {
    id: 123,
    userName: 'lianchen.wu',
    role: 2,
  },
  {
    id: 126,
    userName: 'shiqiang.sun',
    role: 2,
  },
  {
    id: 125,
    userName: 'zuqiang.you',
    role: 2,
  },
];

const searchUser = R.where({
  role: R.equals(2),
});

const filterUsers = R.sortBy(R.prop('id'),R.filter(searchUser, users));
const filterUsers2 = R.compose(R.sortBy(R.prop('id')),R.filter(searchUser))(users);
const filterUsers3 = R.pipe(R.filter(searchUser),R.sortBy(R.prop('id')))(users);

console.log(filterUsers3);

// 原价
const double = price => price * 2;
// 折扣价
const discount = price => price * 0.8;
// 优惠券
const coupon = price => price - 50;

const finalPrice = R.compose(coupon, discount, double)(50);
console.log('finalPrice',finalPrice);
