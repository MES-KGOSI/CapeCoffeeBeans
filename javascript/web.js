document.addEventListener('DOMContentLoaded', function() {
    // Select all phone links
    const phoneLinks = document.querySelectorAll('.phoneLink');

    phoneLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Show confirmation popup with Ok/Cancel
            const userConfirmed = confirm("Would you like to contact us?");
            if (!userConfirmed) {
                event.preventDefault(); // Stop the call if No
            }
        });
    });
});
 // Get diections
document.addEventListener('DOMContentLoaded', function() {
    const mapLinks = document.querySelectorAll('.mapLink');

    mapLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const userConfirmed = confirm("Would you like to open directions?");
            if (!userConfirmed) {
                event.preventDefault(); // stop opening the link if No
            }
        });
    });
});


