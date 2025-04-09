import React from "react";
import Image from "next/image";

const OurFirm = () => {
  return (
    <div className="flex-grow bg-white flex flex-col min-h-screen">
      {/* Hero Section with Mountain SVG */}
      <section className="bg-[#033347] text-white text-center py-16 px-4 mt-[100px] relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#effcfd" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <h1 className="text-4xl font-bold tracking-wide relative z-10">
          About Alpha Academy
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
          Welcome to Alpha Academy! We are committed to delivering exceptional
          services that empower individuals and organizations to achieve their
          goals and aspirations.
        </p>
      </section>

      {/* Details Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Mission Section with Lighthouse SVG */}
          <div className="relative">
            <svg className="absolute right-0 top-0 w-32 h-32 text-[#033347] opacity-10" viewBox="0 0 100 100">
              <path fill="currentColor" d="M50,0 L60,30 L40,30 Z M45,30 L55,30 L55,70 L45,70 Z M35,70 L65,70 L65,80 L35,80 Z M30,80 L70,80 L70,90 L30,90 Z M25,90 L75,90 L75,100 L25,100 Z"></path>
            </svg>
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
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 mt-[100px]">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Investment Education", 
                  desc: "Empowering clients with knowledge and insights to make informed investment decisions through comprehensive educational resources.",
                  svg: (
                    <Image
                      src="/wired-outline-453-savings-pig-hover-pinch.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                },
                { 
                  title: "Risk Management", 
                  desc: "Implementing robust risk assessment strategies to protect and optimize your investment portfolio in any market condition.",
                  svg: (
                    <Image
                      src="/wired-outline-942-driving-person-sleepy-hover-pinch.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                },
                { 
                  title: "Market Analysis", 
                  desc: "Utilizing advanced analytics and research to identify market trends and investment opportunities for optimal returns.",
                  svg: (
                    <Image
                      src="/wired-outline-153-bar-chart-hover-growth.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                },
                { 
                  title: "Client Relationships", 
                  desc: "Building strong, lasting partnerships through transparent communication and personalized investment strategies.",
                  svg: (
                    <Image
                      src="/wired-outline-955-demand-hover-click.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                },
                { 
                  title: "Crisis Management", 
                  desc: "Expert guidance and strategic planning to navigate market volatility and economic uncertainties effectively.",
                  svg: (
                    <Image
                      src="/wired-outline-678-fireman-hover-pinch.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                },
                { 
                  title: "Sustainable Growth", 
                  desc: "Focusing on long-term value creation through environmentally and socially responsible investment strategies.",
                  svg: (
                    <Image
                      src="/wired-outline-1827-growing-plant-hover-pinch.gif"
                      alt="Investment Education"
                      width={94}
                      height={94}
                      className="mb-6"
                      priority
                    />
                  )
                }
              ].map((value, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-white to-[#effcfd] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <div className="bg-white rounded-full p-4 shadow-sm">
                    {value.svg}
                  </div>
                  <h3 className="text-2xl font-bold text-[#033347] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          {/* <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "John Doe", role: "Founder & CEO", desc: "Visionary leader with 15+ years of experience.", image: "/team/doctor-image.jpg" },
                { name: "Jane Smith", role: "Head of Operations", desc: "Expert in streamlining business processes.", image: "/team/doctor-image.jpg" },
                { name: "Mike Johnson", role: "Lead Instructor", desc: "Passionate educator with innovative teaching methods.", image: "/team/doctor-image.jpg" }
              ].map((member, index) => (
                <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-w-1 aspect-h-1 relative bg-[#effcfd]">
                    <div className="w-full h-full bg-[#033347]/5 overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <svg className="w-1/2 h-1/2 text-[#033347]/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-[#033347] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#02556b] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#effcfd] text-black text-center py-16 px-4 font-serifRegular relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 w-32 h-32 text-[#033347] opacity-5" viewBox="0 0 100 100">
          <path fill="currentColor" d="M10,90 L90,90 L50,10 Z"></path>
        </svg>
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
