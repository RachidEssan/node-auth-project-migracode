import React from 'react';
import logo from '../logo.svg';
import { ReactComponent as TwitterIcon } from 'bootstrap-icons/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from 'bootstrap-icons/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from 'bootstrap-icons/icons/facebook.svg';

function Footer() {
  return (
    <div className="footer container-fluid mt-auto">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src={logo} alt="" width="24" height="24" />
          </a>
          <span className="text-muted">© 2021 Identify, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/">
              <svg className="bi" width="24" height="24">
                <TwitterIcon />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <svg className="bi" width="24" height="24">
                <InstagramIcon />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <svg className="bi" width="24" height="24">
                <FacebookIcon />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
