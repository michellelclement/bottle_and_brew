function sendForm(contactForm) {
    emailjs
      .send("gmail", "bottle_and_baby_add_venu", {
        from_name: contactForm.addVenueContactName.value,
        from_email: contactForm.addVenueEmail.value,
        venue_comments: contactForm.venueComments.value,
        venue_name: contactForm.venueName.value,
        venue_address: contactForm.venueAddress.value,
        venue_website: contactForm.venueWebsite.value,
      })
      .then(alert("Thank you! Your message has been sent. We will get back to you as soon as we can."));
  
    $("#contact-form").text();
  }