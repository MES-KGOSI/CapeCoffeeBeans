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


