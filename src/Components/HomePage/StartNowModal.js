import React, { useEffect, useState } from "react";

const StartNowModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-80">
      <div className="bg-white shadow-lg max-w-sm w-full relative justify-self-center top-20 min-w-[398px]">
        {/* Modal header */}
        <div className="flex justify-between items-center p-4 h-[68px] bg-[#f5f5f5]">
          <h2 className="text-2xl text-inherit font-medium">Get Skilled</h2>
          <button onClick={closeModal} className="text-2xl font-normal">
            X
          </button>
        </div>

        {/* Modal form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-8">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-[#33475b]"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-[3px] outline-0 bg-[#f5f8fa]"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-base font-medium text-[#33475b]"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value="91"
                className="w-16 p-2 border border-gray-300 outline-0 bg-[#f5f8fa] rounded-[3px]"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 block w-full p-2 border border-gray-300 rounded-[3px] outline-0 bg-[#f5f8fa]"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-[#33475b]"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-[3px] outline-0 bg-[#f5f8fa]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="font-bold text-base px-6 py-[14px] uppercase bg-[#1554BB] text-white p-2 rounded-[3px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartNowModal;
