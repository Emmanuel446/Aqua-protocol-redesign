import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck, Shield, Eye, CheckCircle, Zap, Lock, GitBranch } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'
import FeatureCard from '../components/ui/FeatureCard'

const HomePage = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'Notarization',
      description: 'Timestamp and prove the existence of data at a specific point in time with cryptographic certainty.',
    },
    {
      icon: Shield,
      title: 'Signing',
      description: 'Cryptographically sign data to prove authenticity and origin with battle-tested algorithms.',
    },
    {
      icon: Eye,
      title: 'Witnessing',
      description: 'Enable third-party verification and create multi-signature trust networks effortlessly.',
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'Instantly verify signatures, timestamps, and witness attestations across your network.',
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized cryptographic operations with minimal overhead',
    },
    {
      icon: Lock,
      title: 'Battle-Tested Security',
      description: 'Built on proven cryptographic primitives and best practices',
    },
    {
      icon: GitBranch,
      title: 'Open Source',
      description: 'Fully transparent, auditable, and community-driven development',
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aqua-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-aqua-500/10 border border-aqua-500/20 rounded-full"
            >
              <span className="text-aqua-400 text-sm font-medium">
                Cryptographic Framework v1.0
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              Build Distributed
              <br />
              <span className="text-gradient glow">Trust Networks</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              A cryptographic framework for notarization, signing, witnessing, and verification. 
              Secure, verifiable, and built for developers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/developers"
                className="group px-8 py-4 bg-gradient-to-r from-aqua-600 to-violet-600 hover:from-aqua-500 hover:to-violet-500 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg shadow-aqua-500/25 hover:shadow-aqua-500/40 hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore SDK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/docs"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-aqua-500/50 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Documentation
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Battle-Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Zero Dependencies</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-aqua-400 rounded-full mx-auto"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Four Pillars Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Four Pillars of <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to build verifiable, distributed systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Aqua Section */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                Why Choose <span className="text-gradient">Aqua Protocol?</span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Traditional data verification relies on centralized authorities. Aqua Protocol 
                enables you to build decentralized trust networks with cryptographic guarantees.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-aqua-500/20 to-violet-500/20 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-aqua-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-slate-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 bg-slate-950/50 border border-slate-800/50 rounded-2xl backdrop-blur-sm">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-aqua-500/20 to-violet-500/20 rounded-2xl blur"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-lg border border-slate-800/50">
                    <span className="text-sm text-slate-400">Centralized Verification</span>
                    <span className="text-red-400 font-semibold">❌ Single Point of Failure</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-aqua-500/10 to-violet-500/10 rounded-lg border border-aqua-500/20">
                    <span className="text-sm font-medium">Aqua Protocol</span>
                    <span className="text-green-400 font-semibold">✓ Distributed Trust</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-lg border border-slate-800/50">
                    <span className="text-sm text-slate-400">Manual Audits</span>
                    <span className="text-red-400 font-semibold">❌ Time Consuming</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-aqua-500/10 to-violet-500/10 rounded-lg border border-aqua-500/20">
                    <span className="text-sm font-medium">Aqua Protocol</span>
                    <span className="text-green-400 font-semibold">✓ Instant Verification</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-lg border border-slate-800/50">
                    <span className="text-sm text-slate-400">Proprietary Systems</span>
                    <span className="text-red-400 font-semibold">❌ Closed Source</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-aqua-500/10 to-violet-500/10 rounded-lg border border-aqua-500/20">
                    <span className="text-sm font-medium">Aqua Protocol</span>
                    <span className="text-green-400 font-semibold">✓ Open & Auditable</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/5 via-transparent to-violet-500/5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Ready to Build with <span className="text-gradient">Aqua?</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Get started in minutes with our comprehensive SDK, examples, and documentation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/developers"
                className="group px-8 py-4 bg-gradient-to-r from-aqua-600 to-violet-600 hover:from-aqua-500 hover:to-violet-500 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg shadow-aqua-500/25 hover:shadow-aqua-500/40 hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://github.com/aqua-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-aqua-500/50 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View on GitHub
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { label: 'Downloads', value: '50K+' },
                { label: 'GitHub Stars', value: '2.5K+' },
                { label: 'Contributors', value: '120+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage