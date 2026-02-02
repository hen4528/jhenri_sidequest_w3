// Clue One: Key decision
// Player finds a key on the table - grab it or leave it?

function drawClueOne() {
  background(80, 100, 140); // blue-purple background

  // ---- Title ----
  fill(255, 220, 100);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("CLUE ONE", width / 2, 80);

  // ---- Story text ----
  fill(220, 220, 200);
  textSize(20);
  textAlign(CENTER, TOP);
  const storyText =
    "You enter the living room.\nOn the table, you see a golden key.\n\nDo you grab it just in case,\nor leave it?";
  text(storyText, width / 2, 180, 600);

  // ---- Yes/No Buttons (Grab/Leave) ----
  const grabBtn = {
    x: 250,
    y: 500,
    w: 200,
    h: 80,
    label: "GRAB IT",
  };

  const leaveBtn = {
    x: 550,
    y: 500,
    w: 200,
    h: 80,
    label: "LEAVE IT",
  };

  drawDecisionButton(grabBtn);
  drawDecisionButton(leaveBtn);

  // ---- Cursor feedback ----
  const over = isHover(grabBtn) || isHover(leaveBtn);
  cursor(over ? HAND : ARROW);
}

// Mouse input for clue one screen
function clueOneMousePressed() {
  const grabBtn = { x: 250, y: 500, w: 200, h: 80 };
  const leaveBtn = { x: 550, y: 500, w: 200, h: 80 };

  if (isHover(grabBtn)) {
    // Yes: Player grabs the key
    gameState.tookKey = true;
    currentScreen = "clueTwo";
  } else if (isHover(leaveBtn)) {
    // No: Player leaves the key
    gameState.tookKey = false;
    currentScreen = "clueTwo";
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
