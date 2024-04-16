import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>If you have any questions or inquiries, feel free to contact us:</p>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
