import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us</h1>

        {/* Introduction Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg">
            Welcome to BuzzedUp, your go-to platform for insightful articles, creative ideas, and expert advice. We are a team of passionate writers, creators, and thinkers, committed to delivering engaging and informative content for our readers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to inspire and empower our readers through high-quality content that spans various topics. Whether it's tech trends, personal growth, or creative writing, we strive to provide value and spark meaningful conversations within our community.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            We envision a world where knowledge, creativity, and ideas flow freely, breaking down barriers and encouraging collaboration across cultures. We aim to be a platform that nurtures both seasoned writers and budding bloggers, giving everyone a voice.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600 text-lg">
            Our team is made up of experienced writers, content creators, and digital marketers who share a common goal—bringing you the best content possible. Each of us brings our own unique perspective and expertise, making BuzzedUp a diverse and exciting space for readers and contributors alike.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600 text-lg">
            <li>Creativity: We believe in thinking outside the box and pushing creative boundaries.</li>
            <li>Integrity: Our content is honest, transparent, and designed to provide real value.</li>
            <li>Community: We value our readers and contributors, aiming to build a supportive and inclusive environment.</li>
            <li>Innovation: We're always on the lookout for new ways to connect with our audience and improve our platform.</li>
          </ul>
        </div>

        {/* Call-to-action Section */}
        <div className="bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 text-lg mb-4">
            Whether you're a long-time reader or new to our platform, we invite you to join us on this exciting journey of exploration, creativity, and learning.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
