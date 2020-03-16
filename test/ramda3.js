const R = require('ramda');

const users = [
  {firstName: 'yun.zhao',age:38},
  {firstName: 'shiqiang.sun',age:32},
  {firstName: 'zuqiang.you',age:30},
];

// 查找
const user = R.find(R.propEq('age', 32))(users);
console.log('user:',user);

// 元素的索引值
const index = R.findIndex(R.propEq('age', 32))(users);
console.log('index:',index);

// 临时变量
const user2 = {firstName: 'liangchen.wu',age:35};

// 替换数组中指定索引处的值
const temp = R.update(1,user2,users);

// 将数组中指定索引处的值替换为经函数变换的值
const temp2 = R.adjust(2, ()=>user2 , users);

// 初始化
console.log('users:',users);

// 处理结果2
console.log('temp:',R.sortWith([R.descend(R.prop('age'))])(temp));

// 处理结果3
console.log('temp2:',R.sortWith([R.ascend(R.prop('firstName'))])(temp2));
