import React from "react";

const OurFirm = () => {
  return (
    <div className="flex-grow bg-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#033347] text-white text-center py-16 px-4 mt-[100px]">
        <h1 className="text-4xl font-bold tracking-wide">
          About Alpha Academy
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to Alpha Academy! We are committed to delivering exceptional
          services that empower individuals and organizations to achieve their
          goals and aspirations.
        </p>
      </section>

      {/* Details Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-12 ">
          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg text-center mb-10">
              To deliver innovative solutions and create value for our clients,
              fostering growth and success in a constantly evolving world.
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 mt-[100px]">
              Our Values
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside px-4">
              <li>
                <span className="font-semibold">Integrity:</span> Upholding the
                highest standards of honesty and ethics.
              </li>
              <li>
                <span className="font-semibold">Innovation:</span> Embracing
                creativity and forward-thinking strategies.
              </li>
              <li>
                <span className="font-semibold">Collaboration:</span> Working
                together to achieve common goals.
              </li>
              <li>
                <span className="font-semibold">Excellence:</span> Striving for
                the best in everything we do.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#effcfd] text-black text-center py-16 px-4 font-serifRegular">
        <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Be part of a community that values growth, innovation, and
          collaboration. Together, we can create a brighter future.
        </p>
        <a href="/ContactUs">
          <button className="px-8 py-3 bg-[#02556b] text-white text-lg rounded-md shadow-md hover:bg-[#033347] transition-all">
            Contact Us Today
          </button>
        </a>
      </section>
    </div>
  );
};

export default OurFirm;
