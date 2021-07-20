let loginTab = document.getElementById('loginTab');
let registerTab = document.getElementById('registerTab');
let loginBox = document.getElementById('login');
let registerBox = document.getElementById('register');
let forgetBox = document.getElementById('forgot');

function loginTab() {
  event.preventDefault();

  loginBox.style.visibility = 'visible';
  registerBox.style.visibility = 'hidden';

  forgetBox.style.visibility = 'hidden';

  loginTab.style.backgroundColor = 'rgb(12, 132, 189)';
  registerTab.style.backgroundColor = 'rgba(11, 177, 224, 0.82)';
}

function registerTab() {
  event.preventDefault();

  registerBox.style.visibility = 'visible';
  loginBox.style.visibility = 'hidden';

  forgetBox.style.visibility = 'hidden';

  registerTab.style.backgroundColor = 'rgb(12, 132, 189)';
  loginTab.style.backgroundColor = 'rgba(11, 177, 224, 0.82)';
}
