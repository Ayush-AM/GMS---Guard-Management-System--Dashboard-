const authForm = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const toggleLink = document.getElementById('toggle-link');

let isLogin = true;

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isLogin) {
        window.location.href = "http://127.0.0.1:3000/GMS---Guard-Management-System--Dashboard-/Dashboard"; // Replace with your main website link
    } else {
        alert('Sign-up successful! Redirecting to login...');
        toggleForm();
    }
});

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm();
});

function toggleForm() {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
    toggleLink.textContent = isLogin
        ? "Don't have an account? Sign up"
        : "Already have an account? Login";
}