
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const closeBtn = document.querySelector(".close-btn")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")



galleryItems[0].addEventListener("click", () => {
    lightbox.classList.add("active")
})


closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active")
})

