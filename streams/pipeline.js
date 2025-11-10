const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

const inputFile = 'myfile1.txt';
const compressedFile = 'myfile1.txt.gz';
const decompressedFile = 'myfile1_unzipped.txt';

pipeline(
  fs.createReadStream(inputFile, {
    encoding: 'utf8',
    highWaterMark: 64 * 1024
  }),
  zlib.createGzip(),
  fs.createWriteStream(compressedFile),
  (err) => {
    if (err) {
      console.error('Compression failed:', err);
      return;
    }
    console.log(`File successfully compressed to ${compressedFile}`);

    pipeline(
      fs.createReadStream(compressedFile),
      zlib.createGunzip(),
      fs.createWriteStream(decompressedFile),
      (err) => {
        if (err) {
          console.error('Decompression failed:', err);
        } else {
          console.log(`File successfully decompressed to ${decompressedFile}`);
        }
      }
    );
  }
);
