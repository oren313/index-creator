const chalk = require('chalk');
const figlet = require('figlet');
const {createIndex} = require('./lib/index-creator');
const {askDirectoryPath} = require('./lib/user-input');

const myArgs = process.argv.slice(2,4);

console.log(
    chalk.yellow(
      figlet.textSync('Index Creator', { horizontalLayout: 'full' })
    )
);

if (myArgs && myArgs.length === 2) {
  createIndex(...myArgs);
} else {
  askDirectoryPath().then(function ({directoryPath, extension}) {
    createIndex(directoryPath, extension);
  });
}