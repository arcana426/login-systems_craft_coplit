function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // You can now use the token to authenticate the user on your server
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}
