// Function to update Preferred Role options based on selected team
function updateRoleOptions() {
  const teamSelect = document.getElementById('teamSelect');
  const preferredRoleSelect = document.getElementById('preferredRole');
  
  // Clear any previous options
  preferredRoleSelect.innerHTML = '';

  const team = teamSelect.value;

  // Define available roles for each team
  let roles = [];

  if (team === 'community') {
    roles = ['Community Manager', 'Community Events Lead', 'Marketing Specialist'];
  } else if (team === 'game-dev') {
    roles = ['Game Development Lead', 'Scripter', 'Builder/Modeler'];
  } else if (team === 'creative') {
    roles = ['Creative Team Lead', 'UI/UX Designer', 'Graphic Designer'];
  }

  // Populate the Preferred Role dropdown with the appropriate roles
  roles.forEach(role => {
    const option = document.createElement('option');
    option.value = role.toLowerCase().replace(/ /g, '-');
    option.textContent = role;
    preferredRoleSelect.appendChild(option);
  });
}

// Initialize the Preferred Role dropdown when the page loads
document.addEventListener('DOMContentLoaded', updateRoleOptions);

// Handle form submission
function submitForm(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
  // Handle form submission logic here
}
