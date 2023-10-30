const login = document.getElementById('login');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

login.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = login.email.value;
  let password = login.password.value;

  let loginUser = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('Please Fill Empty Section');
  }

  if (email != '' || password != '') {
    loginFunc(loginUser);
  }
});

// loginFunc
const loginFunc = async (loginUser) => {
  try {
    let user = JSON.stringify(loginUser);

    let res = await fetch(`${url}/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: user,
    });

    // console.log(res);
    if (res.status == '200') {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  } catch (error) {
    console.log(error);
  }
};