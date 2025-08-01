export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f1e32] to-[#0a1524] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Ordial
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We are passionate about transforming businesses through the power of AI and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3b82f6] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ordial, we believe that every business deserves to leverage the transformative power of artificial intelligence and data science. Our mission is to democratize AI by making it accessible, understandable, and actionable for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                We bridge the gap between cutting-edge research and practical business applications, ensuring that our clients not only adopt AI technologies but truly understand and own their AI journey.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#0f1e32] mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f1e32] mb-2">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f1e32] mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0f1e32] mb-2">99%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ordial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in true partnership with our clients, working together to understand challenges and co-create solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of AI and data science, continuously exploring new technologies and methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team brings together decades of experience in AI, machine learning, and data science.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Data Scientists</h3>
              <p className="text-gray-600">
                PhD-level expertise in statistics, machine learning, and advanced analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">AI Engineers</h3>
              <p className="text-gray-600">
                Full-stack developers specializing in AI model deployment and MLOps.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Business Analysts</h3>
              <p className="text-gray-600">
                Strategic thinkers who translate business needs into technical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with AI and data science.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0f1e32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1524] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}