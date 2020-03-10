import chalk from 'chalk';
import IndexCreator from './lib/index-creator';
import {askDirectoryPath} from './lib/user-input';
clear();

console.log(
    chalk.yellow(
      figlet.textSync('Index creator', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    const {directoryPath, extension} = await askDirectoryPath();
    console.log(directoryPath, extension);
  };
  
  run();