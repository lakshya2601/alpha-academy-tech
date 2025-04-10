import React from "react";
import Image from "next/image";

const OurFirm = () => {
  return (
    <div className="flex-grow bg-white flex flex-col min-h-screen">

      {/* Details Section */}
      <section className="pt-16 bg-gray-50">
        <div className="w-full mx-auto space-y-12">

          {/* Mission Section */}
          <div
            className="flex items-start justify-center w-full mx-auto space-y-12 h-[calc(100vh-70px)] relative"
            style={{
              background: 'linear-gradient(0deg, rgba(3,51,71,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          >
            <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:mt-[120px] space-y-10 md:space-y-0">
  {/* Text Section */}
  <div className="md:w-1/2 space-y-8 text-center md:text-left">
    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
      About Alpha Academy
    </h2>
    <p className="text-gray-800 md:text-white text-lg sm:text-2xl lg:text-3xl leading-relaxed">
      Welcome to Alpha Academy! We are committed to delivering exceptional services that empower individuals and organizations to achieve their goals and aspirations.
    </p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 relative z-0 flex justify-center">
    <Image
      src="/ChatGPT Image Apr 10, 2025, 08_38_38 AM.png"
      alt="Investment Solutions"
      width={600}
      height={600}
      className="object-contain rounded-2xl w-full max-w-lg sm:max-w-xl"
    />
  </div>
</div>

            {/* Motto Section */}
            <div className="absolute md:translate-y-4 bottom-0 left-0 right-0 w-full flex items-end justify-center">
              <div className="w-full text-center">
                <div className="flex flex-wrap justify-center gap-x-2">
                  {["Smarter", "Finance", "Starts", "Here."].map((word, idx) => ( 
                    <div
                      key={idx}
                      className="text-[clamp(2rem,10vw,5rem)] font-bold tracking-wide text-white leading-none md:text-8xl"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="pb-16 px-[20px] md:px-[100px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
              {[
                {
                  title: "Investment Education",
                  desc: "Empowering clients with knowledge and insights to make informed investment decisions through comprehensive educational resources.",
                  icon: "/wired-outline-453-savings-pig-hover-pinch.gif",
                },
                {
                  title: "Risk Management",
                  desc: "Implementing robust risk assessment strategies to protect and optimize your investment portfolio in any market condition.",
                  icon: "/wired-outline-942-driving-person-sleepy-hover-pinch.gif",
                },
                {
                  title: "Market Analysis",
                  desc: "Utilizing advanced analytics and research to identify market trends and investment opportunities for optimal returns.",
                  icon: "/wired-outline-153-bar-chart-hover-growth.gif",
                },
                {
                  title: "Client Relationships",
                  desc: "Building strong, lasting partnerships through transparent communication and personalized investment strategies.",
                  icon: "/wired-outline-955-demand-hover-click.gif",
                },
                {
                  title: "Crisis Management",
                  desc: "Expert guidance and strategic planning to navigate market volatility and economic uncertainties effectively.",
                  icon: "/wired-outline-678-fireman-hover-pinch.gif",
                },
                {
                  title: "Sustainable Growth",
                  desc: "Focusing on long-term value creation through environmentally and socially responsible investment strategies.",
                  icon: "/wired-outline-1827-growing-plant-hover-pinch.gif",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-white to-[#effcfd] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="bg-white rounded-full p-4 shadow-sm mb-4">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#033347] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#effcfd] text-black text-center py-16 px-4 font-serifRegular relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 w-32 h-32 text-[#033347] opacity-5" viewBox="0 0 100 100">
          <path fill="currentColor" d="M10,90 L90,90 L50,10 Z" />
        </svg>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8">
          Be part of a community that values growth, innovation, and collaboration. Together, we can create a brighter future.
        </p>
        <a href="/ContactUs">
          <button className="px-6 sm:px-8 py-3 bg-[#02556b] text-white text-base sm:text-lg rounded-md shadow-md hover:bg-[#033347] transition-all">
            Contact Us Today
          </button>
        </a>
      </section>
    </div>
  );
};

export default OurFirm;
