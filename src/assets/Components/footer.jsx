import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="site-primary-footer-wrap">
        <div className="footer-container">
          <div className="site-primary-footer-inner-wrap">
            {/* ...existing content... */}
            <footer
              className="site-primary-footer-wrap"
              data-section="section-primary-footer-builder"
            >
              <div className="ast-builder-grid-row-container-inner">
                <div className="site-primary-footer-inner-wrap">
                  {/* Section 1: Logo & Social */}
                  <div className="site-footer-section site-footer-section-1">
                    <aside
                      className="footer-widget-area"
                      aria-label="Footer Widget 1"
                    >
                      <section className="widget widget_media_image">
                        <a href="https://rongdhong.co.in/">
                          <img
                            src="logo.png"
                            alt="Rong Dhong Logo"
                            width="90"
                            height="40"
                            decoding="async"
                          />
                        </a>
                      </section>
                      <section className="widget widget_text">
                        <h2 className="widget-title">Follow US</h2>
                        <div className="textwidget" />
                      </section>
                    </aside>

                    <div className="footer-social">
                      <a
                        href="https://www.instagram.com/rongdhongenterprise?igsh=MWM5eXV5cm5ieHh6aA=="
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-item instagram"
                      >
                        <img
                          src="instragram.png"
                          alt="instragram png"
                          decoding="async"
                        />
                      </a>

                      <a
                        href="https://www.facebook.com/profile.php?id=100093840381859"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-item facebook"
                      >
                        <img
                          src="facebook.png"
                          alt="facebook png"
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Section 2: Quick Links */}
                  <div className="site-footer-section site-footer-section-2">
                    <aside
                      className="footer-widget-area"
                      aria-label="Footer Widget 2"
                    >
                      <section className="widget">
                        <h2 className="widget-title">Quick Links</h2>
                        <ul className="list-items-wrapper">
                          <li>
                            <a href="#">Know More About Us</a>
                          </li>
                          <li>
                            <a href="#">Visit Store</a>
                          </li>
                          <li>
                            <a href="#">Let's Connect</a>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>

                  {/* Section 3: Important Links */}
                  <div className="site-footer-section site-footer-section-3">
                    <aside
                      className="footer-widget-area"
                      aria-label="Footer Widget 3"
                    >
                      <section className="widget">
                        <h2 className="widget-title">Important Links</h2>
                        <ul className="list-items-wrapper">
                          <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                          </li>

                          <li>
                            <Link to="/terms&condition">Terms & Condition</Link>
                          </li>
                          <li>
                            <Link to="/exchange&return">Exchange & Return</Link>
                          </li>
                          <li>
                            <Link to="/shipping-policy">Shipping Policy</Link>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>

                  {/* Section 4: Footer Text */}
                  <div className="site-footer-section site-footer-section-4">
                    <aside
                      className="footer-widget-area"
                      aria-label="Footer Widget 4"
                    >
                      <section className="widget widget_text">
                        <h2 className="widget-title">
                          Best Quality Custom Prints &amp; Supplies.
                        </h2>
                        <div className="textwidget">
                          <p>We just don’t print. We create emotions</p>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
