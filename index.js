import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';

import { DIFFICULTY_LEVELS } from './config.js';
import { getRandomNumber } from './utils.js';
import { startGame } from './game.js';

clear();

console.log(
  chalk.green(figlet.textSync('Guess The Number', { horizontalLayout: 'full' }))
);

console.log(chalk.blue('Welcome to the number guessing game!'));
console.log(chalk.yellow("I'll choose a number between 1 and 100."));
console.log(
  chalk.cyan('Your aim is to guess it in a limited number of tries.')
);
console.log();

startGame();
