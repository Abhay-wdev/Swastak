import React from "react";
import { Truck, Shield, Award, Star } from "lucide-react";

const WhyChooseSuswastik = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999 only",
      icon: Truck,
      bgColor: "bg-green-100",
      hoverColor: "group-hover:bg-green-200",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      title: "Quality Assured",
      description: "100% pure and authentic spices with quality guarantee",
      icon: Shield,
      bgColor: "bg-orange-100",
      hoverColor: "group-hover:bg-orange-200",
      iconColor: "text-orange-600",
    },
    {
      id: 3,
      title: "Premium Quality",
      description: "Carefully selected spices from trusted farmers",
      icon: Award,
      bgColor: "bg-yellow-100",
      hoverColor: "group-hover:bg-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      id: 4,
      title: "Customer Rated",
      description: "Trusted by thousands of satisfied customers",
      icon: Star,
      bgColor: "bg-blue-100",
      hoverColor: "group-hover:bg-blue-200",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Why Choose <span className="text-green-600">Suswastik</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            At Suswastik, quality and authenticity are our top priorities —{" "}
            <span className="italic text-orange-600">
              स्वाद से बढ़कर कुछ नहीं
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="text-center space-y-3 sm:space-y-4 group"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${item.bgColor} rounded-full flex items-center justify-center mx-auto ${item.hoverColor} transition-all duration-300 shadow-lg`}
                >
                  <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSuswastik;
