class Patient {
  constructor(name, age) {
    this.id = Date.now();
    this.name = name;
    this.age = age;
  }
}
class Doctor {
  constructor(name, specialty) {
    this.id = Date.now();
    this.name = name;
    this.specialty = specialty;
  }
}
class Appointment {
  constructor(patient, doctor, date) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
  }
}
const patients = [];
const doctors = [];
const appointments = [];

const addPat = () => {
  const name = pat.value;
  const age = egg.value;
  const patient = new Patient(name, age);
  patients.push(patient);
  updatePatients();
  pat.value = "";
  egg.value = "";
};
const addDoc = () => {
  const name = dame.value;
  const specialty = dsame.value;
  const doctor = new Doctor(name, specialty);
  doctors.push(doctor);
  updateDoctors();
  dame.value = "";
  dsame.value = "";
};
const book = () => {
  const pId = setpat.value;
  const dId= setDoc.value;
  const date = apptDitto
  const appointment = new Appointment(patient, doctor, date)
  appointments.push(appointment);
  updateAppointments();
  dame.value = "";
  dsame.value = "";
};


const updatePatients = () => {
  const list = patlist;
  const select = setpat;
  list.innerHTML = " ";
  select.innerHTML = " ";
  patients.forEach((p) => {
    list.innerHTML += `<li class="text-left">Name:${p.name}<br>  Age:${p.age}</li><hr>`;
    select.innerHTML += `<option value="${p.id}" ${p.name}</option>`;
  });
};
const updateDoctors = () => {
  const list = doclist;
  const select = setDoc;
  list.innerHTML = " ";
  select.innerHTML = " ";
  doctors.forEach((d) => {
    list.innerHTML += `<li  class="text-left">Name:${d.name}<br>   Specialty:${d.specialty}</li>`;
    select.innerHTML += `<option value="${d.id}" ${d.name}</option>`;
  });
};
const updateAppointments = () => {
  const list= appointment;
  const select = setDoc;
  list.innerHTML = " ";
  select.innerHTML = " ";
  doctors.forEach((d) => {
    list.innerHTML += `<li  class="text-left">Name:${d.name}<br>   Specialty:${d.specialty}</li>`;
    select.innerHTML += `<option value="${d.id}" ${d.name}</option>`;
  });
};
