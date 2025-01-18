// モーダルを開く
function openModal() {
    const modal = document.getElementById('logModal');
    modal.classList.add('is-active');
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById('logModal');
    modal.classList.remove('is-active');
}
