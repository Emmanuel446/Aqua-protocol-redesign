import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Globe,
  Zap,
  Lock,
  GitBranch,
  Heart,
  Mail,
  Github,
  Twitter,
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust Through Cryptography',
      description:
        'We believe trust should be built on mathematical certainty, not institutional authority. Cryptographic proofs create verifiable truth.',
      color: 'from-aqua-500 to-aqua-600',
    },
    {
      icon: GitBranch,
      title: 'Open Source Forever',
      description:
        'Aqua Protocol is and will always be open source. Transparency in code creates transparency in trust.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Users,
      title: 'Distributed by Design',
      description:
        'No single point of failure, no central authority. Trust is distributed across a network of independent witnesses.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Developer First',
      description:
        'Simple APIs that hide complexity. We make cryptographic trust accessible to every developer.',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Verifications Daily' },
    { value: '500+', label: 'Active Developers' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'Open', label: 'Source' },
  ];

  const team = [
    {
      role: 'Mission',
      description:
        'To make distributed trust networks accessible to every developer and organization, enabling a more transparent and verifiable digital world.',
    },
    {
      role: 'Vision',
      description:
        'A future where data integrity is cryptographically guaranteed, where trust is distributed, and where verification is instant and universal.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient">Aqua Protocol</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Aqua Protocol is a cryptographic framework for building distributed trust networks.
            We're creating infrastructure that makes data verification, authenticity, and
            integrity accessible to everyone.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                {item.role}
              </h3>
              <p className="text-slate-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide everything we build</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-aqua-500/50 transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-aqua-500/10 to-violet-600/10 border border-aqua-500/20 rounded-2xl p-12">
            <div className="text-center mb-8">
              <Lock className="w-12 h-12 mx-auto mb-4 text-aqua-400" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Built on Proven Cryptography
              </h2>
              <p className="text-slate-300">
                Aqua Protocol leverages industry-standard cryptographic primitives
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['SHA-256', 'Ed25519', 'Merkle Trees', 'ECDSA'].map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-4"
                >
                  <div className="text-white font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center"
          >
            <Heart className="w-12 h-12 mx-auto mb-6 text-red-400" />
            <h2 className="text-3xl font-display font-bold mb-4">Open Source & Community</h2>
            <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Aqua Protocol is open source and community-driven. We believe that trust
              infrastructure should be transparent, auditable, and owned by everyone who uses it.
            </p>
            <a
              href="https://github.com/aqua-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-aqua-500/50 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:hello@aqua-protocol.org"
              className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-aqua-500/50 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>hello@aqua-protocol.org</span>
            </a>
            <a
              href="https://twitter.com/aquaprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-aqua-500/50 transition-all"
            >
              <Twitter className="w-5 h-5" />
              <span>@aquaprotocol</span>
            </a>
            <a
              href="https://github.com/aqua-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-aqua-500/50 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;