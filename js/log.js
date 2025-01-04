// スクリプトが正常に読み込まれたことを確認する
document.addEventListener('DOMContentLoaded', () => {
    logMessage('JavaScript is loaded successfully.', 'success');
});

// ログ表示エリアをトグル（表示・非表示）する関数
function toggleLogVisibility() {
    const logContainer = document.getElementById('logContainer');
    logContainer.style.display = logContainer.style.display === 'none' || logContainer.style.display === '' ? 'block' : 'none';
}

// ログを画面に表示する関数
function logMessage(message, type) {
    const logContainer = document.getElementById('logContainer');
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;

    // アイコンを追加
    const icon = document.createElement('i');
    if (type === 'success') icon.className = 'fa-solid fa-check-circle';

    // メッセージとアイコンをエントリに追加
    const textNode = document.createTextNode(message);
    logEntry.appendChild(icon);
    logEntry.appendChild(textNode);

    // コンテナにエントリを追加
    logContainer.appendChild(logEntry);
}
