const chalk = require('chalk');
const figlet = require('figlet');
const {createIndex} = require('./lib/index-creator');
const {askDirectoryPath} = require('./lib/user-input');

console.log(
    chalk.yellow(
      figlet.textSync('Index Creator', { horizontalLayout: 'full' })
    )
);

askDirectoryPath().then(function ({directoryPath, extension}) {
  createIndex(directoryPath, extension);
});