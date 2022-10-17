// This handles the logic for clicking the logout button

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  // Brings the user to the homepage after logout
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

// Event listener for the logout button
document.querySelector('#logout').addEventListener('click', logout);

