// /* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// components/PricingSection.tsx
import { CheckCircle, Gem, User, Users } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 19,
    icon: <User size={48} className="text-red-500 mb-4" />,
    features: [
      "Single User",
      "5GB Storage",
      "Basic Support",
      "Community Access",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 49,
    icon: <Users size={48} className="text-red-500 mb-4" />,
    features: [
      "Up to 5 Users",
      "50GB Storage",
      "Priority Support",
      "Community Access",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 99,
    icon: <Gem size={48} className="text-red-500 mb-4" />,
    features: [
      "Unlimited Users",
      "500GB Storage",
      "24/7 Premium Support",
      "Advanced Tools",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Plan</h2>
        <p className="text-gray-600 mb-12">
          Choose a pricing plan that fits your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border-2 p-8 bg-white shadow-md transition duration-300 ${
                plan.highlighted
                  ? "border-red-500 shadow-xl scale-105"
                  : "border-gray-200 hover:border-red-400 hover:shadow-lg"
              }`}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-all z-0" />

              <div className="relative z-10 flex flex-col items-center">
                {plan.icon}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">
                  ${plan.price}
                  <span className="text-base text-gray-500 font-medium">
                    /mo
                  </span>
                </div>
                <ul className="text-gray-700 space-y-2 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
