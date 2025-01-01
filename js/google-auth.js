// js/google-auth.js

// Handle the response from Google Sign-In
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Decode the JWT token to get user information
    const userObject = parseJwt(response.credential);
    // Save user information to local storage
    localStorage.setItem('user', JSON.stringify(userObject));
    // Redirect to home.html
    window.location.href = 'home.html';
}

// Decode JWT token to extract user information
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Initialize Google Sign-In when the window loads
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "900815271183-o6knmghr75ol1gf5f3o3c21mkl8qpnpu.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); // Display the One Tap dialog

    // Check if the user is already logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && window.location.pathname === '/home.html') {
        displayUserInfo(user);
    } else if (!user && window.location.pathname === '/home.html') {
        // Redirect to login page if not logged in
        window.location.href = 'index.html';
    }
}
