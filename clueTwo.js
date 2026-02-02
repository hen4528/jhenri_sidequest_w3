// Clue Two: Library vs Living Room decision
// Find the victim's diary to identify suspects

function drawClueTwo() {
  background(120, 80, 140); // purple background

  // ---- Title ----
  fill(255, 220, 100);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("CLUE TWO", width / 2, 80);

  // ---- Story text ----
  fill(220, 220, 200);
  textSize(20);
  textAlign(CENTER, TOP);
  const storyText =
    "You need to find the victim's diary\nto determine the suspects.\n\nWhich room should you search?";
  text(storyText, width / 2, 180, 600);

  // ---- Library/Living Room Buttons ----
  const libraryBtn = {
    x: 250,
    y: 500,
    w: 200,
    h: 80,
    label: "LIBRARY",
  };

  const livingRoomBtn = {
    x: 550,
    y: 500,
    w: 200,
    h: 80,
    label: "LIVING ROOM",
  };

  drawDecisionButton(libraryBtn);
  drawDecisionButton(livingRoomBtn);

  // ---- Cursor feedback ----
  const over = isHover(libraryBtn) || isHover(livingRoomBtn);
  cursor(over ? HAND : ARROW);
}

// Mouse input for clue two screen
function clueTwoMousePressed() {
  const libraryBtn = { x: 250, y: 500, w: 200, h: 80 };
  const livingRoomBtn = { x: 550, y: 500, w: 200, h: 80 };

  if (isHover(libraryBtn)) {
    // Library path: Clue not found
    // Redirect to game screen with restart option
    gameState.foundDiary = false;
    currentScreen = "game"; // Go back to main game for restart
  } else if (isHover(livingRoomBtn)) {
    // Living room path: Key was found (if player took it)
    // This leads to Level 2
    gameState.foundDiary = true;
    currentScreen = "level2";
  }
}

// Helper: drawDecisionButton() - button for choice screens
function drawDecisionButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 180, 100, 220); // warm orange on hover
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 150, 80);
  } else {
    fill(100, 200, 200, 180); // teal base
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(50, 100, 100);
  }

  rect(x, y, w, h, 12);
  drawingContext.shadowBlur = 0;

  fill(255, 255, 255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
