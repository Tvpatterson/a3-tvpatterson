const loginButton = document.getElementById('submit');

const login = function() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let body = JSON.stringify({username:username.value, password:password.value});
  fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: body
  })
  .then(function(response) {
    window.location.href = response.url;
  })
  .catch(err => {
    console.log(err);
  });
  return false;
}

function updateButton() {
  if(document.getElementById('username').value === "" ||
    document.getElementById('password').value === "") {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
  }
}

window.onload = function() {
  loginButton.onclick = login;
}