import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#033347] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
        <div className="mb-6 md:mb-0 font-serifRegular">
          <h2 className="text-2xl font-bold">Alpha academy</h2>
          <p className="text-sm mt-2">
            Striving for excellence in everything we do.
          </p>
        </div>

        <nav className="mb-6 md:mb-0 w-full md:w-auto -translate-x-16 font-sans">
          <ul className="grid grid-cols-1 gap-2 text-center md:text-left">
            <li>
              <a href="/ " className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                Our Firm
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="/ContactUs" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center md:text-right font-sans">
          <p className="text-sm">Contact us at:</p>
          <p className="font-bold">Email here</p>
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

      <div className="mt-8 text-center border-t border-gray-600 pt-4 text-sm font-sans">
        <p>&copy; {currentYear} Alpha Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
