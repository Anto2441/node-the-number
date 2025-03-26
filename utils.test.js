import { getRandomNumber } from './utils.js';

describe('getRandomNumber', () => {
  test('shoul generate a number between 1 and 100', () => {
    const randomNumber = getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
  });

  test('should generate a number within a custom range', () => {
    const randomNumber = getRandomNumber(10, 50);
    expect(randomNumber).toBeGreaterThanOrEqual(10);
    expect(randomNumber).toBeLessThanOrEqual(50);
  });
});
