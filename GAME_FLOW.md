# Mystery Detective Game - Interactive Story

## Game Flow & Story Structure

### Start Screen (Mystery Main Menu)

- **Title**: "MYSTERY Detective - A branching detective story"
- **Buttons**:
  - LEVEL 1 → Goes to Opening Screen
  - INSTRUCTIONS → Goes to Instructions Screen

---

### Level 1: Opening Screen

**Question**: "You have been selected to be a detective on a special case inside a home. Do you accept?"

- **YES** → Proceed to Clue One
- **NO** → Return to Start Screen

---

### Clue One: The Key Decision

**Scenario**: "You enter the living room. On the table, you see a golden key. Do you grab it just in case, or leave it?"

- **GRAB IT** → Sets `gameState.tookKey = true` → Proceeds to Clue Two
- **LEAVE IT** → Sets `gameState.tookKey = false` → Proceeds to Clue Two

---

### Clue Two: The Branching Path

**Question**: "You need to find the victim's diary to determine the suspects. Which room should you search?"

- **LIBRARY** → Dead end path → Takes player to "Library Search" screen (game.js)
  - Shows message that the diary isn't there
  - Button: "RESTART LEVEL 1" → Returns to Opening Screen
- **LIVING ROOM** → Correct path → Takes player to Level 2
  - Found the diary!
  - Story progresses to victory

---

### Level 2: Completion Screen

**Victory Message**: "Investigation Complete! You've solved the mystery!"

- **Button**: RETURN TO MENU → Back to Start Screen

---

## Decision Tree Summary

```
START SCREEN
    ├── LEVEL 1
    │   └── OPENING SCREEN
    │       ├── YES
    │       │   └── CLUE ONE
    │       │       ├── GRAB KEY (tookKey=true)
    │       │       │   └── CLUE TWO
    │       │       │       ├── LIBRARY → GAME SCREEN (restart option)
    │       │       │       └── LIVING ROOM → LEVEL 2 ✓
    │       │       └── LEAVE KEY (tookKey=false)
    │       │           └── CLUE TWO
    │       │               ├── LIBRARY → GAME SCREEN (restart option)
    │       │               └── LIVING ROOM → LEVEL 2 ✓
    │       └── NO → back to START
    └── INSTRUCTIONS
```

---

## Game States

The game uses the following states:

- `"start"` - Main menu
- `"instr"` - Instructions screen
- `"opening"` - First decision (accept case)
- `"clueOne"` - Second decision (grab key or leave)
- `"clueTwo"` - Third decision (library or living room)
- `"game"` - Wrong path result (library search fail)
- `"level2"` - Correct path result (victory)
- `"win"` - Legacy win screen (available)
- `"lose"` - Legacy lose screen (available)

---

## Game State Variables

```javascript
gameState = {
  tookKey: false, // Did player grab the key in Clue One?
  foundDiary: false, // Did player find the diary in Clue Two?
};
```

These are reset whenever starting a new game from the main menu.

---

## Technical Implementation

### Files Modified:

- **main.js** - Added new game states and routing
- **start.js** - Changed to Mystery Detective main menu with LEVEL 1 button
- **game.js** - Converted to "Library Search" failure screen with restart option

### New Files Created:

- **opening.js** - Opening/acceptance screen
- **clueOne.js** - First decision screen (grab key)
- **clueTwo.js** - Second decision screen (library vs living room)
- **level2.js** - Victory/completion screen

### Updated Files:

- **index.html** - Added new script references in correct order

---

## How to Play

1. Start the game - see the Mystery Detective title screen
2. Click "LEVEL 1" to begin
3. Decide whether to accept the detective case (YES/NO)
4. If YES, find the key and decide whether to grab it
5. Search for the diary - choose Library or Living Room
6. Library = restart | Living Room = advance to Level 2
7. Reach Level 2 to complete the investigation!

---

## Color Scheme

- **Main Menu**: Dark purple background (#3C2864)
- **Opening Screen**: Dark purple (#643C8C)
- **Clue One**: Blue-purple (#506C8C)
- **Clue Two**: Purple (#785C8C)
- **Game Screen (Library Fail)**: Dark red-purple (#783C50)
- **Level 2**: Dark teal (#327864)

Buttons use warm orange (#FFB464) on hover with teal base (#64C8C8)
