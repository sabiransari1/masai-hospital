const onboarddoctors = document.getElementById('onboarddoctors');
const url = `https://masai-hospital-server-sabiransari1.onrender.com`;

const token = JSON.parse(localStorage.getItem('token')) || null;

if (!token) {
  location.replace('./login.html');
}

onboarddoctors.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = onboarddoctors.name.value;
  let image = onboarddoctors.image.value;
  let specialization = onboarddoctors.specialization.value;
  let experience = onboarddoctors.experience.value;
  let location = onboarddoctors.location.value;
  let date = onboarddoctors.date.value;
  let slots = onboarddoctors.slots.value;
  let fee = onboarddoctors.fee.value;

  if (
    name == '' ||
    image == '' ||
    specialization == '' ||
    experience == '' ||
    location == '' ||
    date == '' ||
    slots == '' ||
    fee == ''
  ) {
    alert('Please Fill Empty Section');
    return;
  }

  let appointment = {
    name,
    image,
    specialization,
    experience,
    location,
    date,
    slots,
    fee,
  };

  if (
    name != '' ||
    image != '' ||
    specialization != '' ||
    experience != '' ||
    location != '' ||
    date != '' ||
    slots != '' ||
    fee != ''
  ) {
    appointmentFunc(appointment);
  }
});

const appointmentFunc = async (appointment) => {
  try {
    let appointmentx = JSON.stringify(appointment);

    let res = await fetch(`${url}/appointment/bookappointment`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: appointmentx,
    });

    let data = await res.json();

    if (res.status == '200') {
      alert('Appointment Booked Successfully');
    } else {
      alert('Something went wrong, Please try again...');
    }
  } catch (error) {
    console.log(error);
  }
};

// getappointments;
