import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const StartNowModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    closeModal();
  };

  return (
    <>
      {isOpen && (
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
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  className="w-full"
                  enableSearch
                />
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
      )}
    </>
  );
};

export default StartNowModal;
