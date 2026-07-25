
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


let currentIndex = 0;

// Lightbox display image
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;

        const image = item.querySelector("img")
        lightboxImage.src = image.src
        lightbox.classList.add("active");
        console.log(currentIndex)
    })
})


// Lightbox next button
nextBtn.addEventListener("click", () => {
    if (currentIndex === galleryItems.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    const image = galleryItems[currentIndex].querySelector("img")
    lightboxImage.src = image.src;
    // console.log(currentIndex)
})

// previous button
prevBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = galleryItems.length - 1
    } else {
        currentIndex--
    }
    
    const image = galleryItems[currentIndex].querySelector("img")
    lightboxImage.src = image.src;
    // console.log(currentIndex)
})