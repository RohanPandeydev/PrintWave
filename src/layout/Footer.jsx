import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

const Footer = () => {
  return (
    <>
    
    <footer>
      <div className="f-top">
        <Container>
          <h2 className="main-title">Got to print in bulk nos?</h2>
          <h3 className="title2">Talk to us! We can get you some awesome deals</h3>

          <ul className="ftr-cntct-lst">
            <li><a href="tel: 3017365952"><i className="bi bi-headset"></i>  +1-301-736-5952</a></li>
            <li><a href="mailto:"><i className="bi bi-envelope-fill"></i>  Write to us</a></li>
          </ul>
        </Container>
      </div>
      <div className="f-bttm">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <p className="copyright">Copyright © 2024. All Rights Reserved.</p>

            <div className="d-flex align-items-center justify-content-end">
              <ul className="f-menu-lst">
                <li><Link to="#">About us</Link></li>
                <li><Link to="/Faq">FAQs</Link></li>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy</Link></li>
                <li><Link to="#">Careers</Link></li>
              </ul>
              <Link to="#" className="btn btn-outline-danger">Become a Vendor  Partner</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>

    </>
  )
}

export default Footer