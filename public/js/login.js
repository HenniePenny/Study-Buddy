const loginFormHandler = async (event) => {
  event.preventDefault();
console.log(loginFormHandler)
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
console.log(email)
console.log(password)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      // document.location.replace('/');
      console.log('login successful')
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-button')
  .addEventListener('onClick', loginFormHandler);

