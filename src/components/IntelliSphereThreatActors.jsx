// IntelliSphere/ThreatActors.jsx
import React, { useState } from 'react';
import { Users, Globe, Target, TrendingUp, Shield, Activity } from 'lucide-react';

const ThreatActors = () => {
  const [selectedActor, setSelectedActor] = useState(null);

  const threatActors = [
    {
      id: 1,
      name: 'APT28 (Fancy Bear)',
      aliases: ['Sofacy', 'Pawn Storm', 'Sednit'],
      origin: '🇷🇺 Russia',
      motivation: 'Espionage',
      sophistication: 'Very High',
      activity: 'Very Active',
      firstSeen: '2007',
      targets: ['Government', 'Military', 'Defense', 'Aerospace'],
      ttps: ['Spearphishing', 'Zero-day Exploits', 'Custom Malware'],
      campaigns: 47,
      iocs: 1247,
      associatedMalware: ['X-Agent', 'Sofacy', 'Zebrocy'],
      recentActivity: 'Targeting NATO countries with credential harvesting campaigns'
    },
    {
      id: 2,
      name: 'Lazarus Group',
      aliases: ['HIDDEN COBRA', 'Guardians of Peace'],
      origin: '🇰🇵 North Korea',
      motivation: 'Financial Gain, Espionage',
      sophistication: 'Very High',
      activity: 'Very Active',
      firstSeen: '2009',
      targets: ['Financial', 'Cryptocurrency', 'Defense', 'Media'],
      ttps: ['Supply Chain Attacks', 'Watering Hole', 'RATs'],
      campaigns: 89,
      iocs: 2341,
      associatedMalware: ['WannaCry', 'BLINDINGCAN', 'AppleJeus'],
      recentActivity: 'Cryptocurrency exchange targeting and ransomware operations'
    },
    {
      id: 3,
      name: 'FIN7',
      aliases: ['Carbanak Group', 'Navigator Group'],
      origin: '🌐 International',
      motivation: 'Financial Gain',
      sophistication: 'High',
      activity: 'Active',
      firstSeen: '2013',
      targets: ['Retail', 'Hospitality', 'Financial Services'],
      ttps: ['Phishing', 'Point-of-Sale Malware', 'ATM Jackpotting'],
      campaigns: 156,
      iocs: 3421,
      associatedMalware: ['Carbanak', 'BOOSTWRITE', 'GRIFFON'],
      recentActivity: 'Targeting restaurant chains with new POS malware variants'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Threat Actor Intelligence</h1>
            <p className="text-red-300">Advanced Persistent Threats & Cybercrime Groups</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Tracked Actors', value: '156', icon: Users, color: 'red' },
          { label: 'Active Campaigns', value: '89', icon: Target, color: 'orange' },
          { label: 'Total IOCs', value: '15,847', icon: Shield, color: 'purple' },
          { label: 'Recent Activity', value: '+47', icon: Activity, color: 'yellow' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className={`w-10 h-10 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Threat Actor Cards */}
      <div className="grid grid-cols-3 gap-6">
        {threatActors.map((actor) => (
          <div 
            key={actor.id}
            onClick={() => setSelectedActor(actor)}
            className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{actor.name}</h3>
                <div className="text-sm text-slate-400 mb-2">{actor.aliases.join(' • ')}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg">{actor.origin.split(' ')[0]}</span>
                  <span className="text-sm text-slate-400">{actor.origin.split(' ')[1]}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                actor.activity === 'Very Active' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {actor.activity}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Motivation:</span>
                <span className="text-white font-semibold">{actor.motivation}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Sophistication:</span>
                <span className="text-red-400 font-semibold">{actor.sophistication}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">First Seen:</span>
                <span className="text-white">{actor.firstSeen}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">{actor.campaigns}</div>
                <div className="text-xs text-slate-400">Campaigns</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">{actor.iocs}</div>
                <div className="text-xs text-slate-400">IOCs</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">{actor.targets.length}</div>
                <div className="text-xs text-slate-400">Sectors</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs text-slate-500 mb-2">Primary Targets:</div>
              <div className="flex flex-wrap gap-1">
                {actor.targets.slice(0, 3).map((target, idx) => (
                  <span key={idx} className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                    {target}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold">
              View Full Profile
            </button>
          </div>
        ))}
      </div>

      {/* Detailed View Modal (if actor selected) */}
      {selectedActor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedActor.name}</h2>
                <p className="text-slate-400">{selectedActor.aliases.join(' • ')}</p>
              </div>
              <button 
                onClick={() => setSelectedActor(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Origin</div>
                    <div className="text-lg font-semibold text-white">{selectedActor.origin}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Motivation</div>
                    <div className="text-lg font-semibold text-white">{selectedActor.motivation}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Sophistication</div>
                    <div className="text-lg font-semibold text-red-400">{selectedActor.sophistication}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Activity Level</div>
                    <div className="text-lg font-semibold text-white">{selectedActor.activity}</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <p className="text-sm text-slate-300">{selectedActor.recentActivity}</p>
                </div>
              </div>

              {/* TTPs */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Tactics, Techniques & Procedures</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedActor.ttps.map((ttp, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-lg">
                      {ttp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Targets */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Target Sectors</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedActor.targets.map((target, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-lg">
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              {/* Associated Malware */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Associated Malware</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedActor.associatedMalware.map((malware, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-sm font-semibold text-white">{malware}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreatActors;