document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const googleLoginBtn = document.getElementById('googleLogin');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      
      console.log('Username:', username);
      console.log('Password:', password);
  
      
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    });
  
    googleLoginBtn.addEventListener('click', function() {
      
      console.log('Login com Google clicado');
    });
  });