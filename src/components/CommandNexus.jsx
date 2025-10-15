// CommandNexus.jsx - Executive Dashboard
import React, { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, TrendingUp, Activity, 
  Target, Globe, Lock, Zap, Eye, Clock
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const CommandNexus = () => {
  const [realTimeEvents, setRealTimeEvents] = useState([]);
  const [stats, setStats] = useState({
    threatScore: 72,
    activeThreats: 23,
    assetsMonitored: 1247,
    vulnerabilities: 89
  });

  // Simulate real-time threat feed
  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = {
        id: Date.now(),
        type: ['threat', 'vuln', 'alert'][Math.floor(Math.random() * 3)],
        message: [
          'New IOC detected from Dark Web',
          'Vulnerability CVE-2024-1234 found',
          'Suspicious login attempt blocked',
          'Asset scan completed: 12 new subdomains'
        ][Math.floor(Math.random() * 4)],
        severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)],
        time: new Date().toLocaleTimeString()
      };
      setRealTimeEvents(prev => [newEvent, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const threatTrendData = [
    { month: 'Jan', threats: 45, blocked: 42 },
    { month: 'Feb', threats: 52, blocked: 48 },
    { month: 'Mar', threats: 61, blocked: 58 },
    { month: 'Apr', threats: 58, blocked: 55 },
    { month: 'May', threats: 73, blocked: 69 },
    { month: 'Jun', threats: 89, blocked: 84 }
  ];

  const vulnerabilityData = [
    { name: 'Critical', value: 12, color: '#ef4444' },
    { name: 'High', value: 34, color: '#f59e0b' },
    { name: 'Medium', value: 67, color: '#eab308' },
    { name: 'Low', value: 142, color: '#22c55e' }
  ];

  const riskRadarData = [
    { category: 'Network', value: 85 },
    { category: 'Application', value: 72 },
    { category: 'Data', value: 90 },
    { category: 'Identity', value: 78 },
    { category: 'Infrastructure', value: 82 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Top Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CommandNexus</h1>
                <p className="text-sm text-blue-300">Security Operations Center</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-300">All Systems Operational</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Last Updated</div>
                <div className="text-sm font-semibold text-white">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'Threat Score', 
              value: stats.threatScore, 
              unit: '/100',
              change: '-5%',
              trend: 'down',
              icon: Shield,
              color: 'blue',
              description: 'Overall security posture'
            },
            { 
              label: 'Active Threats', 
              value: stats.activeThreats, 
              change: '+3',
              trend: 'up',
              icon: AlertTriangle,
              color: 'red',
              description: 'Requires immediate attention'
            },
            { 
              label: 'Assets Monitored', 
              value: stats.assetsMonitored, 
              change: '+12',
              trend: 'up',
              icon: Globe,
              color: 'green',
              description: 'Across all environments'
            },
            { 
              label: 'Vulnerabilities', 
              value: stats.vulnerabilities, 
              change: '-7',
              trend: 'down',
              icon: Lock,
              color: 'yellow',
              description: 'Pending remediation'
            }
          ].map((metric, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${metric.color}-500/20 flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
                  metric.trend === 'down' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span className="text-xs font-semibold">{metric.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {metric.value}<span className="text-lg text-slate-400">{metric.unit}</span>
              </div>
              <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Threat Intelligence Timeline */}
          <div className="col-span-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Threat Activity Trend</h2>
                <p className="text-sm text-slate-400">Last 6 months</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">6M</button>
                <button className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm">1Y</button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={threatTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="threats" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 6 }}
                  name="Threats Detected"
                />
                <Line 
                  type="monotone" 
                  dataKey="blocked" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', r: 6 }}
                  name="Threats Blocked"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Real-Time Event Feed */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
              <h2 className="text-xl font-bold text-white">Live Threat Feed</h2>
            </div>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {realTimeEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 animate-slide-in"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      event.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      event.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      event.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {event.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500">{event.time}</span>
                  </div>
                  <p className="text-sm text-slate-300">{event.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Vulnerability Distribution */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Vulnerability Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={vulnerabilityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {vulnerabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {vulnerabilityData.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-300">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
</div>

          {/* Risk Assessment Radar */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Security Posture Analysis</h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={riskRadarData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
                <Radar 
                  name="Risk Score" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.6} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <div className="text-3xl font-bold text-purple-400">81.4</div>
              <div className="text-sm text-slate-400">Average Security Score</div>
            </div>
          </div>

          {/* Top Threats */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Top Threat Actors</h2>
            <div className="space-y-4">
              {[
                { name: 'APT28 (Fancy Bear)', confidence: 92, activity: 'High', country: '🇷🇺' },
                { name: 'Lazarus Group', confidence: 87, activity: 'Medium', country: '🇰🇵' },
                { name: 'FIN7', confidence: 78, activity: 'High', country: '🌐' },
                { name: 'DarkSide', confidence: 71, activity: 'Low', country: '🇷🇺' }
              ].map((actor, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{actor.country}</span>
                      <span className="text-sm font-semibold text-white">{actor.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      actor.activity === 'High' ? 'bg-red-500/20 text-red-400' :
                      actor.activity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {actor.activity}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                        style={{ width: `${actor.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400">{actor.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Quick Actions & Recent Activity */}
        <div className="grid grid-cols-5 gap-6">
          {/* Quick Actions */}
          <div className="col-span-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: 'Run Asset Scan', color: 'blue' },
                { icon: Lock, label: 'Vulnerability Assessment', color: 'purple' },
                { icon: Eye, label: 'Dark Web Search', color: 'red' },
                { icon: Zap, label: 'Pentest Simulation', color: 'yellow' }
              ].map((action, idx) => (
                <button 
                  key={idx}
                  className={`bg-gradient-to-br from-${action.color}-600/20 to-${action.color}-700/20 hover:from-${action.color}-600/30 hover:to-${action.color}-700/30 border border-${action.color}-500/30 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-lg`}
                >
                  <action.icon className={`w-8 h-8 text-${action.color}-400 mb-3`} />
                  <div className="text-sm font-semibold text-white">{action.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="col-span-3 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">Recent Security Activity</h2>
            <div className="space-y-4">
              {[
                { time: '2 min ago', action: 'Asset scan completed', detail: '247 assets discovered', icon: Globe, color: 'green' },
                { time: '15 min ago', action: 'High severity vulnerability detected', detail: 'CVE-2024-5678 in Apache', icon: AlertTriangle, color: 'red' },
                { time: '1 hour ago', action: 'Threat intelligence updated', detail: '12 new IOCs added', icon: Shield, color: 'blue' },
                { time: '3 hours ago', action: 'Pentest simulation completed', detail: '5 findings identified', icon: Zap, color: 'yellow' }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-start space-x-4 pb-4 border-b border-slate-700 last:border-0">
                  <div className={`w-10 h-10 rounded-lg bg-${activity.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-5 h-5 text-${activity.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">{activity.action}</div>
                    <div className="text-xs text-slate-400">{activity.detail}</div>
                  </div>
                  <div className="text-xs text-slate-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandNexus;