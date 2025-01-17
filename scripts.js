// Handling dropdown toggle
document.querySelectorAll('.dropdown-header').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitted';
    document.getElementById('applicationForm').target = 'hiddenFrame';
    document.getElementById('applicationForm').submit();
    triggerConfetti();
}

// Confetti effect on submit
function triggerConfetti() {
    confetti({
        particleCount: 200,
        spread: 140,
        origin: { x: 0.5, y: 0.7 }
    });
}

// Attach submitForm function to form submission
document.getElementById('applicationForm').addEventListener('submit', submitForm);
