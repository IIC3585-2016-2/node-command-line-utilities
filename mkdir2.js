#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');


let directory;

program
  .version('1.0')   // --version is automated
  .description('Make directories')
  .arguments('<directory>')
  .option('-m, --mode <mode>', 'set file mode (as in chmod)')
  .option('-p, --parents ', 'no error if existing, make parent directories as needed')
  .option('-v, --verbose ', 'print a message for each created directory ')
  // --help is automated
  .action(directoryValue => {
    directory = directoryValue;
  })
  .parse(process.argv);

if (!directory) {
  program.help();
}

if (program.parents) {
  console.error('Not implemented, exiting...');
  process.exit(2);
}

if (program.verbose) {
  if (program.mode) {
    console.log('Creating directory', directory, 'with mode', program.mode, '...');
  } else {
    console.log('Creating directory', directory, '...');
  }
}

try {
  fs.mkdirSync(directory, program.mode);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
