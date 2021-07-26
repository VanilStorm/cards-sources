const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    slide.addEventListener('dblclick', () => {
        slide.classList.remove('active');
    });

    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active');
    });
}

function clearActiveClasses() {
    slides.forEach((item) => {
        item.classList.remove('active');
    })
}