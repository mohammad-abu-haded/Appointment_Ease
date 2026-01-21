const services = {
  "Medical Consultation": "Ahmed Hassan",
  "Personal Training": "Robert Smith",
  "Academic Tutoring": "Emily Johnson",
  "Hair Styling & Grooming": "Michael Brown",
  "Beauty & Hair Treatments": "Sophia Williams",
  "Yoga & Wellness Classes": "Daniel Lee",
};
const myAppointments = document.getElementById("my-appointments");
const getInitials = (fullName) => {
  const parts = fullName.trim().split(" ");

  const first = parts[0]?.charAt(0).toUpperCase() || "";
  const second = parts[1]?.charAt(0).toUpperCase() || "";

  return first + second;
};

const deleteAppointment = (index) => {
  const storedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];
  storedAppointments.splice(index, 1);
  localStorage.setItem("appointments", JSON.stringify(storedAppointments));
  renderAllAppointments();
};

const reverseDate = (formattedDate) => {
  const date = new Date(formattedDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const reverseTime = (formattedTime) => {
  const [time, modifier] = formattedTime.split(" ");
  let [hours, minutes] = time.split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  }

  if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}`;
};

const editAppointment = (index) => {
  const storedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];
  const allCards = document.querySelectorAll(".appointment");
  const card = allCards[index];
  card.innerHTML = `
          <div class="profile-info">
            <div class="avatar">${getInitials(services[`${storedAppointments[index]["serviceType"]}`])}</div>
            <div class="service-info">
              <p class="name">${services[`${storedAppointments[index]["serviceType"]}`]}</p>
              <p class="type">${storedAppointments[index]["serviceType"]}</p>
            </div>
          </div>
          <hr />
          <form onsubmit="submitForm(event, ${index})">
            <div class="schedule">
              <div class="date">
                <img src="./imgs/calendar-regular-full.svg" />
                <div class="service-date">
                  <label for="date">Date</label>
                  <input type="date" id="date" value="${reverseDate(storedAppointments[index]['date'])}" required />
                </div>
              </div>
              <div class="time">
                <img src="./imgs/clock-regular-full.svg" />
                <div class="service-time">
                  <label for="time">Time</label>
                  <input type="time" id="time" value="${reverseTime(storedAppointments[index]['time'])}" required />
                </div>
              </div>
            </div>
            <div class="status">Pending</div>
            <hr />
            <div class="edit-buttons">
            <button class="cancel-edit" type="button" onclick="cancelEdit()">
              <img src="./imgs/xmark-solid-full.svg" />
            </button>
            <button class="apply-changes" type="submit">
              <img src="./imgs/apply_changes.svg" />
            </button>
            </div>
          </form>
  `;
};

const renderAppointments = (appointment, index) => {
  myAppointments.innerHTML += `
  <div class="appointment">
      <div class="profile-info">
        <div class="avatar">${getInitials(services[`${appointment["serviceType"]}`])}</div>
        <div class="service-info">
          <p class="name">${services[`${appointment["serviceType"]}`]}</p>
          <p class="type">${appointment["serviceType"]}</p>
        </div>
      </div>
      <hr />
      <div class="schedule">
        <div class="date">
          <img src="./imgs/calendar-regular-full.svg" />
          <p>${appointment["date"]}</p>
        </div>
        <div class="time">
          <img src="./imgs/clock-regular-full.svg" />
          <p>${appointment["time"]}</p>
        </div>
      </div>
      <div class="status">Pending</div>
      <hr />
      <div class="action-buttons">
        <div class="reschedule" onclick="editAppointment(${index})">
          <img src="./imgs/edit.svg" />
          <p style="color: #1f8cf9">Reschedule</p>
        </div>
        <div class="cancel" onclick="deleteAppointment(${index})">
          <img src="./imgs/cancel.svg" />
          <p style="color: #dd3c3c">Cancel</p>
        </div>
      </div>
    </div>`;
};

const renderAllAppointments = () => {
  const storedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];
  myAppointments.innerHTML = "";
  storedAppointments.forEach(renderAppointments);
};
renderAllAppointments();
/*
<div class="appointment">
            <div class="profile-info">

              <div class="avatar">
                AR
              </div>
              <div class="service-info">
                <p class="name">Ahmed Hassan</p>
                <p class="type">Medical Consultation</p>
              </div>
            </div>
              <hr>
              
              <div class="schedule">
                <div class="date">
                  <img src="./imgs/calendar-regular-full.svg">
                  <p>July 15, 2024</p>
                </div>
                <div class="time">
                  <img src="./imgs/clock-regular-full.svg">
                  <p>10:00 AM</p>
                </div>
              </div>
              <div class="status">Pending</div>
              <hr>
              <div class="action-buttons">
                <div class="reschedule">
                  <img src="./imgs/edit.svg">
                  <p style="color: #1F8CF9;">Reschedule</p>
                </div>
                <div class="cancel">
                  <img src="./imgs/cancel.svg">
                  <p style="color: #DD3C3C;">Cancel</p>
                </div>
              </div>
            </div>
*/

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const formatTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(":");
  const date = new Date();
  date.setHours(hours, minutes);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const submitForm = (event, index) => {
  event.preventDefault();
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  date = formatDate(date);
  time = formatTime(time);
  const storedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];
  storedAppointments[index]["date"] = date;
  storedAppointments[index]["time"] = time;
  localStorage.setItem("appointments", JSON.stringify(storedAppointments));
  renderAllAppointments();
};

const cancelEdit = () => {
  renderAllAppointments();
}