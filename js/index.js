const signup = document.getElementById('signup');
const url = '';

signup.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = signup.email.value;
  let password = signup.password.value;
  let confirmpassword = signup.confirmpassword.value;

  console.log(email, password, confirmpassword);

  let signupUser = {
    email,
    password,
    confirmpassword,
  };

  if (email === '' || password === '' || confirmpassword === '') {
    alert('Please Fill Empty Section');
  }

  if (email != '' || password != '' || confirmpassword != '') {
    signupFunc(signupUser);
  }
});

// signupFunc
const signupFunc = async (signupUser) => {
  let user = JSON.stringify(signupUser);

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
