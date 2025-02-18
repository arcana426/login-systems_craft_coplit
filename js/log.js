window.onload = function () {
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

document.addEventListener('DOMContentLoaded', () => {
    // JavaScriptが読み込まれている場合の処理
    const errorOverlay = document.getElementById('errorOverlay');
    const Log = document.getElementById('Log');
    if (errorOverlay) errorOverlay.style.display = 'none';
    if (Log) {
        Log.classList.remove('error');
        Log.classList.add('success');
    }

    // CSSが正しく適用されているかのチェック
    const testElement = document.createElement('div');
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const cssLoaded = computedStyle.color !== "" && computedStyle.display !== "none";

    if (!cssLoaded) {
        document.getElementById('cssErrorOverlay').style.display = 'block';
    }

    document.body.removeChild(testElement);
});
