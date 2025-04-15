import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/italomoreira9211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./footer/linkedin-icon.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a
            href="https://www.instagram.com/advitalomoreira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./footer/instagram-icon.svg"
              alt="Instagram"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a
            href="https://www.facebook.com/italo.henrique.94801/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./footer/facebook-icon.svg"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
        </div>
        <p className="text-center text-sm tracking-widest">
          &copy;  Dr. Italo Moreira. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
