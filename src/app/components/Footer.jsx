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
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#ffffff] text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Flex container */}
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Company Info */}
          <div className="flex-1     ">
            <div className="flex items-center ">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
               
            /></div>
            <p className="text-sm leading-relaxed">
              स्वाद से बढ़कर कुछ नहीं - Bringing authentic Indian flavors to your kitchen. Our spices and food products are carefully selected and processed to ensure the highest quality and authentic taste.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[160px]">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-700 hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1  min-w-[220px]">
            <h3 className="text-lg font-semibold   mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
               <p
  className="text-sm hover:text-green-700 cursor-pointer"
  onClick={() => window.open("https://www.google.com/maps?q=C-109,+Nemi+Nagar,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021", "_blank")}
>
  C-109, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021
</p>

              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+916378362945" className="text-sm hover:text-green-700  transition-colors duration-300">
                  +91 6378362945
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:admin@ecomvision.in" className="text-sm hover:text-green-700  transition-colors duration-300">
                  admin@ecomvision.in
                </a>
              </div>
            </div>
          </div>

          {/* Map - spans full width below on mobile */}
          <div className="w-full mt-8 h-[250px] rounded-lg overflow-hidden shadow-lg flex-2">
            <iframe
              title="Custom Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3557.3753805200045!2d75.75136958947722!3d26.897749455694516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719746260000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {currentYear} VIRAL nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
