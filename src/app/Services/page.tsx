import { MainLogo } from "@/components/Icons";
import React from "react";

const Services = () => {
  return (
    <div className="flex-grow bg-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#033347] text-white text-center py-16 px-4 mt-[100px]">
        <h1 className="text-4xl font-bold tracking-wide">Our Services</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore the wide range of services we offer to empower individuals and
          organizations to achieve their full potential.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50 ">
        <div className="flex justify-center w-full h-[38px] mb-[40px]">
          <MainLogo />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service Cards */}
          {[
            {
              title: "Consulting",
              description:
                "Our expert consulting services provide tailored solutions to help you overcome challenges and achieve your goals.",
            },
            {
              title: "Training",
              description:
                "Engage in comprehensive training programs designed to develop skills and unlock potential in various fields.",
            },
            {
              title: "Technology Solutions",
              description:
                "Leverage cutting-edge technology solutions tailored to enhance productivity and drive success.",
            },
            {
              title: "Project Management",
              description:
                "From planning to execution, our project management expertise ensures seamless delivery and measurable results.",
            },
            {
              title: "Financial Advisory",
              description:
                "Make informed financial decisions with our expert advisory services designed for growth and sustainability.",
            },
            {
              title: "Custom Solutions",
              description:
                "We create bespoke solutions that align with your unique needs and objectives, ensuring optimal outcomes.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#effcfd] text-black text-center py-16 px-4 font-serifRegular">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Let us help you unlock new opportunities and achieve remarkable
          results with our expert services.
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

export default Services;
