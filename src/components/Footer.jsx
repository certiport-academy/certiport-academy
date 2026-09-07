function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-column footer-company">

          <div className="footer-logo">
            <img
              src="/logo/certiport-academy2-logo.png"
              alt="Certiport Academy"
            />
          </div>

          <p>
            Empowering learners with quality education,
            practical training and professional certification
            for a better career.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <ul>
            <li><a href="#about">→ About Us</a></li>
            <li><a href="#courses">→ Our Courses</a></li>
            <li><a href="#products">→ Products</a></li>
            <li><a href="#partners">→ Partners</a></li>
            <li><a href="#contact">→ Contact</a></li>
          </ul>

        </div>


        {/* RESOURCES */}
        <div className="footer-column">

          <h3>RESOURCES</h3>

          <ul>
            <li><a href="#students">→ Students</a></li>
            <li><a href="#verification">→ Certificate Verification</a></li>
            <li><a href="#exams">→ Online Exams</a></li>
            <li><a href="#faq">→ FAQs</a></li>
            <li><a href="#privacy">→ Privacy Policy</a></li>
          </ul>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>CONTACT US</h3>

          <div className="footer-contact-item">
            <span>⌖</span>

            <p>
              <b>CERTIPORT TECHNOLOGY PVT LTD</b>
              <br />
              No.5, 2nd Floor, Nehru Main Road, Near Empire Restaurant, Kammanahalli, Bangalore, Karnataka - 560084
            </p>
          </div>

          <div className="footer-contact-item">
            <span>☎</span>

            <p>
              +91 9818447820
            </p>
          </div>

          <div className="footer-contact-item">
            <span>✉</span>

            <p>
              support@certiportacademy.in
            </p>
          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Certiport Academy. All rights reserved.
          </p>

          <div>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;