// js/modal.js

console.log("modal.js has been loaded");

// Function to open the modal
function openModal() {
    document.getElementById('js-check-modal').classList.add('is-active');
    document.getElementById('js-check-result').innerText = 'JavaScript files have been loaded successfully.';
}

// Function to close the modal
function closeModal() {
    document.getElementById('js-check-modal').classList.remove('is-active');
}

// Event listener for button click to open the modal
document.getElementById('check-js-button').addEventListener('click', openModal);

// Event listener for modal close button
document.querySelector('.modal-close').addEventListener('click', closeModal);

// Event listener for modal background click
document.querySelector('.modal-background').addEventListener('click', closeModal);
