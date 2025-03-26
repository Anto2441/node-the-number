import chalk from 'chalk';

export const leaderboard = [];

export function updateLeaderboard(playerName, attempts, timeTaken) {
  leaderboard.push({ playerName, attempts, timeTaken });
  leaderboard.sort(
    (a, b) => a.attempts - b.attempts || a.timeTaken - b.timeTaken
  );
}

export function displayLeaderboard() {
  if (leaderboard.length === 0) {
    console.log(
      chalk.yellow('\n🏆 Tableau de classement vide pour le moment.')
    );
    return;
  }

  console.log(chalk.green('\n🏆 **Tableau de Classement**'));
  console.log(chalk.blue('┌──────┬──────────────┬──────────┬───────────────┐'));
  console.log(chalk.blue('│ Rank │ Nom          │ Essais   │ Temps (s)     │'));
  console.log(chalk.blue('├──────┼──────────────┼──────────┼───────────────┤'));

  leaderboard.forEach((entry, index) => {
    console.log(
      chalk.blue(
        `│  ${index + 1}   │ ${entry.playerName.padEnd(12)} │ ${entry.attempts
          .toString()
          .padEnd(8)} │ ${entry.timeTaken.toFixed(2).padEnd(12)}  │`
      )
    );
  });

  console.log(chalk.blue('└──────┴──────────────┴──────────┴───────────────┘'));
}
