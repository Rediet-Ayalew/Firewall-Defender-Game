# Firewall-Defender-Game
 A fast-paced click-and-react game that is designed to test your skills of detecting spam and malicious emails, messages or phone call.

## How to Play

- You have 5 seconds per round to classify images as legitimate ("Click") or scams ("Trick")
- 5 rounds total
- Scoring:
  - Correct answer: +5 points
  - Wrong answer: -2 points
- Final feedback based on score (below 10, 10-18, or 18-25)

## Scoring 

- **Click on legitimate items**: +5 points
- **Click on scams**: -2 points
- **Mark scams as "Trick"**: +5 points
- **Mark legitimate as "Trick"**: -2 point

## Files

- `game.html` - Main game file
- `scripts.js` - Game logic
- `style.css` - Styling
- Image files: Amazon.png, FuneralCall.png, spamcall.webp, Scam.jpg, Paypal.png
- Audio: game_music.mp3

## Animation

- Animation source: https://alvarotrigo.com/blog/animated-backgrounds-css/

## Technologies

- HTML5, CSS3, JavaScript

## Installation

Download all files and open `game.html` in a browser.

## Something New Learned
- how to fully integrat Html and JS
- how to Audio
- how to reset rounds
/let roundActive=false/
- practiced how to deal with arrays
- how to integrate functions

## Future Improvements

- Add more images
- Difficulty levels
- more Sound effects

 ## AI-Use
- Used Claude.ai for the logic flow and Chatgpt to reduce redundancy of the code.
- Claude.ai aided me on how many functions I needed. Most codes where from stackoverflow or W3schools.
- startRound(); // this line was added by Claude.ai to begin each round.
- Clade.ai and ChatGpt improved "document.getElementById("timerDisplay").innerText = `Timer:00:${timeLeft<=0?"00":timeLeft<10?"0"+ timeLeft : timeLeft}`;"
- let roundActive=false; // ChatGpt's code to better control the endgame

