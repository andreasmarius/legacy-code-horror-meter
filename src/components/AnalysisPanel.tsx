import React from 'react';
import { motion } from 'framer-motion';
import { HorrorFactor } from '@/types';
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaCode,
  FaCheckCircle
} from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface AnalysisPanelProps {
  factors: HorrorFactor[];
  refactorSuggestion: string;
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({
  factors,
  refactorSuggestion
}) => {
  const [showRefactor, setShowRefactor] = React.useState(false);

  const chartData = factors.map((factor) => ({
    name: factor.name.replace(/[^\w\s]/g, '').trim().substring(0, 20),
    severity: factor.severity,
    count: factor.count
  }));

  const getBarColor = (severity: number) => {
    if (severity >= 20) return '#dc2626'; // red
    if (severity >= 10) return '#ea580c'; // orange
    if (severity >= 5) return '#eab308'; // yellow
    return '#22c55e'; // green
  };

  return (
    <div className="space-y-6">
      {/* Horror Factors List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="horror-card"
      >
        <div className="flex items-center gap-3 mb-6">
          <FaExclamationTriangle className="text-3xl text-yellow-500" />
          <h3 className="text-2xl font-bold">Detected Horror Factors</h3>
        </div>

        {factors.length === 0 ? (
          <div className="text-center py-8">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
            <p className="text-xl text-green-400 font-semibold">
              No major horrors detected!
            </p>
            <p className="text-gray-400 mt-2">This code is relatively clean.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-gray-700/30 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-purple-300">
                      {factor.name}
                    </h4>
                    <p className="text-gray-300 mt-1 text-sm">
                      {factor.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-gray-400">
                        Count: <span className="font-mono text-white">{factor.count}</span>
                      </span>
                      <span className="text-xs text-gray-400">
                        Severity: <span className="font-mono text-orange-400">{factor.severity}</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      factor.severity >= 20
                        ? 'bg-red-500/20 text-red-400'
                        : factor.severity >= 10
                        ? 'bg-orange-500/20 text-orange-400'
                        : factor.severity >= 5
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {factor.severity >= 20
                      ? 'CRITICAL'
                      : factor.severity >= 10
                      ? 'HIGH'
                      : factor.severity >= 5
                      ? 'MEDIUM'
                      : 'LOW'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Chart Visualization */}
        {factors.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 bg-gray-900/50 rounded-lg"
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-4">
              Severity Distribution
            </h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #a020f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="severity" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.severity)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </motion.div>

      {/* Refactor Suggestion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="horror-card"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-bold">Modernization Suggestion</h3>
          </div>
          <button
            onClick={() => setShowRefactor(!showRefactor)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors"
          >
            {showRefactor ? 'Hide' : 'Show'} Suggestion
          </button>
        </div>

        {showRefactor && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-4 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-green-400" />
                <span className="text-sm font-semibold text-green-400">
                  Refactored TypeScript
                </span>
              </div>
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                {refactorSuggestion}
              </pre>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              💡 This is a mock suggestion. In production, this could be generated by AI.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
