
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const closeBtn = document.querySelector(".close-btn")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")




// Lightbox close
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active")
})


let currentIndex = 0;

// Lightbox display image
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;

        const image = item.querySelector("img")
        lightboxImage.src = image.src;
        lightbox.classList.add("active")
    })
})

// Lightbox next image function
function showNextImage() {
    if (currentIndex === galleryItems.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }

    const image = galleryItems[currentIndex].querySelector("img")
    lightboxImage.src = image.src;
}

// Lightbox previous image function
function showPrevImage() {
    if (currentIndex === 0) {
        currentIndex = galleryItems.length - 1
    } else {
        currentIndex--;
    }
    const image = galleryItems[currentIndex].querySelector("img")
    lightboxImage.src = image.src;
}


// Lightbox next button
nextBtn.addEventListener("click", () => {
    showNextImage()
})

// previous button
prevBtn.addEventListener("click", () => {
    showPrevImage()
})



// Keyboard navigation
document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "ArrowRight") {
        showNextImage()
    } else if (event.key === "ArrowLeft") {
        showPrevImage()
    } else if (event.key === "Escape") {
        lightbox.classList.remove("active")
    }
});