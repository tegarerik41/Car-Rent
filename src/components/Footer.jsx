import {IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>EL Tour & Travel</span> Jogja
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=628882587204&text&type=phone_number&app_absent=0">
                  <IconPhoneCall /> &nbsp; (+62) 888-2587-204
                </a>
              </li>

            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Yogyakarta</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Open 24 Hours</li>
              <li>Buka 24 Jam</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
