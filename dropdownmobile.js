var dropdownButton = document.getElementById("menuButton");
var dropdownContent = document.getElementById("menuDropdownContent");

// Check if the screen width is below a certain threshold
if (window.innerWidth <= 1200) {
    // Add click event for smaller screens
    dropdownButton.addEventListener("click", function() {
        // Toggle the display property to show/hide the dropdown
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });
} else {
    // Add hover event for larger screens
    dropdownButton.addEventListener("mouseenter", function() {
        // Show the dropdown on hover
        dropdownContent.style.display = "block";
    });

    menuDropdownContent.addEventListener("mouseleave", function() {
        // Hide the dropdown when not hovered
        dropdownContent.style.display = "none";
    });
}
