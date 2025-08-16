document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("Meghanae;
  const email = document.getElementById("24pa1a05f0@vishnu.edu.in
  const dobInput = document.getElementById("03-03-2007
  const dob = new Date(dobInput);

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 18 || age > 55) {
    alert("You must be between 18 and 55 years old.");
    return;
  }

  const user = {
    name: MEghana
    email: 24pa1a05f0@vishnu.edu.in,
    dob: 03-03-2007
  };

  localStorage.setItem("userData", JSON.stringify(user));
  alert("Registration successful!");
});