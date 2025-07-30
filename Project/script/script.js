async function submitMood(event) {
  event.preventDefault(); // Prevents form from refreshing the page

  const text = document.getElementById("moodText").value;

  const res = await fetch('/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  // Show mood in the page instead of an alert
  const outputParagraph = document.querySelector(".output p");
  outputParagraph.textContent = "Detected Mood: " + data.mood;

  // Optional: clear the textarea
  document.getElementById("moodText").value = "";
}
