//import { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-pink-400 font-lobster text-xl">
      <div>
        <p>&copy; Silvia Fernandez{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;