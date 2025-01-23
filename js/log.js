
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
    const colorApplied = computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)';
    const displayApplied = computedStyle.getPropertyValue('display') === 'block';

    if (!colorApplied || !displayApplied) {
        // Show the error overlay if CSS is not loaded correctly
        document.getElementById('cssErrorOverlay').style.display = 'flex';
    }

    document.body.removeChild(testElement);
});
