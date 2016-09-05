const exec = require('child_process').exec;
const bytes = require('bytes');

console.log('Obtaining node executable size...');

exec('wc -c < $(which node)', (error, stdout) => {
  console.log('\toutput:', stdout);
  console.log('\toutput with bytes library:', bytes(parseInt(stdout, 10)));
});
