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
        event.preventDefault(); // prevent actual submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
 // Check required fields
        if (name === "" || email === "" || message === "") {
            alert("Oops! Some required fields are missing. Please complete Name, Email, and Message.");
            return; // STOP here — success popup will NOT appear
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return; // STOP here — success popup will NOT appear
        }

        // Confirmation
        const confirmed = confirm("Do you want to submit your message?");
        if (!confirmed) return; // STOP here — success popup will NOT appear

        // Success popup ONLY runs if none of the above returned
        alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email}.`);

        form.reset(); // clear form after successful submission

    });
});

// products search

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm) return;

    const searchInput = searchForm.querySelector('input[name="q"]');
    if (!searchInput) return;

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const query = searchInput.value.trim().toLowerCase(); // Normalize input

        // Map search terms to pages
        const pages = {
            "index": "index.html",
            "home": "index.html",
            "products": "products.html",
            "faqs": "faqs.html",
            "enquiry": "enquiry.html",
            "brewing": "brewing.html",
            "about": "about.html",
            "contact": "contact.html"
        };

        if (pages[query]) {
            window.location.href = pages[query]; // Redirect to page
        } else {
            alert("No page found for your search. Try: Home, Products, FAQs, Enquiry, Brewing, About, or Contact.");
        }

        searchInput.value = ""; // Optional: clear search box
    });
});