import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="text-white text-center mt-16 px-4 sm:px-8 lg:px-16">
      <h4 className="heading_4">CONTACT US</h4>
      <p className="text-[#f6f6f6] mt-2 text-sm sm:text-base">
        Consign offers a number of pricing plans to help you find one that fits your business needs best
      </p>

      {/* Form Inputs */}
      <div className="flex flex-wrap gap-6 mt-8">
        {/* Name Input */}
        <div className="flex flex-col w-full sm:w-[48%] text-left">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b-2 border-primary bg-transparent focus:outline-none focus:border-yellow-500 transition-all duration-300 p-2"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col w-full sm:w-[48%] text-left">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b-2 border-primary bg-transparent focus:outline-none focus:border-yellow-500 transition-all duration-300 p-2"
            
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mt-6">
        {/* Phone Number Input */}
        <div className="flex flex-col w-full sm:w-[48%] text-left">
          <label htmlFor="phone" className="text-sm font-medium mb-2">
            Phone No
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="border-b-2 border-primary bg-transparent focus:outline-none focus:border-yellow-500 transition-all duration-300 p-2"
          />
        </div>

        {/* Subject Input */}
        <div className="flex flex-col w-full sm:w-[48%] text-left">
          <label htmlFor="subject" className="text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border-b-2 border-primary bg-transparent focus:outline-none focus:border-yellow-500 transition-all duration-300 p-2"
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="flex flex-col w-full text-left mt-6">
        <label htmlFor="message" className="text-sm font-medium mb-2">
          Message*
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="border-b-2 border-primary bg-transparent focus:outline-none focus:border-yellow-500 transition-all duration-300 p-2 h-[180px]"
        />
      </div>

      {/* Submit Button */}
      <div className="w-full text-center sm:text-left mt-8">
        <button className="bg-primary text-black w-[120px] h-[48px] hover:bg-yellow-500 transition font-semibold">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
