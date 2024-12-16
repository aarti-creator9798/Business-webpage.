document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload on form submission
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const instagram = document.getElementById("instagram").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            console.log("Form submitted!", {
                name,
                email,
                message,
                instagram
            });

            const confirmationMessage = document.getElementById("confirmationMessage");
            confirmationMessage.innerText = "Thank you for reaching out, " + name + "! We will get back to you shortly.";
            confirmationMessage.style.color = "green";

            contactForm.reset();
        });
    }

    const helpForm = document.querySelector("#help form");
    if (helpForm) {
        helpForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload on form submission
            const need = document.getElementById("need").value.trim();
            const serviceType = document.getElementById("serviceType").value;
            const workingHours = document.getElementById("workingHours").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!need || !serviceType || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            console.log("Help form submitted!", {
                need,
                serviceType,
                workingHours,
                message
            });

            alert("Thank you for your inquiry! We'll get back to you soon.");
            
            helpForm.reset();
        });
    }
});

