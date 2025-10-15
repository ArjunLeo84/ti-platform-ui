// RiskRegister.jsx
import React, { useState } from 'react';
import { AlertCircle, TrendingDown, BarChart3, FileText, Users, Calendar } from 'lucide-react';

const RiskRegister = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Risk Register</h1>
            <p className="text-emerald-300">Enterprise Risk Management & Compliance</p>
          </div>
        </div>
      </div>

      {/* Risk Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Risks', value: '147', trend: '-12 this month', icon: AlertCircle, color: 'emerald' },
          { label: 'Critical Risks', value: '23', trend: '-5 mitigated', icon: TrendingDown, color: 'red' },
          { label: 'Risk Score', value: '72', trend: 'Down from 85', icon: BarChart3, color: 'yellow' },
          { label: 'Compliance', value: '94%', trend: '+3% improvement', icon: FileText, color: 'green' }
        ].map((metric, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-${metric.color}-500/20 flex items-center justify-center`}>
                <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
            <div className="text-xs text-green-400">{metric.trend}</div>
          </div>
        ))}
      </div>

      {/* Risk Matrix Heatmap */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Risk Matrix</h2>
        
        <div className="grid grid-cols-6 gap-2">
          {/* Headers */}
          <div></div>
          {['Very Low', 'Low', 'Medium', 'High', 'Critical'].map((label, idx) => (
            <div key={idx} className="text-center text-xs font-semibold text-slate-400 pb-2">
              {label}
            </div>
          ))}
          
          {/* Rows */}
          {['Critical', 'High', 'Medium', 'Low', 'Very Low'].map((impact, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div className="flex items-center justify-end pr-2 text-xs font-semibold text-slate-400">
                {impact}
              </div>
              {[1, 2, 3, 4, 5].map((likelihood, colIdx) => {
                const riskLevel = (5 - rowIdx) * likelihood;
                const bgColor = 
                  riskLevel >= 15 ? 'bg-red-500' :
                  riskLevel >= 10 ? 'bg-orange-500' :
                  riskLevel >= 5 ? 'bg-yellow-500' :
                  'bg-green-500';
                
                const count = Math.floor(Math.random() * 20);
                
                return (
                  <div 
                    key={colIdx}
                    className={`${bgColor} rounded-lg p-4 text-center cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    <div className="text-2xl font-bold text-white">{count}</div>
                    <div className="text-xs text-white/80">risks</div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-slate-400">Low (1-4)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-slate-400">Medium (5-9)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-slate-400">High (10-14)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-slate-400">Critical (15-25)</span>
          </div>
        </div>
      </div>

      {/* Risk Register Table */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Active Risk Register</h2>
          <div className="flex space-x-3">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm"
            >
              <option value="all">All Categories</option>
              <option value="cyber">Cyber Security</option>
              <option value="operational">Operational</option>
              <option value="financial">Financial</option>
              <option value="compliance">Compliance</option>
            </select>
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm">
              Add New Risk
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Risk ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Description</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Impact</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Likelihood</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Risk Level</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Owner</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 'RSK-001',
                  description: 'Ransomware Attack on Critical Infrastructure',
                  category: 'Cyber Security',
                  impact: 'Critical',
                  likelihood: 'High',
                  riskLevel: 'Critical',
                  owner: 'CISO',
                  status: 'Active',
                  dueDate: '2024-12-31'
                },
                {
                  id: 'RSK-002',
                  description: 'Data Breach due to Weak Authentication',
                  category: 'Cyber Security',
                  impact: 'High',
                  likelihood: 'Medium',
                  riskLevel: 'High',
                  owner: 'Security Team',
                  status: 'Mitigating',
                  dueDate: '2024-11-15'
                },
                {
                  id: 'RSK-003',
                  description: 'Regulatory Non-Compliance (GDPR)',
                  category: 'Compliance',
                  impact: 'High',
                  likelihood: 'Medium',
                  riskLevel: 'High',
                  owner: 'Legal',
                  status: 'Active',
                  dueDate: '2024-10-30'
                },
                {
                  id: 'RSK-004',
                  description: 'Third-Party Vendor Security Weakness',
                  category: 'Operational',
                  impact: 'Medium',
                  likelihood: 'High',
                  riskLevel: 'Medium',
                  owner: 'Procurement',
                  status: 'Monitoring',
                  dueDate: '2025-01-15'
                },
                {
                  id: 'RSK-005',
                  description: 'Insider Threat - Privileged User Abuse',
                  category: 'Cyber Security',
                  impact: 'High',
                  likelihood: 'Low',
                  riskLevel: 'Medium',
                  owner: 'HR & Security',
                  status: 'Active',
                  dueDate: '2024-12-01'
                }
              ].map((risk, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono text-emerald-400">{risk.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm font-semibold text-white max-w-xs">{risk.description}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-300">{risk.category}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      risk.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {risk.impact}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.likelihood === 'High' ? 'bg-red-500/20 text-red-400' :
                      risk.likelihood === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.likelihood}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      risk.riskLevel === 'Critical' ? 'bg-red-500 text-white' :
                      risk.riskLevel === 'High' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {risk.riskLevel}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-300">{risk.owner}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      risk.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                      risk.status === 'Mitigating' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{risk.dueDate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiskRegister;