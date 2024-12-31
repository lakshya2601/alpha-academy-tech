"use client";
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
      // const response = await fetch(
      //   "https://script.google.com/macros/s/AKfycbxbKR5jE3dwyuhDDE057LpBAwWLBsutW9GO2k99Mt8Ov6lY7qya_hci_FacIBkbLurRsA/exec",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );
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
      setStatus(`Thank you! We will contact you soon.`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
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
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
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
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
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
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows={4}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition-colors"
        >
          Submit
        </button>

        {status && (
          <p className="mt-4 text-sm text-center text-green-600">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
