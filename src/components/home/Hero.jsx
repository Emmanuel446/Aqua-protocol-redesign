import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../ui/AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          

          {/* Main Heading */}
          <h1 className="text-5xl mt-16 md:mt-6 md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-white">Distributed</span>
            <br />
            <span className="text-gradient">Trust Networks</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A cryptographic framework for building verifiable, tamper-proof systems. Notarize,
            sign, witness, and verify data with mathematical certainty.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/developers"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold hover:shadow-2xl hover:shadow-aqua-500/50 transition-all flex items-center space-x-2"
            >
              <span>Explore SDK</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/docs"
              className="group px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>View Docs</span>
            </Link>
            <a
              href="https://github.com/aqua-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mb-5 -mt-10 md:-mt-3 mx-auto"
          >
            {[
              { value: '10K+', label: 'Verifications' },
              { value: '500+', label: 'Developers' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-aqua-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;