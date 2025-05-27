function sendMail() {
    // Take the values typed into the boxes
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("comment").value;

    // Now we start checking if they are correct
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // Very simple email check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return;
    }

    if (subject.trim() === "") {
        alert("Please enter the subject.");
        return;
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        return;
    }

    // If everything looks good, we send it
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_wholt85", "template_pz0j3lr", parms)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS", response.status, response.text);
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.log("FAILED", error);
        });
}