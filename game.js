// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// Main draw function for this screen
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  background(120, 60, 80); // dark red-purple background

  // ---- Title ----
  fill(255, 180, 100);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("LIBRARY SEARCH", width / 2, 100);

  // ---- Story text ----
  fill(220, 220, 200);
  textSize(22);
  textAlign(CENTER, TOP);
  const storyText =
    "You search the library carefully.\n\nYou find old books and dusty shelves,\nbut no diary...\n\nThe investigation hits a dead end!\nThe suspect's diary was in the living room.";
  text(storyText, width / 2, 220, 560);

  // ---- Restart Button ----
  const restartBtn = {
    x: width / 2,
    y: 650,
    w: 240,
    h: 80,
    label: "RESTART LEVEL 1",
  };

  drawGameButton(restartBtn);

  // ---- Cursor feedback ----
  cursor(isHover(restartBtn) ? HAND : ARROW);
}

// Button drawing helper
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  fill(
    hover
      ? color(255, 150, 100, 220) // warm on hover
      : color(180, 100, 120, 200), // darker base
  );

  rect(x, y, w, h, 14);

  fill(255, 255, 255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// Mouse input for this screen
function gameMousePressed() {
  const restartBtn = { x: width / 2, y: 650, w: 240, h: 80 };

  if (isHover(restartBtn)) {
    // Reset game state and go back to opening
    gameState.tookKey = false;
    gameState.foundDiary = false;
    currentScreen = "opening";
  }
}
