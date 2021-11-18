function sendMail(contactForm) {
    emailjs
      .send("gmail", "bottle_and_baby", {
        from_name: contactForm.contactName.value,
        from_email: contactForm.contactEmail.value,
        message: contactForm.message.value,
      })
      .then(alert("Thank you! You email has been sent"));
  
    $("#contact-form").text();
  }