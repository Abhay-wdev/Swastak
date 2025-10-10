"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react"; 
import { SlCallEnd } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+916378362945";

  const handleCallClick = () => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      const confirmCall = window.confirm(`Call ${phoneNumber}?`);
      if (confirmCall) window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const ActionButton = ({ onClick, icon, label, bgColor }) => (
    <div className="group relative flex items-center justify-center">
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium whitespace-nowrap shadow-lg z-20 pointer-events-none">
        {label}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>

      <button
        onClick={onClick}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${bgColor} relative z-10`}
      >
        {icon}
      </button>
    </div>
  );

  return (
    <div className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-50">
      <div className="relative">
        {/* Action Buttons */}
        <div
          className={`flex flex-col gap-3 md:gap-4 items-end mb-3 md:mb-4 transition-all duration-500 transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <ActionButton
            onClick={handleWhatsAppClick}
            icon={<FaWhatsapp className="h-8 w-8 text-white" />}
            label="Chat on WhatsApp"
            bgColor="bg-green-500 hover:bg-green-600"
          />

          <ActionButton
            onClick={handleCallClick}
            icon={<SlCallEnd className="h-7 w-7 rotate-[-90deg] text-white" />}
            label="Call Us Now"
            bgColor="bg-blue-500 hover:bg-blue-600"
          />
        </div>

        {/* Main Character Toggle */}
        <div className="relative group">
          {/* Chat Bubble */}
          <div
            className={`absolute bottom-full right-0 mb-3 md:mb-4 transition-all duration-500 ${
              isOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
          >
            <div className="bg-white rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-2xl border-2 border-purple-100 relative">
              <p className="text-base md:text-lg font-medium text-gray-800 whitespace-nowrap">
                👋 How can I help you?
              </p>
              <div className="absolute -bottom-1 right-8 md:right-12">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-white rotate-45 border-r-2 border-b-2 border-purple-100" />
              </div>
            </div>
          </div>

          {/* Character Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 md:w-24 md:h-24 transition-all duration-500 transform hover:scale-110 active:scale-95"
          >
            <div className={`relative w-full h-full overflow-hidden transition-all duration-500 ${isOpen ? "scale-90" : "scale-100"}`}>
              <div className="absolute inset-0 bg-gradient-to-br" />

              <Image
                src="/images/contact.png"
                alt="Chat Character"
                width={30}
                height={30}
                className="relative cursor-pointer w-full h-full"
              />
            </div>

            {isOpen && (
              <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 bg-red-500 rounded-full p-1.5 md:p-2 shadow-lg transition-transform duration-300 hover:scale-110">
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            )}

            {!isOpen && (
              <span className="absolute inset-0 rounded-full ring-4 ring-[#FF6900]/20 animate-[ping_2s_linear_infinite]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;
