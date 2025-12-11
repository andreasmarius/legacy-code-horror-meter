import React from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import { FaCode, FaSkull, FaGithub } from 'react-icons/fa';
import { legacySamples } from '@/mock/legacySamples';

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  translations: {
    title: string;
    placeholder: string;
    analyzeButton: string;
    analyzing: string;
    selectSample: string;
    githubUrl: string;
    githubPlaceholder: string;
    fetchingCode: string;
    fetchError: string;
  };
}

export const CodeInput: React.FC<CodeInputProps> = ({
  code,
  onCodeChange,
  onAnalyze,
  isAnalyzing,
  translations
}) => {
  const [selectedSample, setSelectedSample] = React.useState<string>('');
  const [githubUrl, setGithubUrl] = React.useState<string>('');
  const [isFetching, setIsFetching] = React.useState(false);
  const [fetchError, setFetchError] = React.useState<string>('');

  const handleSampleSelect = (sampleId: string) => {
    const sample = legacySamples.find(s => s.id === sampleId);
    if (sample) {
      onCodeChange(sample.code);
      setSelectedSample(sampleId);
    }
  };

  const fetchGithubCode = async () => {
    if (!githubUrl.trim()) return;
    
    setIsFetching(true);
    setFetchError('');
    
    try {
      // Convert GitHub URL to raw content URL
      // https://github.com/user/repo/blob/main/file.js -> https://raw.githubusercontent.com/user/repo/main/file.js
      let rawUrl = githubUrl;
      
      if (githubUrl.includes('github.com') && !githubUrl.includes('raw.githubusercontent.com')) {
        rawUrl = githubUrl
          .replace('github.com', 'raw.githubusercontent.com')
          .replace('/blob/', '/');
      }
      
      const response = await fetch(rawUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      
      const code = await response.text();
      onCodeChange(code);
      setGithubUrl('');
      setSelectedSample('');
    } catch (error) {
      setFetchError(translations.fetchError);
      console.error('Error fetching GitHub code:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="horror-card space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaCode className="text-3xl text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold">{translations.title}</h2>
            <p className="text-gray-400 text-sm">
              {translations.placeholder}
            </p>
          </div>
        </div>
        <FaSkull className="text-4xl text-red-500 animate-pulse" />
      </div>

      {/* Sample Selector */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-purple-300">
          {translations.selectSample}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {legacySamples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSampleSelect(sample.id)}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedSample === sample.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-purple-500/30 bg-gray-700/30 hover:border-purple-500/60 hover:bg-gray-700/50'
              }`}
            >
              <div className="font-semibold text-sm">{sample.title}</div>
              <div className="text-xs text-gray-400 mt-1">
                {sample.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* GitHub URL Input */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-purple-300 flex items-center gap-2">
          <FaGithub className="text-lg" />
          {translations.githubUrl}
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchGithubCode()}
            placeholder={translations.githubPlaceholder}
            className="flex-1 px-4 py-2 bg-gray-800 border-2 border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            disabled={isFetching}
          />
          <button
            onClick={fetchGithubCode}
            disabled={!githubUrl.trim() || isFetching}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <FaGithub />
            {isFetching ? translations.fetchingCode : 'Fetch'}
          </button>
        </div>
        {fetchError && (
          <p className="text-red-400 text-sm">{fetchError}</p>
        )}
      </div>

      {/* Code Editor */}
      <div className="border border-purple-500/30 rounded-lg overflow-hidden">
        <Editor
          height="400px"
          defaultLanguage="javascript"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => onCodeChange(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 }
          }}
        />
      </div>

      {/* Analyze Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onAnalyze}
        disabled={!code.trim() || isAnalyzing}
        className={`horror-button w-full py-4 text-lg font-bold flex items-center justify-center gap-3 ${
          !code.trim() || isAnalyzing
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'
        }`}
      >
        <FaSkull className={isAnalyzing ? 'animate-spin' : 'animate-bounce'} />
        {isAnalyzing ? translations.analyzing : translations.analyzeButton}
      </motion.button>

      {!code.trim() && (
        <p className="text-center text-sm text-gray-400 italic">
          Paste some code or select a sample to begin...
        </p>
      )}
    </motion.div>
  );
};
