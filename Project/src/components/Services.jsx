function Services() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Services</h1>

        {/* Content Creation Service */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Content Creation</h2>
          <p className="text-gray-600 text-lg">
            Our team of skilled writers delivers high-quality blog posts, articles, and content for a wide range of topics. We create engaging and informative content to help you grow your audience.
          </p>
        </div>

        {/* Guest Blogging Service */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Guest Blogging</h2>
          <p className="text-gray-600 text-lg">
            Join our community of guest bloggers and share your expertise on our platform. Get exposure, increase your readership, and grow your personal brand.
          </p>
        </div>

        {/* SEO Optimization Service */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">SEO Optimization</h2>
          <p className="text-gray-600 text-lg">
            We provide top-notch SEO services to ensure your blog ranks higher in search engines. Our experts will optimize your content and website to improve visibility and drive traffic.
          </p>
        </div>

        {/* Social Media Promotion */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Social Media Promotion</h2>
          <p className="text-gray-600 text-lg">
            Leverage the power of social media with our promotion services. We help distribute your blog content across platforms like Instagram, Facebook, Twitter, and LinkedIn to engage a wider audience.
          </p>
        </div>

        {/* Blog Monetization Consultation */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Blog Monetization Consultation</h2>
          <p className="text-gray-600 text-lg">
            We guide you through the process of monetizing your blog, from setting up ads to building partnerships. Turn your passion for blogging into a revenue stream.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
