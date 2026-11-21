# Quick Bunny — Level 1

A keyboard-controlled obstacle course built with p5.js and p5.play. Move the blue bunny across the playfield to reach the orange food while avoiding two horizontally moving obstacles.

## How to play

- Use the arrow keys to move.
- Reach the food near the upper-right corner to display a win message.
- Touching either obstacle returns the bunny to its lower-left starting point.

The game uses a 600 × 600 canvas. Obstacles bounce at the side edges, and edge sprites keep the bunny within the playfield.

## Code map

index.html loads the game libraries and sketch.js. sketch.js creates the player, target, and obstacles, handles keyboard input and collision checks, and draws each frame. CSS/ and lib/ contain the stylesheet and browser libraries.

## Run

Open index.html in a browser with the repository folders intact. No build step or package install is required. Use a local static server if your browser does not load local scripts from a file URL.

## Technology

HTML, CSS, JavaScript, p5.js, and p5.play. Game state exists only while the page is open; there is no backend or saved progress.