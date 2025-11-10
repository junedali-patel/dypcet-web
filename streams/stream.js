const fs = require('fs');

const readableStream = fs.createReadStream('myfile.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024
});


readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('No more data to read.');
});

readableStream.on('error', (err) => {
  console.error('Error reading from stream:', err);
});