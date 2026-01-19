document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if(email) {
        // Success Pop-up
        Swal.fire({
            title: 'Success!',
            text: 'A reset link has been sent to ' + email,
            icon: 'success',
            confirmButtonColor: '#a67c52', // Aapki theme ka brown color
            background: 'rgba(255, 255, 255, 0.9)',
            backdrop: `rgba(0,0,0,0.4)`
        });
    } else {
        // Error Pop-up
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonColor: '#a67c52'
        });
    }
});