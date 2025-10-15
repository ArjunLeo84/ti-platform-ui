// DeepGuard.jsx
import React, { useState, useEffect } from 'react';
import { Eye, AlertTriangle, TrendingUp, DollarSign, Users, Globe, Clock, Search, Filter, Bell, Download } from 'lucide-react';

const DeepGuard = () => {
  const [liveMonitoring, setLiveMonitoring] = useState(true);
  const [newMentions, setNewMentions] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Simulate real-time dark web mentions
  useEffect(() => {
    if (!liveMonitoring) return;

    const interval = setInterval(() => {
      const sources = ['RaidForums', 'BreachForums', 'Exploit.in', 'XSS.is', 'Tor Market', 'Telegram Channel'];
      const types = ['Data Leak', 'Credential Dump', 'Exploit Sale', 'Ransomware Post', 'PII Exposure'];
      const severities = ['critical', 'high', 'medium'];

      const newMention = {
        id: Date.now(),
        source: sources[Math.floor(Math.random() * sources.length)],
        type: types[Math.floor(Math.random() * types.length)],
        title: `New ${types[Math.floor(Math.random() * types.length)]} detected`,
        severity: severities[Math.floor(Math.random() * severities.length)],
        timestamp: new Date().toLocaleTimeString(),
        matched_keywords: ['acmecorp', 'internal', 'database']
      };

      setNewMentions(prev => [newMention, ...prev].slice(0, 10));
      
      if (newMention.severity === 'critical') {
        setAlerts(prev => [newMention, ...prev].slice(0, 5));
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [liveMonitoring]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
            <Eye className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">DeepGuard</h1>
            <p className="text-red-300">Digital Risk Protection & Dark Web Monitoring</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className={`w-2 h-2 rounded-full ${liveMonitoring ? 'bg-green-400 animate-pulse' : 'bg-slate-600'}`} />
            <span className="text-sm text-white">{liveMonitoring ? 'Live Monitoring' : 'Paused'}</span>
          </div>
          <button
            onClick={() => setLiveMonitoring(!liveMonitoring)}
            className={`px-6 py-3 rounded-lg font-semibold ${
              liveMonitoring 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {liveMonitoring ? 'Pause Monitoring' : 'Resume Monitoring'}
          </button>
        </div>
      </div>

      {/* Real-Time Alerts Banner */}
      {alerts.length > 0 && (
        <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 mb-8 animate-pulse-slow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">🚨 Critical Alert: New Dark Web Mention</h3>
                <p className="text-sm text-red-300 mb-3">{alerts[0].title} on {alerts[0].source}</p>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold">
                    Investigate Now
                  </button>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm">
                    Mark as Reviewed
                  </button>
                </div>
              </div>
            </div>
            <span className="text-xs text-red-400 font-mono">{alerts[0].timestamp}</span>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Mentions', value: '847', trend: '+23 today', icon: Globe, color: 'red' },
          { label: 'Active Threats', value: '34', trend: '+5 this week', icon: AlertTriangle, color: 'orange' },
          { label: 'Monitored Sources', value: '156', trend: 'All operational', icon: Eye, color: 'purple' },
          { label: 'Stolen Credentials', value: '1,249', trend: '+47 detected', icon: Users, color: 'yellow' }
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

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Live Mentions Feed */}
        <div className="col-span-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-red-400 animate-pulse" />
              <h2 className="text-xl font-bold text-white">Live Dark Web Mentions</h2>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg">
                <Filter className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {newMentions.map((mention) => (
              <div 
                key={mention.id}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-red-500/50 transition-all animate-slide-in cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        mention.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        mention.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {mention.severity.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded">
                        {mention.type}
                      </span>
                      <span className="text-xs text-slate-500">{mention.timestamp}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors mb-2">
                      {mention.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <span className="text-xs text-slate-400">Source: {mention.source}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500">Matched Keywords:</span>
                      {mention.matched_keywords.map((keyword, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-red-500/10 text-red-400 text-xs rounded">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Bell className="w-5 h-5 text-red-400 flex-shrink-0" />
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg transition-colors">
                    View Full Post
                  </button>
                  <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors">
                    Create Alert
                  </button>
                  <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors">
                    Download Evidence
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring Sources */}
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6">Active Monitoring Sources</h2>
          <div className="space-y-3">
            {[
              { name: 'RaidForums Mirror', mentions: 234, status: 'active', threat: 'high' },
              { name: 'BreachForums', mentions: 189, status: 'active', threat: 'critical' },
              { name: 'Exploit.in', mentions: 156, status: 'active', threat: 'high' },
              { name: 'XSS.is', mentions: 98, status: 'active', threat: 'medium' },
              { name: 'Tor Markets', mentions: 87, status: 'active', threat: 'high' },
              { name: 'Telegram Channels', mentions: 234, status: 'active', threat: 'medium' },
              { name: 'Paste Sites', mentions: 445, status: 'active', threat: 'low' },
              { name: 'Code Repositories', mentions: 123, status: 'active', threat: 'medium' }
            ].map((source, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-red-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      source.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-slate-600'
                    }`} />
                    <span className="text-sm font-semibold text-white">{source.name}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    source.threat === 'critical' ? 'bg-red-500/20 text-red-400' :
                    source.threat === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    source.threat === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {source.threat}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{source.mentions} mentions</span>
                  <span>Last check: 2m ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breach Database Search */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6">Compromised Credentials Database</h2>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by email, domain, or username..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div className="space-y-3">
            {[
              { email: 'admin@acmecorp.com', source: 'LinkedIn Breach 2021', password: 'Exposed', severity: 'critical' },
              { email: 'john.doe@acmecorp.com', source: 'Collection #1', password: 'Exposed', severity: 'high' },
              { email: 'sales@acmecorp.com', source: 'Adobe Breach 2013', password: 'Hashed', severity: 'medium' },
              { email: 'support@acmecorp.com', source: 'Recent Paste', password: 'Plaintext', severity: 'critical' }
            ].map((cred, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-mono text-white mb-1">{cred.email}</div>
                    <div className="text-xs text-slate-400">Source: {cred.source}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    cred.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                    cred.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cred.severity}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-500">Password: {cred.password}</span>
                  <button className="text-xs text-red-400 hover:text-red-300">Force Reset</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6">Data Leak Timeline</h2>
          
          <div className="space-y-4">
            {[
              { 
                date: 'Today, 2:45 PM', 
                title: 'Employee Database Posted', 
                source: 'BreachForums',
                records: '1,247 records',
                type: 'PII',
                severity: 'critical'
              },
              { 
                date: 'Yesterday, 11:20 AM', 
                title: 'Customer Email List Leaked', 
                source: 'Telegram Channel',
                records: '45,892 records',
                type: 'Contact Info',
                severity: 'high'
              },
              { 
                date: '2 days ago', 
                title: 'Source Code Repository Found', 
                source: 'GitHub',
                records: 'Multiple files',
                type: 'Source Code',
                severity: 'high'
              },
              { 
                date: '3 days ago', 
                title: 'API Keys Exposed in Paste', 
                source: 'Pastebin',
                records: '12 keys',
                type: 'Credentials',
                severity: 'critical'
              }
            ].map((leak, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 ${
                  leak.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'
                }`} />
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-red-500/30 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{leak.date}</div>
                      <h3 className="text-sm font-semibold text-white mb-1">{leak.title}</h3>
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <span>📍 {leak.source}</span>
                        <span>•</span>
                        <span>{leak.records}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      leak.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {leak.type}
                    </span>
                  </div>
                  <button className="text-xs text-red-400 hover:text-red-300 mt-2">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Actor Profiles */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Threat Actor Intelligence</h2>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm">
            View All Actors
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { 
              name: 'BlackCat_Official', 
              activity: 'Very High', 
              posts: 47, 
              reputation: 98,
              threat: 'Ransomware Operator'
            },
            { 
              name: 'DataBroker_2024', 
              activity: 'High', 
              posts: 234, 
              reputation: 87,
              threat: 'Data Seller'
            },
            { 
              name: 'ExploitDev_Pro', 
              activity: 'Medium', 
              posts: 89, 
              reputation: 94,
              threat: 'Exploit Developer'
            },
            { 
              name: 'AccessProvider', 
              activity: 'High', 
              posts: 156, 
              reputation: 76,
              threat: 'Initial Access Broker'
            }
          ].map((actor, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-red-500/30 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  actor.activity === 'Very High' ? 'bg-red-500/20 text-red-400' :
                  actor.activity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {actor.activity}
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-white mb-1 truncate">{actor.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{actor.threat}</p>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Posts:</span>
                  <span className="text-white font-semibold">{actor.posts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Reputation:</span>
                  <span className="text-red-400 font-semibold">{actor.reputation}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeepGuard;