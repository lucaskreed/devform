// Function to handle the dropdown toggle behavior
document.querySelectorAll('.dropdown-header').forEach(button => {
  button.addEventListener('click', function() {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});

// Function to update the Preferred Role dropdown based on team selection
document.getElementById('teamSelect').addEventListener('change', function() {
  const preferredRoleSelect = document.getElementById('preferredRole');
  preferredRoleSelect.innerHTML = ''; // Clear previous options

  const team = this.value;
  let roles = [];

  if (team === 'community') {
    roles = ['Community Manager', 'Community Events Lead', 'Marketing Specialist'];
  } else if (team === 'game-dev') {
    roles = ['Game Development Lead', 'Scripter', 'Builder/Modeler'];
  } else if (team === 'creative') {
    roles = ['Creative Team Lead', 'UI/UX Designer', 'Graphic Designer'];
  }

  roles.forEach(role => {
    const option = document.createElement('option');
    option.value = role.toLowerCase().replace(/ /g, '-');
    option.textContent = role;
    preferredRoleSelect.appendChild(option);
  });
});

// Initialize Preferred Role dropdown based on the default team
document.getElementById('teamSelect').dispatchEvent(new Event('change'));

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();
  const submitButton = document.getElementById('submitBtn');
  submitButton.disabled = true;
  submitButton.textContent = 'Submitted';
  document.getElementById('applicationForm').target = 'hiddenFrame';
  document.getElementById('applicationForm').submit();
  triggerConfetti();
}

// Function to trigger confetti effect (if needed)
function triggerConfetti() {
  // You can add your confetti code here if desired
  console.log("Confetti triggered!");
}
