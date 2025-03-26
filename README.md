
![Capture d’écran 2025-03-26 à 16 01 46](https://github.com/user-attachments/assets/2ee2e2a9-101e-4460-b7e3-f9fbe693271a)

![Capture d’écran 2025-03-26 à 16 03 03](https://github.com/user-attachments/assets/742c1fe0-7b43-4388-8fd1-98032b8cecf8)

# 🎯 Number Guessing Game - CLI Edition

Welcome to the **Number Guessing Game**, a fun and interactive Command-Line Interface (CLI) game built with **Node.js**! Test your luck and logic as you try to guess the randomly chosen number within the fewest attempts possible.

---

## 🚀 Features

✅ **Random Number Generation** – The game picks a number within a customizable range.  
✅ **User Input Handling** – Enter your guesses and get instant feedback.  
✅ **Game Summary** – View your past attempts at the end of each round.  
✅ **Replay Option** – Keep playing without restarting the script.  
✅ **Leaderboard** – Track the best players based on attempts and time taken.  
✅ **Timer** – See how fast you can guess the correct number.  
✅ **Unit Tests** – Ensuring the core functionalities work flawlessly using Jest.

---

## 📦 Installation

Ensure you have **Node.js (v18+)** installed, then clone this repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/your-username/node-number-guessing-game.git
cd node-number-guessing-game

# Install dependencies
npm install
```

---

## ▶️ How to Play

Run the game using:

```sh
npm start
```

Follow the on-screen instructions to guess the number. The game provides feedback whether your guess is too high or too low.

### 🏆 Leaderboard

At the end of each game, your score is recorded and sorted by **attempts** and **time taken**.

---

## 🛠 Development & Testing

### 🔍 Run Tests

We use **Jest** for unit testing. To execute tests:

```sh
npm test
```

To enable detailed output:

```sh
npm test -- --verbose
```

---

## 📜 Code Overview

### Main Files:

- `game.js` – Core logic for number guessing
- `leaderboard.js` – Manages player scores
- `utils.js` – Utility functions
- `tests/` – Jest test cases for validation

---

🎉 Have fun guessing! 🎯
