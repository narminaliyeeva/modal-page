function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

document.getElementById('closeSpanPass').addEventListener('click', () => {
    closeModal();
});