const submitForm = (event) => {
  event.preventDefault();
  const fullName = document.getElementById("name").value;
  const serviceType = document.getElementById("serviceType").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;
  date = formatDate(date);
  time = formatTime(time);
  event.target.reset();
  const appointment = {
    serviceType,
    date,
    time,
  };

  const storedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  storedAppointments.push(appointment);

  localStorage.setItem("appointments", JSON.stringify(storedAppointments));
};

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
