const cont = document.getElementById('cont');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

window.addEventListener('load', () => {
  getappointments();
});

const getappointments = async () => {
  try {
    let res = await fetch(`${url}/appointment/getappointments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
