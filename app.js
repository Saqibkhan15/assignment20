document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(signupForm);
        var name = formData.get('name');
        var email = formData.get('email');
        var password = formData.get('password');

        alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.getElementById('readMore');
    var shortContent = document.getElementById('short');
    var fullContent = document.getElementById('full');

    readMoreBtn.addEventListener('click', function() {
        shortContent.style.display = 'none';
        fullContent.style.display = 'block';
    });
});
