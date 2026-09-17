// Dark / Light mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();

});
