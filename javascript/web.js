// Contact page only

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


// Form functionality

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Validate required fields
        if (!name || !email || !message) {
            alert("Please fill in all required fields (Name, Email, Message).");
            return;
        }

        // Ask user for confirmation
        const confirmed = confirm("Would you like to send your message?");
        if (!confirmed) return;

        // Submit the form
        form.submit();

        // Show popup after submission
        alert("Thank you, " + name + "! Your message has been received. We will contact you at " + email + ".");
    });
});




