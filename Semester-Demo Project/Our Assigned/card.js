document.querySelectorAll('.heart-icon').forEach(heart => {
    heart.addEventListener('click', function () {

        const icon = this.querySelector('i');

        // For Heart Icon Toggle
        if (icon.classList.contains('far')) {
            icon.classList.replace('far', 'fas');
            icon.style.color = '#e74c3c';
        } else {
            icon.classList.replace('fas', 'far');
            icon.style.color = '#555';
        }
    });
});