// ************** CODE FOR THE PRODUCT IMAGE GALLERY **************
function changeImage(imageSrc) {
    console.log("Changing image to:", imageSrc);
    document.getElementById('main-image').src = imageSrc;
}

// Function to handle mouse movement for zoom effect
function zoomImage(event) {
    const container = document.querySelector('.main-image-container');
    const image = document.getElementById('main-image');
    
    // Get the position of the cursor relative to the container
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Calculate the percentage position of the cursor
    const xPercent = x / rect.width * 100;
    const yPercent = y / rect.height * 100;
    
    // Set the transform origin based on the cursor position
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(1.5)';
}

// Function to reset the image zoom when mouse leaves
function resetImage() {
    const image = document.getElementById('main-image');
    image.style.transform = 'scale(1)';
}

// Add event listeners for the zoom effect
const mainImageContainer = document.querySelector('.main-image-container');
mainImageContainer.addEventListener('mousemove', zoomImage);
mainImageContainer.addEventListener('mouseleave', resetImage);