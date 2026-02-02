// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawStart() {
  // Background colour for the start screen
  background(60, 40, 100); // dark purple background

  // ---- Title text ----
  fill(255, 220, 100);
  textSize(56);
  textAlign(CENTER, CENTER);
  text("MYSTERY", width / 2, 150);

  textSize(48);
  text("Detective", width / 2, 220);

  // ---- Subtitle ----
  fill(200, 180, 220);
  textSize(20);
  text("A branching detective story", width / 2, 280);

  // ---- Level 1 Button ----
  const level1Btn = {
    x: width / 2,
    y: 400,
    w: 240,
    h: 80,
    label: "LEVEL 1",
  };

  const instrBtn = {
    x: width / 2,
    y: 520,
    w: 240,
    h: 80,
    label: "INSTRUCTIONS",
  };

  // Draw both buttons
  drawButton(level1Btn);
  drawButton(instrBtn);

  // ---- Cursor feedback ----
  const over = isHover(level1Btn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "start"
function startMousePressed() {
  const level1Btn = { x: width / 2, y: 400, w: 240, h: 80 };
  const instrBtn = { x: width / 2, y: 520, w: 240, h: 80 };

  // If LEVEL 1 is clicked, go to the opening screen
  if (isHover(level1Btn)) {
    // Reset game state when starting a new game
    gameState.tookKey = false;
    gameState.foundDiary = false;
    currentScreen = "opening";
  }
  // If INSTRUCTIONS is clicked, go to the instructions screen
  else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER starts level 1
// - I opens instructions
function startKeyPressed() {
  if (keyCode === ENTER) {
    gameState.tookKey = false;
    gameState.foundDiary = false;
    currentScreen = "opening";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
// This function draws a button and changes its appearance on hover.
// It does NOT decide what happens when you click the button.
// That logic lives in startMousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  // This is a common UI idea:
  // - normal state is calmer
  // - hover state is brighter + more “active”
  //
  // We also add a shadow using drawingContext (p5 lets you access the
  // underlying canvas context for effects like shadows).
  if (hover) {
    fill(255, 200, 150, 220); // warm coral on hover

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210); // soft cream base

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
