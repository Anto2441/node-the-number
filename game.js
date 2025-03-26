import chalk from 'chalk';
import readline from 'readline';

import { displayLeaderboard, updateLeaderboard } from './leaderboard.js';
import { DIFFICULTY_LEVELS } from './config.js';
import { getRandomNumber } from './utils.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function startGame() {
  let playAgain = true;

  while (playAgain) {
    const playerName = await askQuestion(chalk.cyan('\nEntrez votre nom : '));

    console.log(chalk.yellow('\nPlease select a difficulty level:'));
    Object.entries(DIFFICULTY_LEVELS).forEach(([key, { name, attempts }]) => {
      console.log(`${key}. ${name} (${attempts} attempts)`);
    });

    let difficulty;
    while (!difficulty) {
      const input = await askQuestion(
        chalk.cyan('\nEnter your choice (1, 2, or 3): ')
      );
      if (DIFFICULTY_LEVELS[input]) {
        difficulty = DIFFICULTY_LEVELS[input];
      } else {
        console.log(chalk.red('Invalid choice. Please select 1, 2, or 3.'));
      }
    }

    console.log(
      chalk.green(
        `\nYou selected ${difficulty.name} difficulty. You have ${difficulty.attempts} attempts.`
      )
    );

    const secretNumber = getRandomNumber();
    let attemptsLeft = difficulty.attempts;
    let guessedCorrectly = false;
    let attemptHistory = [];

    const startTime = Date.now();

    while (attemptsLeft > 0) {
      const guess = await askQuestion(
        chalk.magenta('\nEnter your guess (1-100): ')
      );
      const guessNumber = parseInt(guess, 10);

      if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
        console.log(
          chalk.red('Invalid input. Please enter a number between 1 and 100.')
        );
        continue;
      }

      attemptHistory.push(guessNumber);
      attemptsLeft--;

      if (guessNumber === secretNumber) {
        const timeTaken = (Date.now() - startTime) / 1000;
        console.log(
          chalk.green(
            `\n🎉 Bravo ! Vous avez trouvé le nombre en ${
              attemptHistory.length
            } essais et ${timeTaken.toFixed(2)} secondes.`
          )
        );

        updateLeaderboard(playerName, attemptHistory.length, timeTaken);
        guessedCorrectly = true;
        break;
      } else if (guessNumber < secretNumber) {
        console.log(chalk.blue('Too low! Try again.'));
      } else {
        console.log(chalk.blue('Too high! Try again.'));
      }

      if (attemptsLeft > 0) {
        console.log(chalk.yellow(`Attempts left: ${attemptsLeft}`));
      }
    }

    console.log('\n🔎 **Game Summary**');
    console.log(`🎯 Target Number: ${secretNumber}`);
    console.log(`📜 Your Attempts: ${attemptHistory.join(' → ')}`);

    if (!guessedCorrectly) {
      console.log(
        chalk.red(`\nGame over! The correct number was ${secretNumber}.`)
      );
    }

    displayLeaderboard();

    const replayInput = await askQuestion(
      chalk.cyan('\nDo you want to play again? (yes/no): ')
    );
    playAgain = replayInput.trim().toLowerCase() === 'yes';
  }

  console.log(chalk.green('\nThanks for playing! Goodbye.'));
  rl.close();
}

export { startGame };
