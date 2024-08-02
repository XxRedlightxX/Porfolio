document.addEventListener("DOMContentLoaded", function() {
    // Get all the buttons that open modals
    var modalButtons = document.querySelectorAll(".openModal");

    // Get all the close buttons
    var closeButtons = document.querySelectorAll(".close");

    // Add click event to each button
    modalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = button.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    // Add click event to each close button
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = button.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
        });
    });

    // Close modal when clicking outside of modal content
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
});
