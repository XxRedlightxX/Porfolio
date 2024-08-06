document.addEventListener("DOMContentLoaded", function() {
    // Get all the buttons that open modals
    var modalButtons = document.querySelectorAll(".openModal");

   
    var closeButtons = document.querySelectorAll(".close");


    modalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = button.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = button.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
        });
    });

  
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
});
