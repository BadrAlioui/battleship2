# Ultimate Battleships

![Game Banner](assets/images/introduction.png)

**Ultimate Battleships** is a command‑line implementation of the classic Battleships game, written in pure Python. You face off against a computer opponent on a 5×5 grid, each side placing 4 ships and having up to 5 turns to sink the enemy fleet.

> **Live demo:** _https://mon-battleship-221b8a85dbc3.herokuapp.com/_

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technology Stack](#technology-stack)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Project Structure & Assets](#project-structure--assets)  
7. [Testing & Validation](#testing--validation)  
8. [Future Improvements](#future-improvements)  
9. [Credits](#credits)  

---

## Project Overview

Ultimate Battleships brings the naval combat experience to your terminal. It combines:

- **Interactive CLI** with clear prompts  
- **Colorized output** (hits in yellow, misses in red, ships in green/blue)  
- **Pure Python**—no web frameworks required for core gameplay  

---

## Features

- **5×5 game board**, 4 ships per side  
- **5 turns** maximum to sink all ships  
- **Colorized hits, misses, ships** via `colorama`  
- **Replayability**: prompt to play again  
- **Robust input validation** for rows/columns  

---

## Technology Stack

- **Language**: Python 3.12+  
- **Library**:  
  - `colorama` 0.4.6 — terminal text coloring  
- **Deployment (optional)**:  
  - `Flask` + `gunicorn` for a web UI  
- **Hosting**: Heroku  

---

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/YourUsername/UltimateBattleships.git
   cd UltimateBattleships

---

### Create and activate a virtual environment

```bash
# Create & activate virtual environment
python -m venv venv
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1
# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the game locally
python run.py
# • Enter your name when prompted  
# • Guess row and column (0–4) each turn  
# • Hits ($), misses (X) and ships (@/£) will be colorized  
# • After 5 turns—or when all ships are sunk—the game ends and you can choose to replay

# To play via Heroku’s CLI:
heroku run python run.py

# Project Structure & Assets
UltimateBattleships/
├── assets/  
│   └── images/  
│       ├── banner.png       # ASCII art banner  
│       ├── mockup.png       # CLI gameplay screenshot  
│       └── flowchart.png    # Game loop diagram  
├── run.py                   # Main game script   
├── requirements.txt         # Python dependencies  
└── README.md                # Project documentation  

# Ultimate Battleships

Ultimate Battleships is a terminal-based Python game where you and the computer take turns firing at each other's fleet on a 5x5 grid. Each side has four ships, and the first to sink more ships within five turns wins.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Game Rules](#game-rules)
* [Testing](#testing)
* [Deployment](#deployment)

## Features

* Interactive command-line interface using `print` and `input`
* Colored output for hits, misses, and feedback using **Colorama**
* Persistent game state via cookies in the web version (Flask)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BadrAlioui/battleShip.git
   cd battleShip
   ```
2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   # Windows PowerShell
   .\venv\Scripts\Activate.ps1
   # Unix/Mac
   source venv/bin/activate
   ```
3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

* **Local play (CLI):**

  ```bash
  python run.py
  ```
* **Heroku:**

  ```bash
  heroku create my-battleship
  git push heroku main
  heroku open
  ```

## Game Rules

* Board size: 5×5
* Ships per side: 4
* Turns: 5 per side
* Symbols:

  * `@`: player’s ship
  * `'`: computer’s ship
  * `$`: hit mark
  * `X`: miss mark
  * `£`: computer’s hit on player

## Testing

### Testing User Stories

**As a user, I want to receive information about the main objective of the program.**

* The welcome banner clearly explains the game’s goal and rules.

**As a user, I want to easily understand what input is needed on each step.**

* Prompts like `Enter your name:`, `Guess a row (0-4):`, and `Guess a column (0-4):` guide the player.
* Prompt text appears in green to stand out.

**As a user, I want to receive clear feedback in case I provide the wrong input.**

* Invalid entries (non‑numeric, out of range, duplicate coordinates) produce a red error message.

**As a user, I want to review the game state after each turn.**

* After each shot, the board displays hits and misses with colored symbols.

**As a user, I want the final result to be obvious.**

* At game end, a clear win/lose/draw message appears in color.

### Code Validation

* All Python code was checked against PEP8 standards using an online validator.

### Manual Testing

| Feature                  | Outcome                                         | Example Input         | Pass/Fail |
| ------------------------ | ----------------------------------------------- | --------------------- | --------- |
| Name input validation    | Rejects empty or non-letter names               | `(empty)`             | Pass      |
| Row/col validation       | Rejects non-integers and out-of-range values    | `5`, `-1`, `a`        | Pass      |
| Duplicate guess handling | Prompts again if the same cell is guessed twice | same coordinates      | Pass      |
| Hit detection            | Marks `$` and increments score on hit           | guessing a ship coord | Pass      |
| Miss detection           | Marks `X` on miss                               | guessing empty cell   | Pass      |
| Turn limit enforcement   | Stops after five turns                          | after 5 shots         | Pass      |
| Endgame scoring          | Displays correct win/lose/draw message          | various score states  | Pass      |

## Deployment

This project can be deployed to Heroku:

1. Ensure `requirements.txt` is up to date:

   ```bash
   pip freeze > requirements.txt
   ```
2. Add a `Procfile` containing:

   ```Procfile
   web: python run.py
   ```
3. Commit and push to your GitHub repo, then link and deploy on Heroku:

   ```bash
   heroku create your-app-name
   git push heroku main
   heroku open
   ```

# Ultimate Battleships

> ![Game Mockup](assets/mockup.png)

**Ultimate Battleships** is a terminal-style naval combat game where players have 5 turns to sink enemy ships hidden on a 5×5 grid. Inspired by the classic board game, the application uses Python’s `input()` and `print()` functions for an immersive, colorized experience in your console.

[Play the live demo on Heroku](https://mon-battleship-221b8a85dbc3.herokuapp.com/)

---

## Table of Contents

1. [User Experience (UX)](#user-experience-ux)
2. [Project Goals](#project-goals)
3. [User Stories](#user-stories)
4. [Color Scheme](#color-scheme)
5. [Game Mechanics](#game-mechanics)
6. [Flowchart](#flowchart)
7. [Features](#features)
8. [Technologies Used](#technologies-used)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Credits & Acknowledgements](#credits--acknowledgements)

---

## User Experience (UX)

* **Immersive CLI**: The game runs purely in the terminal, preserving the feel of a classic battleship match.
* **Clear Feedback**: Hits, misses, and scores are displayed with colored text to guide the player.
* **Replayability**: At the end, the player is prompted to play again or exit.

## Project Goals

* Build a self-contained Python application that does not require any external servers or browsers.
* Use only built-in `input()`/`print()` for I/O, enhanced by the `colorama` library for better readability.
* Deploy the game to Heroku to demonstrate seamless terminal hosting.

## User Stories

* As a player, I want to know how many turns I have left.
* As a player, I want to see my score and the computer’s score at each step.
* As a player, I want clear confirmation of hits and misses.
* As a player, I want to replay or exit after the game ends.

## Color Scheme

| Element            | Color  |
| ------------------ | ------ |
| Player ships (@)   | Green  |
| Computer hits (\$) | Yellow |
| Misses (X)         | Red    |
| Water (-)          | White  |
| Computer ships (£) | Blue   |

*Implement using [Colorama](https://pypi.org/project/colorama/)*

## Game Mechanics

1. Initialize three 5×5 boards: **player**, **computer**, and **display**.
2. Randomly place 4 ships (`@` for player, `'` for computer).
3. For up to 5 turns or until all ships sink:

   * Player guesses a coordinate (row, column).
   * Mark hit (`$`) or miss (`X`) on **display** board.
   * Computer makes a random guess on **player** board.
4. Track `player_score` and `computer_score`.
5. End when turns run out or a side wins, then prompt to replay.

## Flowchart

Place your flowchart image in `assets/flowchart.png` and reference it below:

![Game Flowchart](assets/flowchart.png)

---

## Features

* **Turn Counter**: Shows current turn and remaining turns.
* **Scoreboard**: Displays both scores dynamically.
* **Real-time Feedback**: Alerts for hits, misses, and computer actions.
* **Session Persistence**: Uses browser cookies when run via Flask (optional deployment).

## Technologies Used

* **Language**: Python 3.13
* **Libraries**: `colorama` for colored output
* **Hosting**: [Heroku](https://www.heroku.com/) using a Node.js + `node-pty` bridge for terminal emulation
* **Version Control**: Git & GitHub

## Testing

* Manual playtesting ensured correct hit/miss logic and turn count.
* Input validation checks for out-of-range or repeated coordinates.
* Tested on Windows PowerShell, Git Bash, and Heroku remote shells.

## Deployment

1. Clone the repo.
2. Install requirements:

   ```bash
   pip install -r requirements.txt
   ```
3. (Optional) If running in browser terminal: install Node.js deps:

   ```bash
   npm install
   ```
4. Launch locally:

   ```bash
   python run.py
   ```
5. Deploy to Heroku:

   ```bash
   heroku create your-app-name
   git push heroku main
   ```


