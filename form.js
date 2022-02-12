const container = document.querySelector('.forms__container');
const pwShowHide = document.querySelectorAll('.showHidePw');
const pwFields = document.querySelectorAll('.password');
const signUP = document.querySelector('.signup-link');
const logIn = document.querySelector('.login-link');

// show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    pwFields.forEach(pwField => {
      if (pwField.type === 'password') {
        pwField.type = 'text';

        pwShowHide.forEach(icon => {
          icon.classList.replace('uil-eye-slash', 'uil-eye');
        });
      } else {
        pwField.type = 'password';

        pwShowHide.forEach(icon => {
          icon.classList.replace('uil-eye', 'uil-eye-slash');
        });
      }
    });
  });
});

// switch between signup and login form

signUP.addEventListener('click', () => {
  container.classList.add('active');
});

logIn.addEventListener('click', () => {
  container.classList.remove('active');
});
