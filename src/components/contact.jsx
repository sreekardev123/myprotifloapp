import React from "react";



const Contacts = () => {
  return (
    <div className="container contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <i class="fa-solid fa-feather"></i>
        
      </div>
      <div className="contact-section">
        <div className="content-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently avalible to take on new project,so feel free m to
            send me message about anything that you want me to workon you can contact any time
          </p>
          <div className="contact-details">
            <div className="contact-details">
            <i class="fa-solid fa-envelope"></i>
            <p>parthukaranam4@gmail.com</p>
            </div>
            <div className="contact-details">
            <i class="fa-solid fa-phone"></i>
            <p>+91 9392151196</p>

            </div>
            <div className="contact-details">
            <i class="fa-solid fa-location-crosshairs"></i>
            <p>Hyderabad</p>

            </div>
          </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter Your Email" name="email"/>
            <label htmlFor="">write your Message Here</label>
            <textarea name="message" rows={8} placeholder="Enter your Message"></textarea>
             <button type="submit" className="contact-submit">Submit Now</button>

        </form>
      </div>
    </div>
  );
};

export default Contacts;
