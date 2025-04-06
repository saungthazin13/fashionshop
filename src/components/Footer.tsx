import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-10 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-extrabold">
              Fashion<span className="text-sky-500">Shop</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Trendy fashion, exclusive styles. Elevate your wardrobe today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="border-b border-sky-500 pb-2 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {["Home", "Shop", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-300 hover:text-sky-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="border-b border-sky-500 pb-2 text-lg font-semibold">
              Contact Us
            </h3>
            <p className="mt-2 flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5 text-sky-500" /> support@fashionshop.com
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-400">
              <Phone className="h-5 w-5 text-sky-500" /> +95 123 456 789
            </p>

            {/* Social Media */}
            <div className="mt-4 flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full bg-sky-500 p-2 transition duration-300 hover:bg-sky-400"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} FashionShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
