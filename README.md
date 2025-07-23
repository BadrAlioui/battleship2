# Ultimate Battleships

![Game Banner](assets/images/banner.png)

**Ultimate Battleships** is a command‑line implementation of the classic Battleships game, written in pure Python. You face off against a computer opponent on a 5×5 grid, each side placing 4 ships and having up to 5 turns to sink the enemy fleet.

> **Live demo:** _https://your‑heroku‑app.herokuapp.com_

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
├── battleships.py           # Helper functions (board init, ship placement)  
├── requirements.txt         # Python dependencies  
└── README.md                # Project documentation  
