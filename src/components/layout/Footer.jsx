import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Developers', path: '/developers' },
      { name: 'Documentation', path: '/docs' },
      { name: 'About', path: '/about' },
    ],
    Resources: [
      { name: 'GitHub', href: 'https://github.com/aqua-protocol', external: true },
      { name: 'Examples', href: 'https://github.com/aqua-protocol/examples', external: true },
      { name: 'API Reference', path: '/docs' },
      { name: 'Whitepaper', href: '#', external: true },
    ],
    Community: [
      { name: 'Twitter', href: 'https://x.com/inblockio?t=P63Wjx4T93mbnOHXYi8pLQ&s=09', external: true },
      { name: 'Discord', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Contact', href: 'mailto:hello@aqua-protocol.org', external: true },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/inblockio?t=P63Wjx4T93mbnOHXYi8pLQ&s=09', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors">
      {/* Aquafier Demo CTA Section */}
      <div className="border-b border-slate-200 dark:border-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-aqua-50 to-violet-50 dark:from-aqua-500/10 dark:to-violet-600/10 border-2 border-aqua-200 dark:border-aqua-500/30 rounded-2xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-aqua-400/20 to-violet-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-violet-400/20 to-aqua-500/20 rounded-full blur-3xl -ml-16 -mb-16" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-aqua-500 to-violet-600 mb-4 sm:mb-5">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Heading */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Try Aqua Protocol Live
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
                  Experience Aquafier—our interactive demo showcasing real-time notarization, signing, and verification in action. No setup required.
                </p>

                {/* CTA Button */}
                <a
                  href="https://dev.inblock.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-violet-600 text-white font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-aqua-500/50 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Launch Aquafier Demo</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Small subtext */}
                <p className="mt-3 sm:mt-4 text-xs text-slate-600 dark:text-slate-400">
                  ⚡ Live environment • No installation • Explore all features
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aqua-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                Aqua Protocol
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 max-w-sm">
              A cryptographic framework for building distributed trust networks. 
              Secure, verifiable, and decentralized data integrity.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-aqua-600 dark:hover:text-aqua-400 hover:border-aqua-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 dark:hover:text-aqua-400 text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 dark:hover:text-aqua-400 text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} Aqua Protocol. Open source under MIT License.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-aqua-600 dark:hover:text-aqua-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua-600 dark:hover:text-aqua-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-aqua-600 dark:hover:text-aqua-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;