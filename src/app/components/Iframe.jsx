"use client";

import { useEffect, useState } from "react";

export default function Iframe({
  src = "https://script.google.com/macros/s/AKfycbw1hIE8tY3fYIoml_2LZhSpoLhUA9n5m3JsuHKVf2RnfVe5zN3VVbg6Y5MYalr1V0hFJQ/exec",
  title = "Embedded App",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // If iframe hasn't loaded within 6s, assume it might be blocked/unavailable and show fallback.
    const timeout = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [loaded]);

  return (
    <div className={`w-full ${className}`}>
      {/* Notice: some sites (including certain Google Apps Script deployments) may disallow embedding via X-Frame-Options.
          If that happens the iframe won't render — the fallback link below will appear. */}
      <div className="relative w-full bg-gray-50 rounded-md overflow-hidden shadow-sm">
        {!failed && (
          <iframe
            title={title}
            src={src}
            onLoad={() => setLoaded(true)}
            // don't set sandbox unless you specifically need it — sandbox can further restrict functionality
            className="w-full h-[60vh] md:h-[80vh] border-0 block"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Fallback message / link */}
        {failed && (
          <div className="p-6 text-center">
            <p className="mb-4 text-gray-700">
              Unable to display the embedded page here. It may be blocked from being embedded in an iframe.
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Open the page in a new tab
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
