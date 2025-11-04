import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeveloperCTA = () => {
  const resources = [
    {
      icon: Code2,
      title: 'Quick Start',
      description: 'Get running in 5 minutes with our quickstart guide',
      link: '/developers',
      cta: 'Start Building',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Complete API reference and integration guides',
      link: '/docs',
      cta: 'Read Docs',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'View source, contribute, or report issues',
      link: 'https://github.com/aqua-protocol',
      cta: 'View Repository',
      external: true,
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
            Start Building <span className="text-gradient">Today</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to integrate distributed trust into your applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-aqua-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-slate-400 mb-6">{resource.description}</p>
                {resource.external ? (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-aqua-400 font-medium group-hover:text-aqua-300 transition-colors"
                  >
                    <span>{resource.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={resource.link}
                    className="inline-flex items-center space-x-2 text-aqua-400 font-medium group-hover:text-aqua-300 transition-colors"
                  >
                    <span>{resource.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Code Snippet Preview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-aqua-500/20 to-violet-600/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
              <code>{`import { AquaClient } from '@aqua/sdk';

                const aqua = new AquaClient();

                // Notarize data
                const proof = await aqua.notarize({
                  data: myDocument,
                  metadata: { type: 'contract' }
                });

                // Verify anytime
                const isValid = await aqua.verify(proof);`}</code>
            </pre>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default DeveloperCTA;