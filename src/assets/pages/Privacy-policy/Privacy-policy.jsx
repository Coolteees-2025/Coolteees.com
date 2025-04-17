import React from "react";
import "./Privacy-policy.css";
const Privacypolicy = () => {
  return (
    <article
      className="privacy-policy"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <header className="entry-header">
        <h1 className="entry-title" itemProp="headline">
          PRIVACY POLICY
        </h1>
      </header>

      <div className="entry-content clear" itemProp="text">
        <h3>PRIVACY POLICY</h3>

        <h2>
          <strong>Introduction</strong>
        </h2>
        <p>
          Welcome to Rong Dhong Enterprise! Our privacy policy outlines how we
          collect, use, share, and protect your personal information. By using
          our website, you agree to comply with these terms.
        </p>

        <h2>
          <strong>Information We Collect</strong>
        </h2>
        <ul>
          <li>
            We collect information when you visit our website, make a purchase,
            or interact with our services.
          </li>
          <li>
            This includes personal data such as your name, email address,
            shipping address, and payment details.
          </li>
          <li>
            We also collect non-personal information through cookies and
            analytics tools.
          </li>
        </ul>

        <h2>
          <strong>How We Use Your Information</strong>
        </h2>
        <ul>
          <li>
            We use your data to process orders, improve our services, and
            personalize your experience.
          </li>
          <li>We do not sell your information to third parties.</li>
        </ul>

        <h2>
          <strong>Cookies and Tracking Technologies</strong>
        </h2>
        <ul>
          <li>
            We use cookies to enhance your browsing experience and analyze
            website traffic.
          </li>
          <li>
            You can manage cookie preferences through your browser settings.
          </li>
        </ul>

        <h2>
          <strong>Data Security</strong>
        </h2>
        <ul>
          <li>
            We take measures to protect your data from unauthorized access,
            loss, or misuse.
          </li>
          <li>
            However, no method of transmission over the internet is completely
            secure.
          </li>
        </ul>

        <h2>
          <strong>Your Rights</strong>
        </h2>
        <ul>
          <li>
            You have the right to access, update, or delete your personal
            information.
          </li>
          <li>Contact us if you need assistance with your data rights.</li>
        </ul>

        <h2>
          <strong>Third-Party Links</strong>
        </h2>
        <ul>
          <li>
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices.
          </li>
        </ul>

        <h2>
          <strong>Changes to Privacy Policy</strong>
        </h2>
        <ul>
          <li>
            We may update this policy. Check our website for the latest version.
          </li>
        </ul>

        <h2>
          <strong>Contact Us</strong>
        </h2>
        <p>If you have any questions or concerns, please reach out to us:</p>
        <ul>
          <li>
            Phone: <a href="tel:+919749845293">+91 9749845293</a>
          </li>
          <li>
            WhatsApp Helpdesk:{" "}
            <a
              href="https://wa.me/919749845293"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9749845293
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:rongdhongenterprise@gmail.com">
              rongdhongenterprise@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Privacypolicy;
