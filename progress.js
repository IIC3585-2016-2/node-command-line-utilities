const ProgressBar = require('progress');

const contentLength = 32 * 1024;

const bar = new ProgressBar('Downloading... [:bar] :percent', {
  width: 20,
  total: contentLength,
});

function next() {
  const chunk = Math.random() * 10 * 1024;
  bar.tick(chunk);

  if (!bar.complete) {
    setTimeout(next, 500);
  }
}

next();
