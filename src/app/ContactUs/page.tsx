"use client";

import Image from "next/image";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxbKR5jE3dwyuhDDE057LpBAwWLBsutW9GO2k99Mt8Ov6lY7qya_hci_FacIBkbLurRsA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors", // Use no-cors mode
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus(""); // Reset status on successful submission
        setStatus("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", feedback: "" }); // Reset the form
      } else {
        setStatus(`Submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      setStatus("Thank you! We will contact you soon.");
    }
  };

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.open(
      "mailto:alphaacademy.tech1@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#f8f7f7] pt-[100px] px-4 md:px-40 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md md:max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
          Contact Us
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 font-sans"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-md bg-[#f2f2f3]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 font-sans"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-md bg-[#f2f2f3]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 font-sans"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-md bg-[#f2f2f3]"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700 font-sans"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full mt-1 p-2 rounded-md bg-[#f2f2f3]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 w-full bg-[#033246] text-white font-mona font-semibold text-sm rounded-lg hover:bg-white hover:text-[#033246] hover:border hover:border-[#033246] transition-colors duration-300"
        >
          Submit
        </button>

        {status && (
          <p className="mt-4 text-base font-sans text-center text-green-600">
            {status}
          </p>
        )}
      </form>

      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 md:px-8">
        <Image
          src="/wired-outline-981-consultation-hover-conversation-alt.gif"
          alt="dummy image"
          height={300}
          width={300}
          loading="lazy"
          className="object-fill"
        />
       
       <h1 className="text-base md:text-2xl font-serifRegular mt-4 text-center md:text-left leading-snug">
  Bhopal <br />
  <span>Madhya Pradesh, India</span>
</h1>

        <a
          href="mailto:alphaacademy.tech1@gmail.com"
          className="text-base font-mona mt-4"
          onClick={handleEmailClick}
        >
          alphaacademy.tech1@gmail.com
        </a>
        <h3 className="font-mona text-base mt-2">+91-7049298061</h3>
      </div>
    </div>
  );
};

export default ContactUs;
