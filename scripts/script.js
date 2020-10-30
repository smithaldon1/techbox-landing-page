const signupForm = document.getElementById('signup__block');
const loginForm = document.getElementById('login__block');
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', function() {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

signupBtn.addEventListener('click', function() {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});
