import { leaderboard, updateLeaderboard } from './leaderboard.js';

describe('updateLeaderboard', () => {
  beforeEach(() => {
    leaderboard.length = 0;
  });

  test('should add a player to the leaderboard', () => {
    updateLeaderboard('Alice', 3, 10.5);

    expect(leaderboard).toHaveLength(1);
    expect(leaderboard[0]).toEqual({
      playerName: 'Alice',
      attempts: 3,
      timeTaken: 10.5,
    });
  });

  test('should keep the leaderboard sorted', () => {
    updateLeaderboard('Bob', 5, 15.2);
    updateLeaderboard('Charlie', 3, 12.8);
    updateLeaderboard('Alice', 3, 10.5);

    expect(leaderboard).toEqual([
      { playerName: 'Alice', attempts: 3, timeTaken: 10.5 },
      { playerName: 'Charlie', attempts: 3, timeTaken: 12.8 },
      { playerName: 'Bob', attempts: 5, timeTaken: 15.2 },
    ]);
  });

  test('should not return anything', () => {
    expect(updateLeaderboard('David', 4, 9.8)).toBeUndefined();
  });
});
