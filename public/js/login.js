const loginFormEl = document.querySelector('.login-form');
const signupFormEl = document.querySelector('.signup-form')

// Login form logic
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      loginFormEl.removeChild(loginFormEl.lastChild)
      let errMessage = document.createElement("p");
      errMessage.classList.add('uk-text-danger')
      errMessage.textContent = "Incorrect email or password. Please try again! ";
      loginFormEl.appendChild(errMessage);
    }
  }
};

// Signup form logic
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from signup form
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (email && password) {
    // Send a post request to the API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      signupFormEl.removeChild(signupFormEl.lastChild)
      let errMessage = document.createElement("p");
      errMessage.classList.add('uk-text-danger');
      errMessage.innerText = `Email must be a valid email\nPassword must be at least 8 characters`;
      signupFormEl.appendChild(errMessage);
    }
  }
};

// Event listener on login form submit
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

// Event listener on signup form submit
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
