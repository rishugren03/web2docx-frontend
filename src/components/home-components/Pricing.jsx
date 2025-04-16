import React from "react";
import { Check, Zap, Star, Infinity as Unlimited } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Great for students and light use",
      conversions: "10 conversions/day",
      cta: "Get Started",
      popular: false,
      features: [
        "Basic HTML to PDF/image conversions",
        "Access via web interface",
        "Email support (48hr response time)",
      ],
    },
    {
      name: "Pro",
      price: "$9",
      description: "For regular users and small projects",
      conversions: "Up to 3,000 conversions/month",
      cta: "Subscribe",
      popular: true,
      features: [
        "All Free features",
        "API access",
        "Faster conversion queue",
        "Email support (24hr response time)",
      ],
    },
    {
      name: "Pro Max",
      price: "$19",
      description: "For teams or heavier monthly usage",
      conversions: "Up to 10,000 conversions/month",
      cta: "Subscribe",
      popular: false,
      features: [
        "All Pro features",
        "Higher usage limits",
        "Priority support (within 12 hours)",
        "Early access to new features",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plans for every stage of your growth. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-indigo-500 shadow-xl"
                  : "border border-gray-100 shadow-md"
              } bg-white`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.name === "Pro Max" && (
                    <Unlimited className="w-5 h-5 text-indigo-600" />
                  )}
                  {plan.name === "Pro" && (
                    <Zap className="w-5 h-5 text-indigo-600" />
                  )}
                  {plan.name === "Free" && (
                    <Star className="w-5 h-5 text-indigo-600" />
                  )}
                </div>

                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>

                <p className="flex items-center gap-2 text-gray-700 mb-8">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>{plan.conversions}</span>
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  }`}>
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
