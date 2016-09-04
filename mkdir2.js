const program = require('commander');
const error = require('commander.js-error');

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

if (program.mode) {
  
}
