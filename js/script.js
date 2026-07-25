
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const closeBtn = document.querySelector(".close-btn")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const item = document.querySelector(".gallery-item")


// Lightbox open
galleryItems[0].addEventListener("click", () => {
    lightbox.classList.add("active")
})

// Lightbox close
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active")
})


galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const image = item.querySelector("img")
        lightboxImage.src = image.src
        lightbox.classList.add("active")
    })
})
