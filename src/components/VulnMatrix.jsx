// VulnMatrix.jsx
import React, { useState } from 'react';
import { Bug, TrendingUp, Shield, AlertTriangle, Search, Filter, Download, Clock } from 'lucide-react';

const VulnMatrix = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
            <Bug className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">VulnMatrix</h1>
            <p className="text-amber-300">Vulnerability & Exploit Intelligence</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Vulnerabilities', value: '1,847', trend: '+47 this week', icon: Bug, color: 'amber' },
          { label: 'Critical CVEs', value: '89', trend: '+12 new', icon: AlertTriangle, color: 'red' },
          { label: 'Zero-Days', value: '7', trend: '3 unpatched', icon: Shield, color: 'orange' },
          { label: 'Exploits Available', value: '456', trend: '+23 this month', icon: TrendingUp, color: 'purple' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-slate-400 mb-2">{stat.label}</div>
            <div className="text-xs text-green-400">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search by CVE ID, product, or keyword..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-amber-500"
              />
            </div>
            
            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
            >
              <option value="all">All Status</option>
              <option value="unpatched">Unpatched</option>
              <option value="patched">Patched</option>
              <option value="wontfix">Won't Fix</option>
            </select>

            <button className="px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Vulnerability Table */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-6">Vulnerability Database</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">CVE ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Vulnerability</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Severity</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">CVSS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Affected Product</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Exploit</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Published</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cve: 'CVE-2024-1234',
                  title: 'Remote Code Execution in Apache',
                  severity: 'Critical',
                  cvss: 10.0,
                  product: 'Apache HTTP Server 2.4.x',
                  exploit: 'Public',
                  status: 'Unpatched',
                  published: '2 days ago'
                },
                {
                  cve: 'CVE-2024-5678',
                  title: 'SQL Injection in WordPress Plugin',
                  severity: 'High',
                  cvss: 8.8,
                  product: 'WP Contact Form 7',
                  exploit: 'POC Available',
                  status: 'Patched',
                  published: '1 week ago'
                },
                {
                  cve: 'CVE-2024-9012',
                  title: 'Authentication Bypass in Cisco',
                  severity: 'Critical',
                  cvss: 9.8,
                  product: 'Cisco ASA',
                  exploit: 'In the Wild',
                  status: 'Unpatched',
                  published: '3 days ago'
                },
                {
                  cve: 'CVE-2024-3456',
                  title: 'Buffer Overflow in OpenSSL',
                  severity: 'High',
                  cvss: 7.5,
                  product: 'OpenSSL 3.0.x',
                  exploit: 'Theoretical',
                  status: 'Patched',
                  published: '2 weeks ago'
                },
                {
                  cve: 'CVE-2024-7890',
                  title: 'XSS in Microsoft Exchange',
                  severity: 'Medium',
                  cvss: 6.1,
                  product: 'Exchange Server 2019',
                  exploit: 'Public',
                  status: 'Patched',
                  published: '1 month ago'
                }
              ].map((vuln, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono text-amber-400">{vuln.cve}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm font-semibold text-white">{vuln.title}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      vuln.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {vuln.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg font-bold text-white">{vuln.cvss}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-300">{vuln.product}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      vuln.exploit === 'In the Wild' ? 'bg-red-500/20 text-red-400' :
                      vuln.exploit === 'Public' ? 'bg-orange-500/20 text-orange-400' :
                      vuln.exploit === 'POC Available' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {vuln.exploit}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      vuln.status === 'Unpatched' ? 'bg-red-500/20 text-red-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {vuln.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{vuln.published}</span>
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

export default VulnMatrix;