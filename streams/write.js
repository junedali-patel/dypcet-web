const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.write('\nWriting to a stream is easy!');

writableStream.end();

writableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
  console.error('Error writing to stream:', err);
});