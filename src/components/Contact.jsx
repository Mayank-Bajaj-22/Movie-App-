import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white px-6 md:px-20 py-16 overflow-y-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        Contact <span className="text-[#6556cd]">Us</span>
      </h1>
      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-14 leading-relaxed">
        Have questions, suggestions, or just want to talk about movies?  
        We’d love to hear from you! Fill out the form below or reach us on social media.
      </p>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-zinc-800">
        <form className="space-y-7">
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wide">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3.5 rounded-md bg-zinc-800/90 text-white placeholder-zinc-500 
              focus:outline-none focus:ring-2 focus:ring-[#6556cd] focus:ring-offset-2 focus:ring-offset-zinc-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3.5 rounded-md bg-zinc-800/90 text-white placeholder-zinc-500 
              focus:outline-none focus:ring-2 focus:ring-[#6556cd] focus:ring-offset-2 focus:ring-offset-zinc-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 tracking-wide">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3.5 rounded-md bg-zinc-800/90 text-white placeholder-zinc-500 resize-none 
              focus:outline-none focus:ring-2 focus:ring-[#6556cd] focus:ring-offset-2 focus:ring-offset-zinc-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6556cd] hover:bg-[#4b44b6] transition-colors duration-300 p-3.5 rounded-md font-semibold shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-6 tracking-wide">Connect with us</h2>
        <div className="flex justify-center flex-wrap gap-8 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <i className="ri-twitter-fill"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1877F2] transition-transform transform hover:scale-110"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E1306C] transition-transform transform hover:scale-110"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="mailto:support@movieapp.com"
            className="hover:text-[#EA4335] transition-transform transform hover:scale-110"
          >
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </div>

      {/* Developer Personal Links */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-6 tracking-wide">Find me on</h2>
        <div className="flex justify-center flex-wrap gap-8 text-2xl">
          <a
            href="https://www.linkedin.com/in/mayank-bajaj-439988309/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0A66C2] transition-transform transform hover:scale-110"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://github.com/Mayank-Bajaj-22"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F0F6FC] transition-transform transform hover:scale-110"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://x.com/MayankBajaj22"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12 pb-10">
        <Link
          to="/"
          className="text-[#6556cd] hover:text-[#4b44b6] transition font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
