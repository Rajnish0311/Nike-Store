document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.querySelector('.signup');
    const signinButton = document.querySelector('.signin');
    const nameField = document.querySelector('.namefield');
    const title = document.querySelector('.title');
    const underline = document.querySelector('.underline');
    const text = document.querySelector('.text');

    signinButton.addEventListener('click', function() {
        nameField.style.maxHeight = '0';
        title.textContent = 'Sign In';
        text.innerHTML = 'Forgot Password';
        signupButton.classList.add('disable');
        signinButton.classList.remove('disable');
        underline.style.transform = 'translateX(35px)';
    });

    signupButton.addEventListener('click', function() {
        nameField.style.maxHeight = '60px';
        title.textContent = 'Sign Up';
        text.innerHTML = 'Password Suggestions';
        signupButton.classList.remove('disable');
        signinButton.classList.add('disable');
        underline.style.transform = 'translateX(0)';
    });
});
