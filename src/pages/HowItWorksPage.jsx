import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, PenTool, Eye, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';
import CodeBlock from '../components/ui/CodeBlock';

const HowItWorks = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Notarization',
      icon: FileCheck,
      color: 'from-aqua-500 to-aqua-600',
      description: 'Create tamper-proof records of data at specific points in time',
      details:
        'Aqua Protocol uses cryptographic hashing to create immutable timestamps. Each piece of data receives a unique fingerprint that cannot be altered without detection.',
      code: `import { notarize } from '@aqua/sdk';

const data = { 
  document: "contract.pdf",
  timestamp: Date.now() 
};

const notarization = await notarize(data);
console.log(notarization.hash);
// Output: 0x7f83b1657ff1fc53b92dc...`,
    },
    {
      id: 2,
      title: 'Signing',
      icon: PenTool,
      color: 'from-violet-500 to-violet-600',
      description: 'Cryptographically sign data to prove authenticity and ownership',
      details:
        'Digital signatures ensure that data comes from a verified source. Using public-key cryptography, Aqua enables non-repudiable proof of authorship.',
      code: `import { sign } from '@aqua/sdk';

const privateKey = process.env.AQUA_PRIVATE_KEY;
const message = "Approve transfer of 1000 tokens";

const signature = await sign(message, privateKey);
console.log(signature);
// Signature verified and cryptographically bound`,
    },
    {
      id: 3,
      title: 'Witnessing',
      icon: Eye,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Distributed nodes attest to the validity of transactions',
      details:
        'Witness nodes validate and record events across the network. This creates a distributed web of trust where multiple independent parties verify the same data.',
      code: `import { witness } from '@aqua/sdk';

const event = {
  type: "data_upload",
  hash: "0x7f83b1657...",
  timestamp: Date.now()
};

const witnesses = await witness(event, {
  required: 3,
  timeout: 5000
});

console.log(\`Confirmed by \${witnesses.length} nodes\`);`,
    },
    {
      id: 4,
      title: 'Verification',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Verify the integrity and authenticity of any data point',
      details:
        'Anyone can verify data without needing to trust a central authority. Cryptographic proofs allow independent validation of signatures, timestamps, and witness attestations.',
      code: `import { verify } from '@aqua/sdk';

const result = await verify({
  data: originalData,
  signature: signature,
  witnesses: witnessProofs
});

if (result.valid) {
  console.log("✓ Data integrity verified");
  console.log(\`Signed by: \${result.signer}\`);
  console.log(\`Witnessed by: \${result.witnesses.length} nodes\`);
}`,
    },
  ];

  const flowSteps = [
    { label: 'Create Data', description: 'Application generates or receives data' },
    { label: 'Notarize', description: 'Hash and timestamp the data' },
    { label: 'Sign', description: 'Cryptographically sign with private key' },
    { label: 'Witness', description: 'Distribute to witness nodes' },
    { label: 'Verify', description: 'Anyone can verify integrity' },
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
            How <span className="text-gradient">Aqua Protocol</span> Works
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            A four-pillar cryptographic framework that ensures data integrity, authenticity, and
            distributed trust
          </p>
        </motion.div>
      </section>

      {/* Flow Diagram */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            The Aqua Flow
          </h2>
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden md:flex items-center justify-between">
              {flowSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl mb-4 glow">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{step.label}</h3>
                    <p className="text-sm text-slate-400 text-center">{step.description}</p>
                  </motion.div>
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-aqua-400 mx-4 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Flow */}
            <div className="md:hidden space-y-6">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.label}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts - Expandable Cards */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Core Concepts
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedCard === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : step.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-800"
                  >
                    <div className="p-6 space-y-6">
                      <p className="text-slate-300 leading-relaxed">{step.details}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                          Code Example
                        </h4>
                        <CodeBlock code={step.code} language="javascript" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-aqua-500/10 to-violet-600/10 border border-aqua-500/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Build with Aqua?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Start integrating distributed trust into your applications today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/developers"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-aqua-500/50 transition-all"
            >
              View Quickstart Guide
            </a>
            <a
              href="/docs"
              className="px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all"
            >
              Read Full Documentation
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HowItWorks;