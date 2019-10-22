/* eslint-disable eol-last,comma-dangle,no-trailing-spaces */
/**
 * http://www.cnblogs.com/zhongweiv/p/node_schedule.html
 * https://www.jianshu.com/p/f787593071e1
 * https://www.cnblogs.com/sunjie9606/archive/2012/03/15/2397626.html
 * *    *    *    *    *    *
 * ┬    ┬    ┬    ┬    ┬    ┬
 * │    │    │    │    │    |
 * │    │    │    │    │    └ 一周的星期 (0 - 7) (0 or 7 is Sun)
 * │    │    │    │    └───── 月份 (1 - 12)
 * │    │    │    └────────── 月份中的日子 (1 - 31)
 * │    │    └─────────────── 小时 (0 - 23)
 * │    └──────────────────── 分钟 (0 - 59)
 * └───────────────────────── 秒 (0 - 59, OPTIONAL)
 */
var schedule = require('node-schedule');
const NodeCmd = require('node-cmd');

function scheduleCronstyle() {
  // 每小时的59分触发

  schedule.scheduleJob('0 59 * * * *', function() {
    console.log('scheduleCronstyle:' + new Date());
    NodeCmd.get(
      `git pull`,
      function(err, data) {
        if (!err) {
          console.log('bash success');
        } else {
          console.log('bash fail');
        }
      },
    );
  });
}

scheduleCronstyle();
