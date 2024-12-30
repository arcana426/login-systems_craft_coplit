// js/script.js
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // 認証トークンをサーバー側で処理するためのコードをここに追加
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
    google.accounts.id.prompt(); // ワンタップダイアログも表示
}
