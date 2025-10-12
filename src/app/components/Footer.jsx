"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Cart", href: "/cart" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
   
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_suswastik/?igsh=Mmh3czBpbWE5dDU1&utm_source=qr#" },
     
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid container - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - takes full width on mobile, spans 2 cols on xl */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={120}
                height={40}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              स्वाद से बढ़कर कुछ नहीं - Bringing authentic Indian flavors to your kitchen. Our spices and food products are carefully selected and processed to ensure the highest quality and authentic taste.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-green-700 hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-600" />
                <p
                  className="text-sm text-gray-700 hover:text-green-700 cursor-pointer transition-colors duration-300"
                  onClick={() => window.open("https://maps.google.com/?q=26.821970,75.755638", "_blank")}
                >
                  P.No.8, S.No.5, Ground Floor, Naina Vihar, Rampura Road, Sanganer, Jaipur-302029
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-gray-600" />
                <a href="tel:+919414545230" className="text-sm text-gray-700 hover:text-green-700 transition-colors duration-300">
                  +91  9414545230
                  
                </a>
                <br />
                 <a href="tel:+919414446467" className="text-sm text-gray-700 hover:text-green-700 transition-colors duration-300">
                  +91  9414446467
                  
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-gray-600" />
                <a href="mailto:Suswastikspices@gmail.com" className="text-sm text-gray-700 hover:text-green-700 transition-colors duration-300">
                  Suswastikspices@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map - full width below all sections */}
        <div className="w-full mt-12 h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
          <iframe
       
            title="Custom Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3384.391397522732!2d75.75306307543633!3d26.82196997670136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ5JzE5LjEiTiA3NcKwNDUnMjAuMyJF!5e1!3m2!1sen!2sin!4v1760097962969!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">© {currentYear} VIRAL nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;