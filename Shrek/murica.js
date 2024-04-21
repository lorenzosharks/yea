// Array of background image URLs
const images = [
    'url(https://ih0.redbubble.net/image.18720249.0440/flat,550x550,075,f.u1.jpg)',
    'url(https://www.pumpsandsystems.com/sites/default/files/PII/newsletter_images/190824/oil-barrels-pii.jpg)',
    'url(https://s.abcnews.com/images/US/la-guns2-ho-mo-20190508_hpMain_16x9_992.jpg)',
    'url(https://media.post.rvohealth.io/wp-content/uploads/2021/06/mcdonalds-1200x628-facebook.jpg)'
];

// Function to change the background image
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = randomImage;
}

setInterval(changeBackground, 100);
