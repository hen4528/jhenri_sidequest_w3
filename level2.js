// Level 2: Victory/Progression screen
// Shows when player successfully completes the story

function drawLevel2() {
  background(50, 120, 100); // dark teal background

  // ---- Title ----
  fill(100, 255, 200);
  textSize(72);
  textAlign(CENTER, CENTER);
  text("LEVEL 2", width / 2, 300);

  // ---- Message ----
  fill(200, 255, 220);
  textSize(28);
  textAlign(CENTER, CENTER);
  text("Investigation Complete!", width / 2, 450);

  textSize(20);
  text("You've solved the mystery!", width / 2, 500);

  // ---- Return Button ----
  const returnBtn = {
    x: width / 2,
    y: 650,
    w: 240,
    h: 80,
    label: "RETURN TO MENU",
  };

  drawLevelButton(returnBtn);

  // ---- Cursor feedback ----
  cursor(isHover(returnBtn) ? HAND : ARROW);
}

// Mouse input for level2 screen
function level2MousePressed() {
  const returnBtn = { x: width / 2, y: 650, w: 240, h: 80 };

  if (isHover(returnBtn)) {
    currentScreen = "start";
  }
}

// Helper: drawLevelButton()
function drawLevelButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 150, 80);
  } else {
    fill(100, 220, 180, 200);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(50, 120, 100);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(255, 255, 255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
