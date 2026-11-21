# Quick Bunny — Level 1

![JavaScript](https://img.shields.io/badge/JavaScript-p5.js-FB7D24?logo=p5dotjs&logoColor=white)
![Game](https://img.shields.io/badge/type-browser%20game-4C8EDA)

A keyboard-controlled obstacle course built with p5.js and p5.play. Guide a blue bunny from the lower-left of the canvas toward orange food in the upper-right while avoiding two moving obstacles.

## Play

- Use the arrow keys to move the bunny.
- Reach the food to display the win message.
- Touching either obstacle resets the bunny to the starting position.

The game uses a 600 × 600 canvas. The two horizontal obstacles move in opposite directions and bounce at the side boundaries.

## How it works

index.html loads the local game libraries and sketch.js. In sketch.js, setup() creates edge sprites, the player, the food, and obstacles. draw() reads keyboard input, applies movement, checks collisions, and renders the sprites.

## Architecture

Keyboard input → bunny sprite movement → edge and obstacle collision checks → canvas rendering

## Start locally

Open index.html in a browser with the repository folders intact. No package installation or build step is required. If local scripts are blocked from a file URL, serve the folder with a local static server.

## Project layout

- index.html — browser entry point
- sketch.js — game setup, controls, hazards, and collision logic
- CSS/ — stylesheet
- lib/ — p5.js and p5.play libraries

## Limitations

This is an introductory prototype. It has no levels, persistent score, sound effects, or backend. The repository does not define automated tests.