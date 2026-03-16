# Code Challenge Huridocs

# Kata Setup

🥋👩‍💻 Welcome to your kata setup! 🥷

This repository provides you with a convenient setup to tackle coding katas. You can choose to run it with Docker or without it, depending on your preference.

## Getting Started

### Using Docker 🐳

1. Build the Docker image:
   ```
   docker compose build
   ```

2. Run the tests:
   ```
   docker compose run --rm app npm test
   ```

2. Run the CLI:
   ```
   docker compose run --rm app npm run cli -- '[["S","E"]]'
   ```

### Without Docker 🚀
Install dependencies locally:

```
npm install
```
Run the tests:

```
npm test
```

## 💻 CLI Interface

### Usage

```bash
npm run cli -- '<labyrinth-json>'
```

### Examples

```bash
# Simple case - adjacent S and E
npm run cli -- '[["S","E"]]'
# Output: 1

# Challenge example - should return 8
npm run cli -- '[["S","0","1","0","E"],["1","0","1","0","1"],["1","0","0","0","0"],["0","0","1","1","1"],["0","0","0","0","0"]]'
# Output: 8

# No path possible
npm run cli -- '[["S","1"],["1","E"]]'
# Output: -1
```

### Help

```bash
npm run cli -- --help
```

____________
🚨 Please make sure that the test runs successfully before the day of the kata. 🚨

Happy coding! 🚀 👩‍💻👨‍💻👩🏽‍💻👨🏻‍💻👨🏿‍💻👩🏻‍💻
