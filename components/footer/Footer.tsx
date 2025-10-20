import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaTimes } from 'react-icons/fa';

function Footer() {
    return (
        <section className="bgcolor">
            <div className="container">
                <div className='footer-section'>
                    <div className="footer-left">
                        <div className="footer-logo">
                            <Image src="/images/Footer-logo.png" alt="Company Logo" width={500} height={500} />
                        </div>
                        <div className="footer-social-icons">
                            <a href="#" aria-label="Close"><FaTimes /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Topics</h3>
                        <ul>
                            <li><a href="#">News & Insights</a></li>
                            <li><a href="#">Industry & Regulation</a></li>
                            <li><a href="#">Expert Voices</a></li>
                            <li><a href="#">Podcasts</a></li>
                            <li><a href="#">Partnerships</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Helpful</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Police</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h2>Subscribe to our newsletter</h2>
                        <Link href='#'>
                            <button className="footer-newsletter-button">SUBSCRIBE</button>
                        </Link>
                    </div>


                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 All rights reserved. Powered by <a href="#">Vanguard Ventures</a>.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;