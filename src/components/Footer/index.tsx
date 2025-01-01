import Link from "next/link";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#033347] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 px-4 sm:px-8">
        {/* Left Section */}
        <div className="text-center md:text-left font-serifRegular">
          <h2 className="text-2xl font-bold">Alpha Academy</h2>
          <p className="text-sm mt-2">
            Striving for excellence in everything we do.
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="w-full md:w-auto text-center md:text-left font-sans">
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/OurFirm" className="hover:text-gray-300">
                Our Firm
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Pricing/Payments" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/ContactUs" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="text-center md:text-right font-sans">
          <p className="font-bold">Contact us at:</p>
          <p className="text-sm">alphaacademy.tech1@gmail.com</p>
          <p className="text-sm">7049298061</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-600 pt-4 text-sm font-sans">
        <p>&copy; {currentYear} Alpha Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
