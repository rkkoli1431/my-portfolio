import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      easing: "ease-in-out", // smooth easing
      once: true, // animate only once per scroll
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_message: formData.message,
      reply_to: formData.email,
    };

    try {
      const res = await emailjs.send(
        "service_7cj1e2p",
        "template_1j4s0qo",
        templateParams,
        "fkkSW6xbMKQ52KK9K"
      );
      console.log("✅ Email sent successfully!", res.status, res.text);
      alert(`✅ Thank you ${formData.name}! Your message has been sent.`);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ EmailJS error:", err);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ===== LEFT SIDE (INFO SECTION) ===== */}
        <div
          className="space-y-8 text-gray-300"
          data-aos="fade-right" // 👈 animation direction
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let’s Work Together 🤝
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md" data-aos="fade-up">
              I’m a passionate Software Developer with 6 months of hands-on experience in building responsive and dynamic web applications.
              I’m actively seeking full-time opportunities as a Software Developer,
               while also open to freelance collaborations and exciting projects
          </p>

          {/* Contact Details */}
          <div className="space-y-5" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>{personalInfo.phone || "+91 7066677802"}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{personalInfo.location || "Mumbai, India"}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4" data-aos="fade-up" data-aos-delay="300">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* ===== RIGHT SIDE (CONTACT FORM) ===== */}
        <div
          className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-gray-700/40 transition-all hover:shadow-blue-500/10"
          data-aos="fade-left"
        >
          <h3
            className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            data-aos="fade-down"
          >
            Get In Touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-8 py-3 rounded-lg font-medium transition-all text-white shadow-md ${
                isSending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/30"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
