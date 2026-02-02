// Opening Screen: Detective acceptance choice
// drawOpening() shows the first major decision

function drawOpening() {
  background(100, 60, 140); // dark purple background

  // ---- Title ----
  fill(255, 220, 100);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("DETECTIVE CASE", width / 2, 100);

  // ---- Story text ----
  fill(220, 220, 200);
  textSize(20);
  textAlign(CENTER, TOP);
  const storyText =
    "You have been selected to be a detective\non a special case inside a home.\n\nDo you accept?";
  text(storyText, width / 2, 200, 600);

  // ---- Yes/No Buttons ----
  const yesBtn = {
    x: 250,
    y: 500,
    w: 200,
    h: 80,
    label: "YES",
  };

  const noBtn = {
    x: 550,
    y: 500,
    w: 200,
    h: 80,
    label: "NO",
  };

  drawDecisionButton(yesBtn);
  drawDecisionButton(noBtn);

  // ---- Cursor feedback ----
  const over = isHover(yesBtn) || isHover(noBtn);
  cursor(over ? HAND : ARROW);
}

// Mouse input for opening screen
function openingMousePressed() {
  const yesBtn = { x: 250, y: 500, w: 200, h: 80 };
  const noBtn = { x: 550, y: 500, w: 200, h: 80 };

  if (isHover(yesBtn)) {
    // Yes: Move to first clue screen
    currentScreen = "clueOne";
  } else if (isHover(noBtn)) {
    // No: Return to home/start screen
    currentScreen = "start";
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
