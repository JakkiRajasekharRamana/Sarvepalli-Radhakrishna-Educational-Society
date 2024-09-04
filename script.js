 // Signup form handling
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const rollNo = document.getElementById('rollNo').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    localStorage.setItem('rollNo', rollNo);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now login.');
    window.location.href = 'login.html';
});

// Login form handling
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const rollNo = document.getElementById('rollNo').value;
    const password = document.getElementById('password').value;

    // Get user data from localStorage
    const storedRollNo = localStorage.getItem('rollNo');
    const storedPassword = localStorage.getItem('password');

    const loginMessage = document.getElementById('loginMessage');

    if (rollNo === storedRollNo && password === storedPassword) {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        setTimeout(() => {
            // Redirect to 'school (1).html' in the same directory
            window.location.href = 'school (1).html';
        }, 2000); // Delay the redirect to allow users to see the success message
    } else {
        loginMessage.textContent = 'Invalid Roll No or Password. Please try again.';
        loginMessage.style.color = 'red';
    }
});

