const login = document.getElementById('login');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

login.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = login.email.value;
  let password = login.password.value;

  if (email === '' || password === '') {
    alert('Please Fill Empty Section');
    return;
  }

  let loginUser = {
    email,
    password,
  };

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

    let data = await res.json();
    
    if (res.status == '200') {
      alert('Login Successful');
      localStorage.setItem('token', JSON.stringify('sabir'));
    } else {
      alert('Invalid Credentials');
    }
  } catch (error) {
    console.log(error);
  }
};
