#!/usr/bin/env node

/**
 * 作用是告诉系统运行这个文件的解释器是node
 */
/**
 * job
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
//const schedule = require('node-schedule');
const CronJob = require('cron').CronJob;
const NodeCmd = require('node-cmd');
const delay = require('delay');
const moment = require('moment');

(async () => {
  new CronJob('*/10 * * * * *', async () => {
    const startTime = Date.now();

    console.log('startTime', moment(startTime).format('YYYY-MM-DD HH:mm:ss'));

    // 延时2000ms
    await delay(2000);

    const delayStartTime = Date.now();

    console.log('delayStartTime', moment(delayStartTime).format('YYYY-MM-DD HH:mm:ss'));

    NodeCmd.get(
      `
            pwd
        `,
      (err, data, stderr) => {
        if (!err) {
          console.log('the node-cmd cloned dir contains these files :\n\n', data);
        } else {
          console.log('error', err);
        }
      },
    );
  }, null, true).start();
})();
