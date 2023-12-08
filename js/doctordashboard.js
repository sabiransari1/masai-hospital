const cont = document.getElementById('cont');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

window.addEventListener('load', () => {
  getappointments();
});

const token = JSON.parse(localStorage.getItem('token')) || null;

if (!token) {
  location.replace('./login.html');
}

const getappointments = async () => {
  try {
    let res = await fetch(`${url}/appointment/getappointments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    let data = await res.json();

    getData(data);
  } catch (error) {
    console.log(error);
  }
};

const getData = (data) => {
  cont.innerHTML = null;

  data?.forEach((item) => {
    cont.append(
      getCard(
        item._id,
        item.image,
        item.name,
        item.specialization,
        item.experience,
        item.location,
        item.date,
        item.slots,
        item.fee
      )
    );
  });
};

const getCard = (
  id,
  image,
  name,
  specialization,
  experience,
  location,
  date,
  slots,
  fee
) => {
  let div = document.createElement('div');
  div.setAttribute('class', 'div');

  let imgx = document.createElement('img');
  imgx.setAttribute('src', image);

  let namex = document.createElement('h3');
  namex.innerText = name;

  let specializationx = document.createElement('p');
  specializationx.innerText = specialization;

  let experiencex = document.createElement('p');
  experiencex.innerText = experience;

  let locationx = document.createElement('p');
  locationx.innerText = location;

  let datex = document.createElement('p');
  datex.innerText = date;

  let slotsx = document.createElement('p');
  slotsx.innerText = slots;

  let feex = document.createElement('p');
  feex.innerText = fee;

  let editx = document.createElement('button');
  editx.innerText = 'Edit';

  let deletex = document.createElement('button');
  deletex.innerText = 'Delete';

  div.append(
    imgx,
    namex,
    specializationx,
    experiencex,
    locationx,
    datex,
    slotsx,
    feex,
    editx,
    deletex
  );

  return div;
};
