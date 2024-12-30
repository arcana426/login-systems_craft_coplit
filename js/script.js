// js/script.js
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // JWTトークンをデコードしてユーザー情報を取得
    const userObject = parseJwt(response.credential);
    // ローカルストレージにユーザー情報を保存
    localStorage.setItem('user', JSON.stringify(userObject));
    // home.htmlにリダイレクト
    window.location.href = 'home.html';
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "900815271183-o6knmghr75ol1gf5f3o3c21mkl8qpnpu.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); // ワンタップダイアログも表示
}
