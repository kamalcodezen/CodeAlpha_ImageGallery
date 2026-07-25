// ===============================
// DOM Elements
// ===============================
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");

// ===============================
// Constants
// ===============================
const FADE_DURATION = 300;

// ===============================
// State
// ===============================
let currentIndex = 0;

// ===============================
// Update Lightbox Content
// ===============================
function updateLightboxInfo() {
    const image = galleryItems[currentIndex].querySelector("img");

    // Fade Out
    lightboxImage.classList.add("fade");

    setTimeout(() => {
        // Update Image
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        // Update Caption
        lightboxCaption.textContent = image.alt;

        // Update Counter
        lightboxCounter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;

        // Fade In after image is decoded
        lightboxImage
            .decode()
            .then(() => {
                lightboxImage.classList.remove("fade");
            })
            .catch(() => {
                lightboxImage.classList.remove("fade");
            });

    }, FADE_DURATION);
}

// ===============================
// Open Lightbox
// ===============================
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;

        updateLightboxInfo();

        lightbox.classList.add("active");
    });
});

// ===============================
// Close Lightbox
// ===============================
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// ===============================
// Next Image
// ===============================
function showNextImage() {
    if (currentIndex === galleryItems.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    updateLightboxInfo();
}

// ===============================
// Previous Image
// ===============================
function showPrevImage() {
    if (currentIndex === 0) {
        currentIndex = galleryItems.length - 1;
    } else {
        currentIndex--;
    }

    updateLightboxInfo();
}

// ===============================
// Button Navigation
// ===============================
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

// ===============================
// Keyboard Navigation
// ===============================
document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    switch (event.key) {
        case "ArrowRight":
            showNextImage();
            break;

        case "ArrowLeft":
            showPrevImage();
            break;

        case "Escape":
            lightbox.classList.remove("active");
            break;
    }
});

// ===============================
// Click Outside to Close
// ===============================
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});