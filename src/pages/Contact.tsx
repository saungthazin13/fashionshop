import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gray-100 px-6 py-16 md:px-20">
      <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">
        Contact Us
      </h2>
      <p className="mx-auto max-w-2xl text-center text-gray-600">
        Have any questions? We'd love to hear from you! Reach out to us via the
        form below or through our social media.
      </p>

      {/* Contact Form */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">
        <form className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>
          <button className="w-full rounded-lg bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-600">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-sky-500" />
            <p className="text-gray-700">123 Fashion Street, Yangon,Myanmar</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-sky-500" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-sky-500" />
            <p className="text-gray-700">support@fashionshop.com</p>
          </div>

          {/* Social Media */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-sky-500 hover:text-sky-600">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
