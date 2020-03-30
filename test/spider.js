const request = require('request');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

const fs = require('fs');

const spiderProgress = (url, fileName, callback) => {
  // 开始下载
  const spinner = ora(`${url} 爬取开始!`);
  spinner.start();

  request.get({ url, timeout: 30000 }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      spinner.succeed();
      console.log(symbols.success, chalk.green(`${url} 爬取成功!`));
    } else {
      // 下载失败调用
      spinner.fail();
      console.log(symbols.error, chalk.red(error));
    }
  }).pipe(fs.createWriteStream(fileName)).on('close', callback);
};

// 启动一个job
(async () => {
  spiderProgress('http://47.98.131.29:8888/api/render?output=screenshot&url=https://cn.bing.com', 'bing.png', () => {
    console.log('download complete。');
  });

  spiderProgress('http://www.baidu.com', 'baidu.html', () => {
    console.log('download complete。');
  });
})();
