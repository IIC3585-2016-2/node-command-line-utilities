/* eslint prefer-template: 0 */

const chalk = require('chalk');

console.log(chalk.green('Hello ' + chalk.bold.underline('World!')));

const error = chalk.bold.red;
console.log(error('An error has ocurred.'));
