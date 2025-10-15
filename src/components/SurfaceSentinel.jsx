// SurfaceSentinel.jsx
import React, { useState, useEffect } from 'react';
import { Globe, Wifi, Server, Shield, AlertTriangle, CheckCircle, Activity, Zap, Search, Filter, Download, RefreshCw } from 'lucide-react';

const SurfaceSentinel = () => {
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('');
  const [discoveredAssets, setDiscoveredAssets] = useState([]);
  const [liveLog, setLiveLog] = useState([]);
  const [stats, setStats] = useState({
    totalAssets: 1247,
    subdomains: 423,
    ipAddresses: 187,
    openPorts: 892,
    technologies: 234
  });

  const scanPhases = [
    { name: 'DNS Enumeration', duration: 3000, icon: Globe },
    { name: 'Subdomain Discovery', duration: 4000, icon: Search },
    { name: 'Port Scanning', duration: 5000, icon: Server },
    { name: 'Service Detection', duration: 3500, icon: Wifi },
    { name: 'Technology Fingerprinting', duration: 2500, icon: Zap },
    { name: 'Vulnerability Assessment', duration: 4000, icon: Shield }
  ];

  // Simulate live scanning
  const startScan = async () => {
    setScanning(true);
    setScanProgress(0);
    setLiveLog([]);
    setDiscoveredAssets([]);

    for (let i = 0; i < scanPhases.length; i++) {
      setCurrentPhase(scanPhases[i].name);
      
      // Add log entries during scan
      const logInterval = setInterval(() => {
        const logs = [
          `✓ Found subdomain: ${['api', 'admin', 'staging', 'dev', 'mail', 'cdn', 'blog', 'shop'][Math.floor(Math.random() * 8)]}.acmecorp.com`,
          `✓ Discovered IP: 203.0.113.${Math.floor(Math.random() * 255)}`,
          `✓ Open port detected: ${[80, 443, 22, 3306, 8080, 3389][Math.floor(Math.random() * 6)]}`,
          `✓ Technology identified: ${['nginx', 'Apache', 'Node.js', 'PHP', 'MySQL', 'Redis'][Math.floor(Math.random() * 6)]}`,
          `⚠ Potential vulnerability: CVE-2024-${Math.floor(Math.random() * 9999)}`
        ];
        setLiveLog(prev => [{ 
          time: new Date().toLocaleTimeString(), 
          message: logs[Math.floor(Math.random() * logs.length)]
        }, ...prev].slice(0, 15));
      }, 800);

      // Simulate asset discovery
      setTimeout(() => {
        const newAssets = Array.from({ length: 3 }, (_, idx) => ({
          id: Date.now() + idx,
          type: ['subdomain', 'ip', 'service'][Math.floor(Math.random() * 3)],
          value: `asset-${Date.now()}-${idx}`,
          status: ['active', 'active', 'warning'][Math.floor(Math.random() * 3)],
          risk: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        }));
        setDiscoveredAssets(prev => [...prev, ...newAssets]);
      }, scanPhases[i].duration / 2);

      await new Promise(resolve => setTimeout(resolve, scanPhases[i].duration));
      clearInterval(logInterval);
      
      setScanProgress(((i + 1) / scanPhases.length) * 100);
    }

    setScanning(false);
    setCurrentPhase('');
    
    // Update stats
    setStats(prev => ({
      totalAssets: prev.totalAssets + discoveredAssets.length,
      subdomains: prev.subdomains + Math.floor(Math.random() * 20),
      ipAddresses: prev.ipAddresses + Math.floor(Math.random() * 10),
      openPorts: prev.openPorts + Math.floor(Math.random() * 30),
      technologies: prev.technologies + Math.floor(Math.random() * 15)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Surface Sentinel</h1>
            <p className="text-cyan-300">Attack Surface Monitoring & Discovery</p>
          </div>
        </div>

        <button
          onClick={startScan}
          disabled={scanning}
          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-lg font-semibold flex items-center space-x-2"
        >
          <RefreshCw className={`w-5 h-5 ${scanning ? 'animate-spin' : ''}`} />
          <span>{scanning ? 'Scanning...' : 'Start New Scan'}</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        {[
          { label: 'Total Assets', value: stats.totalAssets, icon: Globe, color: 'cyan', change: '+12' },
          { label: 'Subdomains', value: stats.subdomains, icon: Server, color: 'blue', change: '+8' },
          { label: 'IP Addresses', value: stats.ipAddresses, icon: Wifi, color: 'purple', change: '+3' },
          { label: 'Open Ports', value: stats.openPorts, icon: Shield, color: 'green', change: '+24' },
          { label: 'Technologies', value: stats.technologies, icon: Zap, color: 'yellow', change: '+7' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
              </div>
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded font-semibold">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value.toLocaleString()}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scanning Interface */}
      {scanning && (
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
                <h2 className="text-2xl font-bold text-white">Active Scan in Progress</h2>
              </div>
              <p className="text-slate-400">Domain: acmecorp.com and subsidiaries</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-cyan-400">{Math.round(scanProgress)}%</div>
              <div className="text-sm text-slate-400">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Current Phase: {currentPhase}</span>
              <span className="text-sm text-cyan-400 font-semibold">
                {discoveredAssets.length} assets discovered
              </span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>

          {/* Scan Phases Grid */}
          <div className="grid grid-cols-6 gap-4 mb-8">
            {scanPhases.map((phase, idx) => (
              <div 
                key={idx}
                className={`bg-slate-800/50 rounded-lg p-4 border transition-all ${
                  currentPhase === phase.name 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : (scanProgress / 100) * scanPhases.length > idx
                    ? 'border-green-500/50'
                    : 'border-slate-700'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-lg mb-3 flex items-center justify-center ${
                    (scanProgress / 100) * scanPhases.length > idx
                      ? 'bg-green-500/20'
                      : currentPhase === phase.name
                      ? 'bg-cyan-500/20'
                      : 'bg-slate-700/50'
                  }`}>
                    {(scanProgress / 100) * scanPhases.length > idx ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : currentPhase === phase.name ? (
                      <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin" />
                    ) : (
                      <phase.icon className="w-6 h-6 text-slate-600" />
                    )}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{phase.name}</div>
                  <div className="text-xs text-slate-500">
                    {(scanProgress / 100) * scanPhases.length > idx 
                      ? 'Complete' 
                      : currentPhase === phase.name 
                      ? 'Running...'
                      : 'Waiting'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Log and Discovered Assets */}
          <div className="grid grid-cols-2 gap-6">
            {/* Live Activity Log */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                <Activity className="w-4 h-4 mr-2 text-cyan-400" />
                Live Activity Log
              </h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto font-mono text-xs">
                {liveLog.map((log, idx) => (
                  <div key={idx} className="text-green-400 animate-fade-in flex items-start space-x-2">
                    <span className="text-slate-500">[{log.time}]</span>
                    <span className="flex-1">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently Discovered */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Recently Discovered Assets
              </h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {discoveredAssets.slice(0, 10).map((asset, idx) => (
                  <div key={asset.id} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700 animate-slide-in">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          asset.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                        }`} />
                        <span className="text-sm text-white font-mono">{asset.value}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        asset.risk === 'high' ? 'bg-red-500/20 text-red-400' :
                        asset.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {asset.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Asset Inventory */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Asset Inventory</h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Asset Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Asset</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Risk Level</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Open Ports</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Last Scanned</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { 
                  asset: 'api.acmecorp.com', 
                  type: 'Subdomain', 
                  status: 'Active', 
                  risk: 'High',
                  ports: '80, 443, 8080',
                  lastScan: '2 min ago'
                },
                { 
                  asset: '203.0.113.42', 
                  type: 'IP Address', 
                  status: 'Active', 
                  risk: 'Medium',
                  ports: '22, 80, 443',
                  lastScan: '5 min ago'
                },
                { 
                  asset: 'admin.acmecorp.com', 
                  type: 'Subdomain', 
                  status: 'Warning', 
                  risk: 'Critical',
                  ports: '80, 443, 3389',
                  lastScan: '1 min ago'
                },
                { 
                  asset: 'mail.acmecorp.com', 
                  type: 'Subdomain', 
                  status: 'Active', 
                  risk: 'Low',
                  ports: '25, 587, 993',
                  lastScan: '3 min ago'
                },
                { 
                  asset: '203.0.113.108', 
                  type: 'IP Address', 
                  status: 'Active', 
                  risk: 'Medium',
                  ports: '80, 443, 3306',
                  lastScan: '4 min ago'
                }
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-mono text-white">{item.asset}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-300">{item.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'Active' ? 'bg-green-400' : 'bg-yellow-400'
                      }`} />
                      <span className="text-sm text-slate-300">{item.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      item.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      item.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {item.risk}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-mono text-slate-400">{item.ports}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-400">{item.lastScan}</span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-sm text-cyan-400 hover:text-cyan-300">
                      View Details
                    </button>
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

export default SurfaceSentinel;