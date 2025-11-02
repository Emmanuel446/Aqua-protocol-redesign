import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs text-slate-600 dark:text-slate-500 font-mono uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-400 hover:text-aqua-600 dark:hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content - WITH HORIZONTAL SCROLL */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="text-slate-800 dark:text-slate-300 font-mono block whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;