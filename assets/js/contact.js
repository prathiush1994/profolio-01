function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("comment").value
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