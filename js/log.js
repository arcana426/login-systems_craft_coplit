
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
        console.log("jsが読み込まれています。")
    }
});

// CSSファイルの読み込み確認
document.addEventListener('DOMContentLoaded', function () {
    const testElement = document.createElement('div');
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const colorApplied = computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)';
    const displayApplied = computedStyle.getPropertyValue('display') === 'block';

    if (colorApplied && displayApplied) {
        console.log("style.css has been successfully loaded.");
    } else {
        console.error("style.css failed to load or styles are not applied correctly.");
        if (!colorApplied) {
            console.error("Expected color 'rgb(255, 0, 0)' but got '" + computedStyle.getPropertyValue('color') + "'.");
        }
        if (!displayApplied) {
            console.error("Expected display 'block' but got '" + computedStyle.getPropertyValue('display') + "'.");
        }
    }

    document.body.removeChild(testElement);
});
