const zlib = require('zlib');
const unzip = require('unzip');
const jsZip = require('jszip');
const fs = require('fs');
const path = require('path');

/**
 * 压缩文件
 * @param source
 */
gZip = (source) => {
  console.log(source);

  const gzip = zlib.createGzip();//创建压缩流
  const inputStream = fs.createReadStream(source);
  const outputStream = fs.createWriteStream(source + '.gz');

  inputStream.pipe(gzip).pipe(outputStream);

  console.log('文件压缩完成!');
};

/**
 * 解压缩文件
 *
 * @param sourceFile
 * @param targetFile
 */
unGzip = (sourceFile, targetFile) => {
  console.log(sourceFile);
  console.log(targetFile);

  const gunzip = zlib.createGunzip();
  const inputStream = fs.createReadStream(sourceFile);
  const outputStream = fs.createWriteStream(targetFile);

  inputStream.pipe(gunzip).pipe(outputStream);

  console.log('文件解压完成!');
};

//gZip(path.resolve('/Users/yun.zhao/Downloads/1.xmind'));

//unGzip(path.resolve('/Users/yun.zhao/Downloads/1.xmind.gz'), path.resolve('/Users/yun.zhao/Downloads/1.xmind'));

/**
 * 提取到目录
 *
 * @param sourceFile
 * @param targetFile
 */
unZip = (sourceFile, targetFile) => {
  console.log(sourceFile);
  console.log(targetFile);

  const readStream = fs.createReadStream(path.resolve(sourceFile));
  readStream.pipe(unzip.Extract({ path: targetFile }));

  console.log('zip 文件解压完成!');
};

unZip(path.resolve('/Users/yun.zhao/Downloads/1.xmind.zip'), path.resolve('/Users/yun.zhao/Downloads'));

/*console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
console.log(path.resolve('1.xmind.zip'));
console.log(path.resolve('1.xmind'));*/
