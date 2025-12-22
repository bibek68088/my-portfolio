const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-yellow-500 dark:bg-gray-900 text-gray-900 dark:text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-5 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Bibek Tamang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
