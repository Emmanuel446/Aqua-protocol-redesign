import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, PenTool, Eye, ShieldCheck } from 'lucide-react';

const FourPillars = () => {
  const pillars = [
    {
      icon: FileCheck,
      title: 'Notarization',
      description:
        'Create immutable, timestamped records of data. Prove when something existed without revealing its contents.',
      gradient: 'from-aqua-400 to-aqua-600',
      glowColor: 'aqua',
    },
    {
      icon: PenTool,
      title: 'Signing',
      description:
        'Cryptographically sign data to prove authenticity and ownership using public-key cryptography.',
      gradient: 'from-violet-400 to-violet-600',
      glowColor: 'violet',
    },
    {
      icon: Eye,
      title: 'Witnessing',
      description:
        'Distributed nodes attest to events, creating a decentralized web of trust across the network.',
      gradient: 'from-cyan-400 to-cyan-600',
      glowColor: 'cyan',
    },
    {
      icon: ShieldCheck,
      title: 'Verification',
      description:
        'Anyone can independently verify data integrity, signatures, and timestamps without trusting intermediaries.',
      gradient: 'from-emerald-400 to-emerald-600',
      glowColor: 'emerald',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Four Pillars of <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Aqua Protocol combines four fundamental cryptographic operations to create
            distributed trust networks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-aqua-500/50 transition-all cursor-pointer"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;