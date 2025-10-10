import React from "react";
import { Truck, Shield, Award, Star } from "lucide-react";

const WhyChooseSuswastik = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999 only",
      icon: Truck,
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      shadowColor: "shadow-green-200",
      accentColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Quality Assured",
      description: "100% pure and authentic spices with quality guarantee",
      icon: Shield,
      gradient: "from-orange-400 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      iconColor: "text-orange-600",
      shadowColor: "shadow-orange-200",
      accentColor: "bg-orange-500",
    },
    {
      id: 3,
      title: "Premium Quality",
      description: "Carefully selected spices from trusted farmers",
      icon: Award,
      gradient: "from-yellow-400 to-amber-600",
      bgGradient: "from-yellow-50 to-amber-50",
      iconColor: "text-yellow-600",
      shadowColor: "shadow-yellow-200",
      accentColor: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Customer Rated",
      description: "Trusted by thousands of satisfied customers",
      icon: Star,
      gradient: "from-blue-400 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      shadowColor: "shadow-blue-200",
      accentColor: "bg-blue-500",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .feature-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.03);
        }

        .icon-wrapper {
          position: relative;
          transition: all 0.5s ease;
        }

        .feature-card:hover .icon-wrapper {
          transform: rotate(360deg) scale(1.1);
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #f97316 0%, #eab308 50%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .feature-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          color: white;
          z-index: 10;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="decorative-circle w-96 h-96 bg-orange-300 top-0 left-0 blur-3xl floating"></div>
        <div className="decorative-circle w-96 h-96 bg-green-300 bottom-0 right-0 blur-3xl floating" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-wider text-orange-600 font-bold uppercase bg-orange-100 px-4 py-2 rounded-full">
                ✦ Why Choose Us ✦
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                Suswastik
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              At Suswastik, quality and authenticity are our top priorities —{" "}
              <span className="shimmer-text font-bold text-xl italic">
                स्वाद से बढ़कर कुछ नहीं
              </span>
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="feature-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Container */}
                  <div className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl ${item.shadowColor} transition-all duration-500 overflow-hidden`}>
                    {/* Decorative background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-20 rounded-full -ml-12 -mb-12"></div>

                    {/* Feature Badge */}
                    <div className={`feature-badge ${item.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-5">
                      {/* Icon with pulse effect */}
                      <div className="relative inline-block">
                        <div className={`pulse-ring ${item.accentColor} opacity-30`}></div>
                        <div className={`icon-wrapper w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl`}>
                          <Icon className={`h-12 w-12 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${item.gradient} transition-all duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className={`w-0 h-1 ${item.accentColor} mx-auto rounded-full group-hover:w-full transition-all duration-500`}></div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                10K+
              </div>
              <div className="text-sm text-gray-600 mt-2">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                100%
              </div>
              <div className="text-sm text-gray-600 mt-2">Pure & Authentic</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">
                4.9★
              </div>
              <div className="text-sm text-gray-600 mt-2">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                24/7
              </div>
              <div className="text-sm text-gray-600 mt-2">Support Available</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg">
              Shop Now & Experience Quality →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSuswastik;