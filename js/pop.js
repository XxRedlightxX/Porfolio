document.addEventListener("DOMContentLoaded", () => {
    var openButton = document.getElementsByClassName("openModal");
    var closeButton = document.getElementById("closeModal");
    var modal = document.getElementById("modal");

    openButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
