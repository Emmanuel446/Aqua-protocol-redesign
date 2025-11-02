import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  BookOpen,
  Code2,
  Github,
  Rocket,
  CheckCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import CodeBlock from '../components/ui/CodeBlock';

const Developers = () => {
  const [copiedStep, setCopiedStep] = useState(null);

  const quickstartSteps = [
    {
      id: 1,
      title: 'Install the SDK',
      description: 'Add Aqua Protocol to your project via npm or yarn',
      code: `npm install @aqua/sdk

# or using yarn
yarn add @aqua/sdk`,
      language: 'bash',
    },
    {
      id: 2,
      title: 'Initialize Aqua Client',
      description: 'Set up your Aqua client with your configuration',
      code: `import { AquaClient } from '@aqua/sdk';

// Initialize with your configuration
const aqua = new AquaClient({
  network: 'mainnet', // or 'testnet'
  apiKey: process.env.AQUA_API_KEY,
});

// Ready to use!
console.log('Aqua Client initialized:', aqua.status);`,
      language: 'javascript',
    },
    {
      id: 3,
      title: 'Notarize & Verify Data',
      description: 'Start using the four core functions immediately',
      code: `// Notarize data
const notarization = await aqua.notarize({
  data: myDocument,
  metadata: { author: 'Alice', type: 'contract' }
});

console.log('Notarized:', notarization.hash);

// Verify data integrity
const verification = await aqua.verify({
  data: myDocument,
  hash: notarization.hash
});

console.log('Valid:', verification.isValid);
console.log('Timestamp:', verification.timestamp);`,
      language: 'javascript',
    },
  ];

  const examples = [
    {
      title: 'Document Verification System',
      description: 'Build a tamper-proof document storage and verification system',
      tags: ['Notarization', 'Verification', 'React'],
      link: 'https://github.com/aqua-protocol/examples/document-verification',
    },
    {
      title: 'Multi-Signature Wallet',
      description: 'Implement witness-based multi-signature transactions',
      tags: ['Signing', 'Witnessing', 'Web3'],
      link: 'https://github.com/aqua-protocol/examples/multisig-wallet',
    },
    {
      title: 'Supply Chain Tracker',
      description: 'Track products with cryptographic proof at each step',
      tags: ['Notarization', 'Witnessing', 'IoT'],
      link: 'https://github.com/aqua-protocol/examples/supply-chain',
    },
    {
      title: 'Decentralized Voting',
      description: 'Secure voting system with verifiable results',
      tags: ['Signing', 'Verification', 'Governance'],
      link: 'https://github.com/aqua-protocol/examples/voting',
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Full Documentation',
      description: 'Complete API reference, guides, and tutorials',
      link: '/docs',
      color: 'from-aqua-500 to-aqua-600',
    },
    {
      icon: Github,
      title: 'GitHub Repository',
      description: 'View source code, report issues, and contribute',
      link: 'https://github.com/aqua-protocol',
      color: 'from-violet-500 to-violet-600',
      external: true,
    },
    {
      icon: Code2,
      title: 'Code Examples',
      description: 'Production-ready examples and starter templates',
      link: 'https://github.com/aqua-protocol/examples',
      color: 'from-cyan-500 to-cyan-600',
      external: true,
    },
  ];

  const copyToClipboard = (code, stepId) => {
    navigator.clipboard.writeText(code);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-aqua-500/10 border border-aqua-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <Rocket className="w-4 h-4 text-aqua-400" />
            <span className="text-xs sm:text-sm text-aqua-400 font-medium">Start Building</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
            Developer <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8">
            Integrate distributed trust into your applications in minutes. Simple APIs,
            powerful cryptography.
          </p>
        </motion.div>
      </section>

      {/* Quickstart Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Quickstart Guide</h2>
            <p className="text-slate-400 text-sm sm:text-base">Get up and running in 3 simple steps</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {quickstartSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl glow">
                      {step.id}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm sm:text-base">{step.description}</p>

                    <div className="relative">
                      <CodeBlock code={step.code} language={step.language} />
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < quickstartSteps.length - 1 && (
                  <div className="ml-5 sm:ml-6 mt-4 mb-4 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-aqua-500 to-violet-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Example Projects</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Learn from production-ready examples and starter templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {examples.map((example, index) => (
              <motion.a
                key={index}
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-6 hover:border-aqua-500/50 hover:bg-slate-800/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gradient transition-all pr-2">
                    {example.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-aqua-400 transition-colors flex-shrink-0" />
                </div>
                <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-aqua-500/10 border border-aqua-500/20 text-aqua-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Developer Resources</h2>
            <p className="text-slate-400 text-sm sm:text-base">Everything you need to build with Aqua Protocol</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={index}
                  href={resource.link}
                  target={resource.external ? '_blank' : '_self'}
                  rel={resource.external ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-aqua-500/50 transition-all text-center"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                    {resource.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{resource.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-aqua-500/10 to-violet-600/10 border border-aqua-500/20 rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <Terminal className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-aqua-400" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Need Help?</h2>
          <p className="text-slate-300 mb-6 sm:mb-8 text-base sm:text-lg">
            Join our developer community on Discord or check out our GitHub discussions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-aqua-500/50 transition-all"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/aqua-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all inline-flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Developers;