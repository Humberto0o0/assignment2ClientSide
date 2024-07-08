document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('ul li img');
    const featuredImage = document.getElementById('featured');
    const figcaption = document.querySelector('figcaption');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const largeImageSrc = this.src.replace('small', 'large');
            featuredImage.src = largeImageSrc;
            figcaption.textContent = this.alt;
        });
    });
});
