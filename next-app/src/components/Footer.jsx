import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Main Footer Box Start */}
            <div className="main-footer-box">
              {/* Footer About Start */}
              <div className="footer-about">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="50 Fables Logo" />
                </div>
                {/* Footer Logo End */}

                {/* About Footer Content Start */}
                <div className="about-footer-content">
                  <p>Where Every Stay Becomes a Story</p>
                </div>
                {/* About Footer Content End */}

                {/* Footer Social Link Start */}
                <div className="footer-social-links">
                  <h3>Social Media:</h3>
                  <ul>
                    <li><Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link href="https://www.instagram.com/50fables/"><i className="fa-brands fa-instagram"></i></Link></li>
                  </ul>
                </div>
                {/* Footer Social Link End */}
              </div>
              {/* Footer About End */}

              {/* Footer Links Box Start */}
              <div className="footer-links-box">
                {/* Footer Links Start */}
                <div className="footer-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                {/* Footer Links End */}

                {/* Footer Links Start */}
                <div className="footer-links">
                  <h3>Travel</h3>
                  <ul>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/wayanad">Wayanad</Link></li>
                  </ul>
                </div>
                {/* Footer Links End */}
              </div>
              {/* Footer Links Box End */}
            </div>
            {/* Main Footer Box End */}
          </div>

          <div className="col-lg-12">
            {/* Footer Copyright Text Start */}
            <div className="footer-copyright-text">
              <p>Copyright © <span>{currentYear}</span> All Rights Reserved.</p>
            </div>
            {/* Footer Copyright Text End */}
          </div>
        </div>
      </div>
    </footer>
  );
}
