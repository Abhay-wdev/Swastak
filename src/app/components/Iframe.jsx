"use client";
import React from "react";

const Iframe = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Embedded Google Script Views
      </h1>

      {/* First iframe */}
      <div className="w-full max-w-5xl h-[600px] shadow-lg border rounded-xl overflow-hidden">
        <iframe
          src="https://script.google.com/macros/s/AKfycbw1hIE8tY3fYIoml_2LZhSpoLhUA9n5m3JsuHKVf2RnfVe5zN3VVbg6Y5MYalr1V0hFJQ/exec"
          title="Google Script 1"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Second iframe */}
      <div className="w-full max-w-5xl h-[600px] shadow-lg border rounded-xl overflow-hidden">
        <iframe
          src="https://script.google.com/macros/s/AKfycbzYpVK7gQEGjXnzyYOdkkmXGlqnlm8PyhNDxNoP6zvkhUnJJdilHQGVEjgQ_HPSwdzxWg/exec"
          title="Google Script 2"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
