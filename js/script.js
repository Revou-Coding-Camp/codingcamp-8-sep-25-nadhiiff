// script.js
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fadeUp");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // biar animasi jalan sekali
      }
    });
  }, {
    threshold: 0.2 // elemen harus 20% masuk layar
  });

  animatedElements.forEach(el => observer.observe(el));
});


function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    } else {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}


