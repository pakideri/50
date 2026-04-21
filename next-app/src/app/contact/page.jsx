"use client";

export default function ContactPage() {
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const fname      = document.getElementById('fname').value.trim();
    const lname      = document.getElementById('lname').value.trim();
    const phone      = document.getElementById('phone').value.trim();
    const email      = document.getElementById('email').value.trim();
    const checkinVal = document.getElementById('checkin').value.trim();
    const checkoutVal= document.getElementById('checkout').value.trim();
    const message    = document.getElementById('message').value.trim();

    if (!fname || !lname || !phone || !email || !checkinVal || !checkoutVal) {
      alert('Please fill in all required fields.');
      return;
    }

    const checkinDate  = new Date(checkinVal);
    const checkoutDate = new Date(checkoutVal);
    const timeDiff     = checkoutDate.getTime() - checkinDate.getTime();
    const dayDiff      = Math.round(timeDiff / (1000 * 3600 * 24));

    if (dayDiff <= 0) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    // Format dates as DD/MM/YYYY
    const [iy, im, id] = checkinVal.split('-');
    const formattedCheckin  = `${id}/${im}/${iy}`;
    const [oy, om, od] = checkoutVal.split('-');
    const formattedCheckout = `${od}/${om}/${oy}`;

    const text =
      '🏕️ *New Enquiry – 50 Fables*\n\n' +
      '👤 *Name:* ' + fname + ' ' + lname + '\n' +
      '📞 *Phone:* ' + phone + '\n' +
      '📧 *Email:* ' + email + '\n' +
      '📅 *Check-in:* ' + formattedCheckin + '\n' +
      '📅 *Check-out:* ' + formattedCheckout + '\n' +
      '🌙 *Duration:* ' + dayDiff + ' Night' + (dayDiff !== 1 ? 's' : '') + '\n' +
      (message ? '💬 *Message:* ' + message : '');

    window.open('https://wa.me/919446257408?text=' + encodeURIComponent(text), '_blank');

    // Reset form
    document.getElementById('whatsappContactForm').reset();

    // Show success message
    const msgSubmit = document.getElementById('msgSubmit');
    msgSubmit.classList.remove('hidden');
    msgSubmit.innerHTML = '✅ Your enquiry has been sent via WhatsApp!';
    msgSubmit.style.color = '#25d366';
    msgSubmit.style.fontSize = '14px';
    msgSubmit.style.marginTop = '10px';
    setTimeout(() => { msgSubmit.classList.add('hidden'); }, 5000);
  };

  return (
    <>
      <main>
        <style>{`
        /* Override custom.css template: stack items vertically, not 4-across */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          margin-bottom: 0;
        }
        .contact-info-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          width: 100% !important;
          padding: 30px !important;
          box-sizing: border-box;
        }
        .contact-info-item .icon-box {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0 !important;
          border-radius: 50%;
        }
        .contact-info-item .icon-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .contact-info-item .contact-info-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-info-item .contact-info-content h3 {
          margin: 0 0 6px !important;
          font-size: 1.1rem;
          font-weight: 600;
          white-space: normal;
        }
        .contact-info-item .contact-info-content p {
          margin: 0 0 4px !important;
          font-size: 0.95rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .contact-info-item .contact-info-content a {
          text-decoration: none;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        @media (max-width: 768px) {
          .contact-info-item { padding: 20px !important; }
          .contact-info-item .icon-box { width: 40px; height: 40px; }
          .contact-info-item .contact-info-content h3 { font-size: 1rem; }
          .contact-info-item .contact-info-content p,
          .contact-info-item .contact-info-content a { font-size: 0.9rem; }
        }
      `}</style>

      {/* Page Header */}
        <div className="page-header parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
                  <nav className="wow fadeInUp">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Contact Us */}
        <div className="page-contact-us">
          <div className="container">
            <div className="row">

              {/* Contact Info */}
              <div className="col-xl-6 col-lg-12">
                <div className="contact-info-list">

                  {/* Phone */}
                  <div className="contact-info-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-phone-primary.svg" alt="Phone" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Phone Number</h3>
                      <p><a href="tel:+919446257408">+91 94462 57408</a></p>
                    </div>
                  </div>

                  {/* Email & Website */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box">
                      <img src="/images/icon-mail-primary.svg" alt="Email" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Web / Email Address</h3>
                      <p><a href="https://www.50fables.com" target="_blank" rel="noopener noreferrer">www.50fables.com</a></p>
                      <p><a href="mailto:Tomynupul@gmail.com">Tomynupul@gmail.com</a></p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-location-primary.svg" alt="Location" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Our Location</h3>
                      <p>50 Fables, Wayanad</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-clock-primary.svg" alt="Working Hours" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Working Days</h3>
                      <p>Monday to Sunday</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Contact Form */}
              <div className="col-xl-6 col-lg-12">
                <div className="contact-form">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Contact Us</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Let's plan your dream Stay - contact our team today
                    </h2>
                  </div>

                  <form
                    id="whatsappContactForm"
                    onSubmit={sendToWhatsApp}
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone Number" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <label htmlFor="checkin" style={{ fontSize: "14px", color: "#555" }}>Check-in Date</label>
                        <input type="date" name="checkin" className="form-control" id="checkin" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <label htmlFor="checkout" style={{ fontSize: "14px", color: "#555" }}>Check-out Date</label>
                        <input type="date" name="checkout" className="form-control" id="checkout" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Send Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default"><span>Send Message</span></button>
                          <div id="msgSubmit" className="h3 hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Google Map — full-width below, matching original col-xl-6 layout */}
              <div className="col-xl-6 col-lg-12">
                <div className="google-map-iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8320597255015!2d76.19831767611998!3d11.776872688439408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e30090f9a47d%3A0xa4583ef90d553743!2s50Fables!5e0!3m2!1sen!2sin!4v1775469317676!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
