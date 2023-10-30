const login = document.getElementById('login');

login.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = login.email.value;
  let password = login.password.value;

  console.log(email, password);

  let loginUser = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('Please Fill Empty Section');
  }

  if (email != '' || password != '' ) {
    loginFunc(loginUser);
  }
});

// loginFunc
const loginFunc = async (loginUser) => {
  let user = JSON.stringify(loginUser);

  try {
    let res = fetch(`${url}`, user, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
