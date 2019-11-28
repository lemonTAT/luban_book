# 两数相加

code:

暴力搜索,[传送门](https://leetcode-cn.com/problems/two-sum/)

```
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var c1 = l1,
    c2 = l2,
    l3, c3,
    carry = 0;

  while (c1 || c2 || carry) {
    var v1 = 0,
      v2 = 0;
    
    // 这么做是为了防止整数中当前位上没有数字
    if (c1) {
      v1 = c1.val;
      c1 = c1.next;
    }

    if (c2) {
      v2 = c2.val;
      c2 = c2.next;
    }

    var sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    if (!c3) {
      l3 = new ListNode(sum % 10);
      c3 = l3;
    } else {
      c3.next = new ListNode(sum % 10);
      c3 = c3.next;
    }

  }
  return l3;
};
```
