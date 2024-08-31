

$(document).ready(function() {
    $('#formulaire').on('submit', function(event) {
        event.preventDefault();

        var email = $('#email_id').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (!emailPattern.test(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return false; 
        }

        var params = {
            from_name: $('#name').val(),
            email_id: email,
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        emailjs.send("service_omdsklh", "template_b2h2nt6", params)
        .then(function (res) {
            alert("Votre message a été envoyé avec succès! " + res.status);
        })
        .catch(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
});




