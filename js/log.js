
// JavaScriptが読み込まれている場合の処理
document.addEventListener('DOMContentLoaded', () => {
    const errorOverlay = document.getElementById('errorOverlay');
    const Log = document.getElementById('Log');

    // エラーオーバーレイを非表示
    if (errorOverlay) errorOverlay.style.display = 'none';

    // ログメッセージを成功メッセージに置き換え
    if (Log) {
        Log.classList.remove('error');
        Log.classList.add('success');
    }
});
