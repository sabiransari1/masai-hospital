const signup = document.getElementById('signup');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

signup.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = signup.email.value;
  let password = signup.password.value;
  let confirmpassword = signup.confirmpassword.value;

  if (email === '' || password === '' || confirmpassword === '') {
    alert('Please Fill Empty Section');
    return;
  }

  let signupUser = {
    email,
    password,
  };

  if (email != '' || password != '' || confirmpassword != '') {
    signupFunc(signupUser);
  }
});

// signupFunc
const signupFunc = async (signupUser) => {
  try {
    let user = JSON.stringify(signupUser);

    let res = await fetch(`${url}/user/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: user,
    });

    let data = await res.json();

    if (res.status == '200') {
      alert('Signup Successful');
    } else {
      alert('Something went wrong, Please try again...');
    }
  } catch (error) {
    console.log(error);
  }
};
