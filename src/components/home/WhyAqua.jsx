import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const WhyAqua = () => {
  const comparison = {
    traditional: [
      { text: 'Centralized authorities', bad: true },
      { text: 'Single points of failure', bad: true },
      { text: 'Opaque processes', bad: true },
      { text: 'Trust required', bad: true },
      { text: 'Vendor lock-in', bad: true },
    ],
    aqua: [
      { text: 'Distributed verification', bad: false },
      { text: 'Redundant witness network', bad: false },
      { text: 'Cryptographic transparency', bad: false },
      { text: 'Mathematical certainty', bad: false },
      { text: 'Open source forever', bad: false },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient">Aqua Protocol</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Move beyond traditional trust models. Build on cryptographic certainty.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 border border-red-900/30 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-300">Traditional Approach</h3>
              </div>
              <ul className="space-y-4">
                {comparison.traditional.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Aqua Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-aqua-500/10 to-violet-600/10 border border-aqua-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Aqua Protocol</h3>
              </div>
              <ul className="space-y-4">
                {comparison.aqua.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-aqua-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              title: 'No Single Point of Failure',
              description: 'Distributed witness network ensures data is verified by multiple independent nodes',
            },
            {
              title: 'Cryptographic Proof',
              description: 'Mathematical certainty replaces institutional trust and manual verification',
            },
            {
              title: 'Always Verifiable',
              description: 'Anyone can independently verify data integrity without needing special access',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-900/50 border border-slate-800 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAqua;