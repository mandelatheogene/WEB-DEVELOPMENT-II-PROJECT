
document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingSection = document.getElementById('greetingSection');
    greetingSection.textContent = `Hello, ${name}! Welcome to Company X.`;
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Feedback submitted successfully!');
});
