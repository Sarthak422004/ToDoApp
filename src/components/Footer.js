import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const creatorName = 'Sarthak';

  return (
    <footer className="mt-[200px] text-center py-4 bg-gray-800 text-white uppercase ">
      <p>
       copyright &copy; {currentYear} || created by {creatorName}
          </p>
          
    </footer>
  );
};

export default Footer;
