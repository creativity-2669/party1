/* ==========================================
   BIRTHDAY SURPRISE WEBSITE
   COMPLETE JAVASCRIPT
========================================== */

/* =========================
   CONFIGURATION
========================= */

/*
Change this to the birthday person's name
Example:
const correctName = "Priya";

Leave empty "" if you want any name accepted.
*/

const correctName = "";

/* =========================
   PAGE ELEMENTS
========================= */

const loader = document.getElementById("loader");

const loginPage = document.getElementById("loginPage");
const surprisePage = document.getElementById("surprisePage");
const galleryPage = document.getElementById("galleryPage");
const finalPage = document.getElementById("finalPage");

const loginBtn = document.getElementById("loginBtn");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn = document.getElementById("finalBtn");
const restartBtn = document.getElementById("restartBtn");

const nameInput = document.getElementById("nameInput");
const errorText = document.getElementById("errorText");

const userName = document.getElementById("userName");
const typingTitle = document.getElementById("typingTitle");

const music = document.getElementById("birthdayMusic");

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 3000);

});

/* =========================
   PAGE SWITCH
========================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

    page.classList.add("active");

}

/* =========================
   LOGIN SYSTEM
========================= */

loginBtn.addEventListener("click", () => {

    const enteredName =
        nameInput.value.trim();

    if (enteredName === "") {

        errorText.innerText =
            "Please enter your name ❤️";

        return;
    }

    if (
        correctName !== "" &&
        enteredName.toLowerCase() !==
        correctName.toLowerCase()
    ) {

        errorText.innerText =
            "Oops! Wrong name ❤️";

        return;
    }

    errorText.innerText = "";

    userName.innerText = enteredName;

    showPage(surprisePage);

    startTyping();

    startConfetti();

    try {
        music.play();
    } catch (e) {}

});

/* =========================
   TYPING EFFECT
========================= */

function startTyping() {

    const text =
        "🎉 Happy Birthday 🎂";

    typingTitle.innerHTML = "";

    let index = 0;

    const timer = setInterval(() => {

        typingTitle.innerHTML += text[index];

        index++;

        if (index >= text.length) {

            clearInterval(timer);

        }

    }, 120);

}

/* =========================
   MESSAGE ROTATION
========================= */

const messages =
    document.querySelectorAll(".message");

let currentMessage = 0;

setInterval(() => {

    messages[currentMessage]
        .classList.remove("active");

    currentMessage++;

    if (currentMessage >= messages.length) {

        currentMessage = 0;

    }

    messages[currentMessage]
        .classList.add("active");

}, 4000);

/* =========================
   GALLERY BUTTON
========================= */

galleryBtn.addEventListener("click", () => {

    showPage(galleryPage);

});

/* =========================
   GALLERY SLIDER
========================= */

const slides =
    document.querySelectorAll(".slide");

const prevBtn =
    document.getElementById("prevSlide");

const nextBtn =
    document.getElementById("nextSlide");

let slideIndex = 0;

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

nextBtn.addEventListener("click", () => {

    slideIndex++;

    if (slideIndex >= slides.length) {

        slideIndex = 0;

    }

    showSlide(slideIndex);

});

prevBtn.addEventListener("click", () => {

    slideIndex--;

    if (slideIndex < 0) {

        slideIndex = slides.length - 1;

    }

    showSlide(slideIndex);

});

/* Auto Slide */

setInterval(() => {

    slideIndex++;

    if (slideIndex >= slides.length) {

        slideIndex = 0;

    }

    showSlide(slideIndex);

}, 5000);

/* =========================
   FINAL PAGE
========================= */

finalBtn.addEventListener("click", () => {

    showPage(finalPage);

    startFireworks();

});

/* =========================
   RESTART
========================= */

restartBtn.addEventListener("click", () => {

    location.reload();

});

/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.getElementById("hearts-container");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);

/* =========================
   BALLOONS
========================= */

const balloonContainer =
    document.getElementById("balloons-container");

const balloons = [
    "🎈",
    "🎈",
    "🎈"
];

function createBalloon() {

    const balloon =
        document.createElement("div");

    balloon.classList.add("balloon");

    balloon.innerHTML =
        balloons[
            Math.floor(
                Math.random() *
                balloons.length
            )
        ];

    balloon.style.left =
        Math.random() * 100 + "vw";

    balloon.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    balloonContainer.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 15000);

}

setInterval(createBalloon, 1800);

/* =========================
   STARS
========================= */

const starContainer =
    document.getElementById("stars-container");

for (let i = 0; i < 80; i++) {

    const star =
        document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✦";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.fontSize =
        (8 + Math.random() * 10) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starContainer.appendChild(star);

}

/* =========================
   PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles-container");

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 12000);

}

setInterval(createParticle, 250);

/* =========================
   CONFETTI
========================= */

function startConfetti() {

    const canvas =
        document.getElementById("confettiCanvas");

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    const confetti = [];

    for (let i = 0; i < 250; i++) {

        confetti.push({

            x:
            Math.random() *
            canvas.width,

            y:
            Math.random() *
            canvas.height,

            r:
            Math.random() * 8 + 2,

            d:
            Math.random() * 250,

            color:
            `hsl(${Math.random()*360},
            100%,60%)`,

            tilt:
            Math.random() * 10

        });

    }

    function draw() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        confetti.forEach(c => {

            ctx.beginPath();

            ctx.fillStyle = c.color;

            ctx.fillRect(
                c.x,
                c.y,
                c.r,
                c.r
            );

        });

        update();

        requestAnimationFrame(draw);

    }

    function update() {

        confetti.forEach(c => {

            c.y += 2;

            c.x +=
                Math.sin(c.d);

            if (
                c.y >
                canvas.height
            ) {

                c.y = -10;

            }

        });

    }

    draw();

}

/* =========================
   FIREWORKS
========================= */

function startFireworks() {

    const canvas =
        document.getElementById("fireworksCanvas");

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    const fireworks = [];

    function createFirework() {

        const x =
            Math.random() *
            canvas.width;

        const y =
            Math.random() *
            canvas.height * 0.6;

        for (let i = 0; i < 80; i++) {

            fireworks.push({

                x,
                y,

                dx:
                (Math.random()-0.5)*8,

                dy:
                (Math.random()-0.5)*8,

                life:100,

                color:
                `hsl(${Math.random()*360},
                100%,60%)`

            });

        }

    }

    setInterval(
        createFirework,
        1200
    );

    function animate() {

        ctx.fillStyle =
            "rgba(0,0,0,0.15)";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        fireworks.forEach((f, index) => {

            ctx.beginPath();

            ctx.arc(
                f.x,
                f.y,
                3,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                f.color;

            ctx.fill();

            f.x += f.dx;
            f.y += f.dy;

            f.life--;

            if (f.life <= 0) {

                fireworks.splice(
                    index,
                    1
                );

            }

        });

        requestAnimationFrame(
            animate
        );

    }

    animate();

}

/* =========================
   RESPONSIVE CANVAS
========================= */

window.addEventListener(
    "resize",
    () => {

        const c1 =
        document.getElementById(
        "confettiCanvas");

        const c2 =
        document.getElementById(
        "fireworksCanvas");

        if(c1){

            c1.width =
            window.innerWidth;

            c1.height =
            window.innerHeight;
        }

        if(c2){

            c2.width =
            window.innerWidth;

            c2.height =
            window.innerHeight;
        }

    }
);