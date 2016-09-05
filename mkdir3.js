#!/usr/bin/env node

const co = require('co');
const prompt = require('co-prompt');
const fs = require('fs');

co(function* () {
  const directory = yield prompt('Directory name: ');
  try {
    fs.mkdirSync(directory);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  process.stdin.pause();
});
