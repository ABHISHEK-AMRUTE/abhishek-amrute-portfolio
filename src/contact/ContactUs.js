import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';



export default function ContactUs() {

  function sendEmail() {
    // e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    // emailjs.sendForm('service_2ufc668', 'template_ix4el4o', e.target, 'user_wWUgg4Jis66ptcOyTitTC')
    //   .then((result) => {
    //       window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //   }, (error) => {
    //       console.log(error.text);
    //   });


      (function() {
        emailjs.init("user_wWUgg4Jis66ptcOyTitTC"); 
      })();
    
      var templateParams = {
        to_name: 'Abhishek Amrute',
        from_name: 'Alex',
        message_html: 'Please Find out the attached file'
      };
    
      emailjs.send('service_2ufc668', 'template_ix4el4o', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });

  }

  return (
    
    <button onClick={sendEmail}>send</button>

  );
}