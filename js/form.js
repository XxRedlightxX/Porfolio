/*const formulaire = document.querySelector('#formulaire');
function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_omdsklh","template_b2h2nt6", params).then(function (res) {
        alert("Votre message a été envoyée avec Succès" + res.status);
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));

    });
    formulaire.addEventListener('submit', SendMail);
}*/

const formulaire = document.getElementById('formulaire');

  // Add submit event listener to the form
  formulaire.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const formData = {
      from_name: document.getElementById('name').value,
      email_id: document.getElementById('email_id').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_omdsklh', 'template_b2h2nt6', formData)
      .then(function(response) {
        alert('Votre message a été envoyé avec succès! Statut: ' + response.status);
        formulaire.reset(); // Reset the form after successful submission
      })
      .catch(function(error) {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.\nErreur: ' + JSON.stringify(error));
      });
  });



/*
const formulaire = document.querySelector('Formulaire');


function sendMsg(e) {
    e.preventDefautlt();
    name = document.querySelector('name'),
    email = document.querySelector('email'),
    subject = document.querySelector('subject'),
    message= document.querySelector('message')


    Email.send({
        Host : "smtp.gmail.com",
        Username : "smpt",
        Password : "wkyt bdct cfar upqe",
        To : 'jgabriel.lerouge@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    ).catch(
        error => alert("Failed to send the message. Please try again later.")
    );

}
formulaire.addEventListener('submit',sendMsg);*/