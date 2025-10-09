import React from 'react';
import { Award, Star, Percent, Truck } from 'lucide-react';

const lucideIcons = {
  Award,
  Star,
  Percent,
  Truck,
};

const UspRibbonSection = () => {
  const uspItems = [
    {
      id: 1,
      iconName: "Award",
      title: "100% Satisfaction",
      subtitle: "Try it to love it!",
      badgeBgColorClass: "bg-green-100",
      iconColorClass: "text-green-600",
    },
    {
      id: 2,
      iconName: "Star",
      title: "100% Genuine Products",
      subtitle: "Guaranteed quality",
      badgeBgColorClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600",
    },
    {
      id: 3,
      iconName: "Percent",
      title: "Membership Discounts",
      subtitle: "",
      badgeBgColorClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
    },
    {
      id: 4,
      iconName: "Truck",
      title: "Free Shipping",
      subtitle: "On orders above Rs 999/-",
      badgeBgColorClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
    },
  ];

  const renderIcon = (name) => {
    const IconComponent = lucideIcons[name];
    return IconComponent ? <IconComponent className="w-10 h-10 md:w-12 md:h-12" /> : null;
  };

  return (
    <section className="usp-ribbon-section mt-0 pt-0">
      {/* 🔸 Running Ribbon */}
      <div className="bg-orange-500 text-white py-3 overflow-hidden whitespace-nowrap relative">
        <div className="animate-scrollText inline-block">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="mx-4 text-lg font-semibold">
              ❤️ Zone of Spices
            </span>
          ))}
        </div>
      </div>

      {/* 🔸 USP Items */}
      <div className="container-custom mt-8 pb-8 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {uspItems.map((item) => (
            <div key={item.id} className="text-center flex flex-col items-center space-y-3">
              <div
                className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center ${item.badgeBgColorClass} relative overflow-hidden group`}
                style={{ borderRadius: '45% 55% 60% 40% / 40% 50% 50% 60%' }}
              >
                <div className={`p-2 ${item.iconColorClass} group-hover:scale-110 transition-transform duration-300`}>
                  {renderIcon(item.iconName)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspRibbonSection;
