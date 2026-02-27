// Input Dynamic Welcome Name
const userName = prompt("Enter your Name:");
if (userName) {
    document.getElementById("dynamicName").innerText = userName;
}

// Slider Banner
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let direction = 1; // 1 = ke kanan, -1 = ke kiri

    const slider = document.getElementById("slider");
    const slides = slider.children;
    const totalSlides = slides.length;

    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    function updateButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        prevBtn.classList.toggle("opacity-40", prevBtn.disabled);
        nextBtn.classList.toggle("opacity-40", nextBtn.disabled);
    }

    function showSlide() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateButtons();
    }

    function autoSlide() {
        currentSlide += direction;

        if (currentSlide >= totalSlides - 1) {
            currentSlide = totalSlides - 1;
            direction = -1;
        }

        if (currentSlide <= 0) {
            currentSlide = 0;
            direction = 1;
        }
        showSlide();
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            direction = 1;
            showSlide();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            direction = -1;
            showSlide();
        }
    }

    setInterval(autoSlide, 3000);

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    showSlide();
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById("result");

    if (name === "" || email === "" || dob === "" || !gender || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    result.innerHTML = `
            <p class="text-green-600 font-bold mb-4">
                Thank You <b>${name}</b>, your message has been received!
            </p>

            <div class="bg-gray-100 p-4 rounded-lg text-left text-black mt-3">
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Date of Birth:</b> ${dob}</p>
                <p><b>Gender:</b> ${gender.value}</p>
                <p><b>Message:</b> ${message}</p>
            </div>
        `;

    this.reset();
});