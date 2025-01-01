// js/user-info.js

console.log("user-info.js has been loaded");

// Display user information on the home page
function displayUserInfo(user) {
    document.getElementById('user-info').innerHTML = `
        <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="${user.picture}" alt="User Image">
        </figure>
        <h2 class="title is-3">${user.name}</h2>
        <p class="subtitle is-5">${user.email}</p>
    `;
}
