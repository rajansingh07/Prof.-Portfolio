const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Prof. Tamal Kumar Mukherjee. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed for Academic Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
