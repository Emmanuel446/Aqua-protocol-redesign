import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

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
      { name: 'Twitter', href: 'https://twitter.com/aquaprotocol', external: true },
      { name: 'Discord', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Contact', href: 'mailto:hello@aqua-protocol.org', external: true },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aqua-protocol', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/aquaprotocol', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@aqua-protocol.org', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 transition-colors">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
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
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm mb-6 max-w-sm">
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
                  className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-center text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-aqua-400 hover:border-aqua-500/50 transition-all"
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
              <h3 className="text-white dark:text-white light:text-slate-900 font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-aqua-400 text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-aqua-400 text-sm transition-colors"
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
        <div className="pt-8 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 dark:text-slate-500 light:text-slate-600 text-sm">
            © {currentYear} Aqua Protocol. Open source under MIT License.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-500 light:text-slate-600">
            <a href="#" className="hover:text-aqua-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-aqua-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;