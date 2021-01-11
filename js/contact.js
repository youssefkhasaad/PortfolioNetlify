
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_b9c5un8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    },document.getElementById("form").reset()
,
     (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });


});

