const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('myfile.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
writableStream.on('finish', () => {
  console.log('File copy completed!');

const gzip = zlib.createGzip();
const writableStream = fs.createWriteStream('myfile.txt.gz');
readableStream
  .pipe(gzip)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('File successfully compressed to myfile.txt.gz');
  })
  .on('error', (err) => {
    console.error('Error during compression:', err);
  });
});

fs.createReadStream('myfile.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('myfile_unzipped.txt'))
  .on('finish', () => {
    console.log('File successfully decompressed!');
  });
