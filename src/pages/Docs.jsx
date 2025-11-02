import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  Search,
  FileText,
  Code2,
  Boxes,
  Shield,
  Zap,
} from 'lucide-react';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Zap,
      items: [
        'Introduction',
        'Installation',
        'Quick Start',
        'Core Concepts',
        'Configuration',
      ],
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      icon: Code2,
      items: [
        'Client Setup',
        'Notarization API',
        'Signing API',
        'Witnessing API',
        'Verification API',
        'Error Handling',
      ],
    },
    {
      id: 'guides',
      name: 'Guides',
      icon: BookOpen,
      items: [
        'Document Verification',
        'Multi-Signature Setup',
        'Witness Networks',
        'Integration Patterns',
        'Best Practices',
      ],
    },
    {
      id: 'advanced',
      name: 'Advanced',
      icon: Boxes,
      items: [
        'Custom Cryptography',
        'Network Configuration',
        'Performance Optimization',
        'Self-Hosting',
      ],
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      items: [
        'Security Model',
        'Threat Analysis',
        'Audit Reports',
        'Responsible Disclosure',
      ],
    },
  ];

  const popularDocs = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with Aqua in 5 minutes',
      category: 'Getting Started',
    },
    {
      title: 'Notarization API',
      description: 'Complete reference for notarization functions',
      category: 'API Reference',
    },
    {
      title: 'Document Verification',
      description: 'Build a complete document verification system',
      category: 'Guides',
    },
    {
      title: 'Security Model',
      description: 'Understanding Aqua\'s security architecture',
      category: 'Security',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-aqua-500/10 border border-aqua-500/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-aqua-400" />
            <span className="text-sm text-aqua-400 font-medium">Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Aqua Protocol <span className="text-gradient">Docs</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Everything you need to know about building with Aqua Protocol
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-aqua-500/50 transition-all"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Popular Docs */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDocs.map((doc, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-aqua-500/50 hover:bg-slate-800/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all">
                    {doc.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aqua-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-slate-400 text-sm mb-3">{doc.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-aqua-500/10 border border-aqua-500/20 text-aqua-400 text-xs font-medium">
                  {doc.category}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Index */}
      <section className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8">Browse Documentation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-aqua-500/20 to-violet-600/20 border border-aqua-500/30 text-white'
                          : 'bg-slate-900/50 border border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2">
              {categories.map((category) => {
                if (category.id !== activeCategory) return null;
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="group flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-aqua-500/50 transition-all"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-slate-400 group-hover:text-aqua-400 transition-colors" />
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              {item}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aqua-400 group-hover:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="container mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-aqua-500/10 to-violet-600/10 border border-aqua-500/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-display font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Our community is here to help. Ask questions, share knowledge, and connect with other
            developers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-aqua-500/50 transition-all"
            >
              Join Discord Community
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-x bg-slate-800 border border-slate-700 rounded-xl font-semibold hover:bg-slate-700 transition-all"
            >
              GitHub Discussions
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Docs;