import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer section-padding" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link href="/">
                <img src="/assets/images/all-img/logo.png" alt="Purdue Academy Logo" />
              </Link>
              <p>
                Dedicated to providing modern, industry-standard IT training, professional language skills, and career empowerment for ambitious students.
              </p>
            </div>
            <div className="foot_social">
              <ul>
                <li><a href="#" aria-label="Facebook" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#" aria-label="Twitter" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#" aria-label="Instagram" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#" aria-label="LinkedIn" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Programs</h4>
              <ul>
                <li><Link href="/departments">English Mastery</Link></li>
                <li><Link href="/departments">Diploma in IT (DIT)</Link></li>
                <li><Link href="/departments">Web Development</Link></li>
                <li><Link href="/departments">Graphic Designing</Link></li>
                <li><Link href="/departments">Rigger Training</Link></li>
                <li><Link href="/departments">Computer Basics</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/about">About Academy</Link></li>
                <li><Link href="/admissions">Admissions</Link></li>
                <li><Link href="/registration">Registration</Link></li>
                <li><Link href="/courses">All Courses</Link></li>
                <li><Link href="/departments">Departments</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/verify">Verify Certificate</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Contact Info</h4>
              <div className="sf_contact">
                <span className="ti-mobile"></span>
                <h3>Phone number</h3>
                <p>+ 485 7548 8546</p>
              </div>
              <div className="sf_contact">
                <span className="ti-email"></span>
                <h3>Email Address</h3>
                <p>info@purdue-academy.edu</p>
              </div>
              <div className="sf_contact">
                <span className="ti-map"></span>
                <h3>Campus Address</h3>
                <p>Hinjal Gate Bannu City, Ameer Niazi Street</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Certificate Verification</h4>
              <p>Verify your issued course certificates and diplomas online through our student credential portal.</p>
              <Link href="/verify" className="btn_two mt-2 d-inline-block">Verify Online</Link>
            </div>
          </div>
        </div>

        <div className="row fc mt-4 pt-3 border-top border-secondary">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>&copy; {new Date().getFullYear()} Purdue Academy. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
