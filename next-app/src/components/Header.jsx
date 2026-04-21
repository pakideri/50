"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-header header-royal">
      <div className="header-sticky bg-section-royal">
        <nav id="mainNav" className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <img className="logo-100px" src="/images/logo.png" alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="desktop-menu main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/service">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/wayanad">Wayanad</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <Link className="btn-default-royal btn-highlighted-royal" href="/contact">
                  Book Now
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
