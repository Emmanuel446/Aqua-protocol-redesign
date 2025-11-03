import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  // Comprehensive syntax highlighting
  const highlightCode = (code, lang) => {
    let highlighted = code;

    if (lang === 'bash') {
      // Bash/Shell highlighting
      highlighted = highlighted
        // Comments first
        .replace(/(#.*$)/gm, '<span class="text-green-400 dark:text-green-500">$1</span>')
        // Commands
        .replace(/\b(npm|yarn|git|cd|ls|mkdir|rm|cp|mv|sudo|apt|brew|install|add|remove|update|upgrade|init|start|dev|build|test)\b/g, '<span class="text-purple-400 dark:text-violet-400">$1</span>')
        // Flags
        .replace(/(\s--?[a-zA-Z-]+)/g, '<span class="text-cyan-400">$1</span>')
        // Packages
        .replace(/(@[\w\/-]+)/g, '<span class="text-emerald-400">$1</span>');
    } else {
      // JavaScript/JSX highlighting
      highlighted = highlighted
        // Multi-line comments
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-green-500 dark:text-green-500">$1</span>')
        // Single-line comments
        .replace(/(\/\/.*$)/gm, '<span class="text-green-500 dark:text-green-500">$1</span>')
        // Strings (single and double quotes)
        .replace(/(['"`])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-emerald-400 dark:text-emerald-400">$&</span>')
        // Keywords
        .replace(/\b(const|let|var|function|async|await|return|import|from|export|default|if|else|for|while|switch|case|break|continue|class|extends|new|this|super|static|try|catch|finally|throw|typeof|instanceof|in|of|delete|void|yield)\b/g, '<span class="text-purple-500 dark:text-violet-400">$1</span>')
        // Booleans and null
        .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="text-orange-400 dark:text-orange-400">$1</span>')
        // Numbers
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-400 dark:text-orange-400">$1</span>')
        // Function names
        .replace(/\b([a-z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="text-blue-400 dark:text-blue-400">$1</span>')
        // Object properties
        .replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="text-cyan-300 dark:text-cyan-300">$1</span>')
        // Object keys
        .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '<span class="text-cyan-300 dark:text-cyan-300">$1</span>:')
        // Built-in objects
        .replace(/\b(console|Math|Date|Array|Object|String|Number|Boolean|JSON|Promise|Error|RegExp|Map|Set|WeakMap|WeakSet|Symbol|Proxy|Reflect|process|window|document|navigator|localStorage|sessionStorage)\b/g, '<span class="text-yellow-400 dark:text-yellow-400">$1</span>');
    }

    return highlighted;
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs text-slate-600 dark:text-slate-500 font-mono uppercase tracking-wide">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1.5 px-2 py-1 rounded text-xs text-slate-600 dark:text-slate-400 hover:text-aqua-600 dark:hover:text-aqua-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto bg-white dark:bg-slate-950">
        <pre className="p-4 text-xs sm:text-sm leading-relaxed font-mono">
          <code
            className="block whitespace-pre text-slate-700 dark:text-slate-200"
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;