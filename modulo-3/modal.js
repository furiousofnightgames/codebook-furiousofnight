// modal.js

function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = element.dataset.img;

    // Fecha o modal quando clicar fora da imagem ou no "×"
    modal.onclick = function(e) {
        if (e.target === modal || e.target.className === 'close') {
            closeModal();
        }
    }

    // Fecha o modal com a tecla ESC
    function escClose(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escClose);
        }
    }
    document.addEventListener('keydown', escClose);
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
