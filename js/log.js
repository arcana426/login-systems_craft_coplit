window.onload = function() {
    const jsLoaded = typeof google !== 'undefined';
    const cssLoaded = document.styleSheets.length > 0;

    if (!jsLoaded && !cssLoaded) {
        document.getElementById('bothErrorOverlay').style.display = 'block';
    } else if (!jsLoaded) {
        document.getElementById('errorOverlay').style.display = 'block';
    } else if (!cssLoaded) {
        document.getElementById('cssErrorOverlay').style.display = 'block';
    }
};

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

document.addEventListener('DOMContentLoaded', function () {
    // Test element to check if CSS is loaded
    const testElement = document.createElement('div');
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const colorApplied = computedStyle.color !== "";
    const displayApplied = computedStyle.display !== "none";

    if (!colorApplied || !displayApplied) {
        // Show the error overlay if CSS is not loaded correctly
        document.getElementById('cssErrorOverlay').style.display = 'flex';
    }

    document.body.removeChild(testElement);
});
