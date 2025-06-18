document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signinForm');
    const emailInput = document.getElementById('signin-email');
    const passwordInput = document.getElementById('signin-password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.getElementById('toggle-password');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModal = document.getElementById('close-modal');
    const googleSignin = document.getElementById('google-signin');

    // Show/Hide password
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'Show';
        }
    });

    // Forgot password modal
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Google sign-in demo
    googleSignin.addEventListener('click', function() {
        alert('Google sign-in is a demo only.');
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        let valid = true;
        emailError.textContent = '';
        passwordError.textContent = '';

        if (!emailInput.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email.';
            valid = false;
        }
        if (!passwordInput.value || passwordInput.value.length < 4) {
            passwordError.textContent = 'Your password must contain between 4 and 60 characters.';
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        alert('Signed in successfully!');
        form.reset();
        togglePassword.textContent = 'Show';
        passwordInput.type = 'password';
    });
}); 