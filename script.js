const body = document.body;
const moodButtons = document.querySelectorAll('.mood-btn');
const moodDisplay = document.getElementById('mood-display');

const moods = {
  calm: {
    id: 'calm',
    quote: 'Peace comes from within. Do not seek it without.',
  },
  energetic: {
    id: 'energetic',
    quote: 'Push yourself, because no one else is going to do it for you.',
  },
  focused: {
    id: 'focused',
    quote: 'Focus on being productive instead of busy.',
  }
};

function setMood(moodKey) {
  const mood = moods[moodKey];
  if (!mood) return;

  // Change background
  body.className = '';
  body.setAttribute('id', mood.id);

  // Update quote
  moodDisplay.innerHTML = `<div id="display-quote">${mood.quote}</div>`;
  moodDisplay.classList.remove('fade-in');
  void moodDisplay.offsetWidth; // force reflow for animation
  moodDisplay.classList.add('fade-in');

  // Save to localStorage
  localStorage.setItem('selectedMood', moodKey);
}

// Event listeners
moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    setMood(mood);
  });
});

// Load saved mood on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedMood = localStorage.getItem('selectedMood');
  if (savedMood) {
    setMood(savedMood);
  }
});
