const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');
const diceBtn = document.getElementById('dice-btn');

// Function to fetch advice from the API
async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
        const data = await response.json();
        adviceText.textContent = `"${data.slip.advice}"`;
        adviceId.textContent = `Advice #${data.slip.id}`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = "Sorry, we couldn't fetch advice at this time.";
        adviceId.textContent = '';
    }
}

// Event listener for the dice button
diceBtn.addEventListener('click', fetchAdvice);

