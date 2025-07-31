let score = 0;

function makeChoice(choice) {
  const feedback = document.getElementById("feedback");
  if (choice === 'bike') {
    score += 10;
    feedback.innerText = "✅ Great choice! You saved CO₂!";
  } else if (choice === 'car') {
    score -= 5;
    feedback.innerText = "⚠️ Try biking next time!";
  }
  document.getElementById("score").innerText = `Eco Points: ${score}`;
}