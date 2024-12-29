document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signupBtn = document.querySelector('.signupbtn');
    const signinBtn = document.querySelector('.signinbtn');
    const disableSignin = document.querySelector('.signinbtn');
    const disableSignup = document.querySelector('.signupbtn');
    
    // Handle Sign Up form
    signupBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if all fields are filled
        if (name && email && password) {
            // SweetAlert Success Message
            Swal.fire({
                icon: 'success',
                title: 'Sign Up Successful!',
                text: 'You have successfully signed up.',
                confirmButtonText: 'OK'
            });
            // Handle your sign-up logic here (e.g., store user data, redirect, etc.)
        } else {
            // SweetAlert Error Message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields.',
                confirmButtonText: 'Try Again'
            });
        }
    });

    // Handle Sign In form
    signinBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        // Check if both email and password are provided
        if (email && password) {
            // SweetAlert Success Message
            Swal.fire({
                icon: 'success',
                title: 'Sign In Successful!',
                text: 'You have successfully signed in.',
                confirmButtonText: 'OK'
            });
            // Handle sign-in logic (e.g., validate user credentials, redirect, etc.)
        } else {
            // SweetAlert Error Message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields.',
                confirmButtonText: 'Try Again'
            });
        }
    });

    // Switch to Sign Up form
    disableSignin.addEventListener('click', function () {
        signinForm.classList.add('disable');
        signupForm.classList.remove('disable');
    });

    // Switch to Sign In form
    disableSignup.addEventListener('click', function () {
        signupForm.classList.add('disable');
        signinForm.classList.remove('disable');
    });
});
