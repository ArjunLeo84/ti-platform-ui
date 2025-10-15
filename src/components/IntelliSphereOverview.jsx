// IntelliSphere/Overview.jsx
import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Globe2, Users, AlertTriangle, Database, Clock, Target } from 'lucide-react';

const IntelliSphereOverview = () => {
  const [liveStats, setLiveStats] = useState({
    totalIOCs: 15847,
    activeCampaigns: 23,
    threatActors: 156,
    feeds: 45
  });

  // Simulate live counter increment
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        totalIOCs: prev.totalIOCs + Math.floor(Math.random() * 5)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">IntelliSphere</h1>
            <p className="text-purple-300">Threat Intelligence Command Center</p>
          </div>
        </div>
      </div>

      {/* Live Stats Banner */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 mb-8">
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: 'Total IOCs', value: liveStats.totalIOCs.toLocaleString(), icon: Database, trend: '+247 today', color: 'purple' },
            { label: 'Active Campaigns', value: liveStats.activeCampaigns, icon: Target, trend: '+3 this week', color: 'pink' },
            { label: 'Threat Actors', value: liveStats.threatActors, icon: Users, trend: '12 new profiles', color: 'blue' },
            { label: 'Intelligence Feeds', value: liveStats.feeds, icon: Globe2, trend: 'All operational', color: 'green' }
          ].map((stat, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center`}>
                  <stat.icon className={`w-7 h-7 text-${stat.color}-400`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white animate-pulse">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                  <div className="text-xs text-purple-400">{stat.trend}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Intelligence Sources */}
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <Globe2 className="w-5 h-5 mr-2 text-purple-400" />
            Intelligence Sources
          </h2>
          <div className="space-y-3">
            {[
              { name: 'OSINT Feeds', status: 'active', count: 15, health: 100 },
              { name: 'Commercial TI', status: 'active', count: 12, health: 98 },
              { name: 'Dark Web Monitors', status: 'active', count: 8, health: 95 },
              { name: 'ISAC Sharing', status: 'active', count: 6, health: 100 },
              { name: 'Government Feeds', status: 'limited', count: 4, health: 78 }
            ].map((source, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${source.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                    <span className="text-sm font-semibold text-white">{source.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">{source.count} feeds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${source.health >= 95 ? 'bg-green-500' : source.health >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${source.health}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{source.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Intelligence */}
        <div className="col-span-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-purple-400 animate-spin" />
            Latest Intelligence Updates
          </h2>
          <div className="space-y-3">
            {[
              { 
                time: 'Just now', 
                title: 'APT28 Campaign Targeting Financial Sector',
                severity: 'critical',
                source: 'Mandiant',
                iocs: 47,
                description: 'New spearphishing campaign identified with custom malware'
              },
              { 
                time: '5 min ago', 
                title: 'Ransomware Group Claims New Victim',
                severity: 'high',
                source: 'Dark Web Monitor',
                iocs: 12,
                description: 'LockBit 3.0 announces breach of healthcare organization'
              },
              { 
                time: '15 min ago', 
                title: 'Zero-Day Exploit in Popular Software',
                severity: 'critical',
                source: 'CISA',
                iocs: 8,
                description: 'CVE-2024-XXXX actively exploited in the wild'
              },
              { 
                time: '1 hour ago', 
                title: 'New Malware Family Discovered',
                severity: 'medium',
                source: 'VirusTotal',
                iocs: 23,
                description: 'ShadowPad variant with enhanced evasion capabilities'
              },
              { 
                time: '2 hours ago', 
                title: 'Phishing Campaign Using AI-Generated Content',
                severity: 'high',
                source: 'OSINT',
                iocs: 156,
                description: 'Sophisticated emails bypassing traditional filters'
              }
            ].map((intel, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-purple-500/50 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        intel.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        intel.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {intel.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-500">{intel.time}</span>
                      <span className="text-xs text-purple-400">{intel.source}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {intel.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{intel.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-lg font-bold text-purple-400">{intel.iocs}</div>
                    <div className="text-xs text-slate-500">IOCs</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IOC Categories */}
      <div className="grid grid-cols-6 gap-4">
        {[
          { type: 'IP Addresses', count: 4521, icon: '🌐', change: '+89' },
          { type: 'Domains', count: 3847, icon: '🔗', change: '+156' },
          { type: 'File Hashes', count: 6234, icon: '📄', change: '+234' },
          { type: 'URLs', count: 2891, icon: '🔒', change: '+67' },
          { type: 'Email Addresses', count: 1456, icon: '📧', change: '+34' },
          { type: 'Bitcoin Addresses', count: 892, icon: '₿', change: '+12' }
        ].map((category, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all cursor-pointer">
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-2xl font-bold text-white">{category.count.toLocaleString()}</div>
            <div className="text-xs text-slate-400">{category.type}</div>
            <div className="text-xs text-green-400 mt-1">{category.change} today</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelliSphereOverview;