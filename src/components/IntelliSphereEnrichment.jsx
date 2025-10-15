// IntelliSphere/Enrichment.jsx
import React, { useState, useEffect } from 'react';
import { Search, Loader, CheckCircle, AlertTriangle, Shield, Globe, Database, Brain, Zap, Download, Share2 } from 'lucide-react';

const IntelliSphereEnrichment = () => {
  const [ioc, setIoc] = useState('');
  const [iocType, setIocType] = useState('ip');
  const [enriching, setEnriching] = useState(false);
  const [enrichmentProgress, setEnrichmentProgress] = useState(0);
  const [enrichmentData, setEnrichmentData] = useState(null);
  const [currentSource, setCurrentSource] = useState('');

  // Enrichment sources with progress
  const sources = [
    { name: 'VirusTotal', icon: Shield, duration: 2000, color: 'blue' },
    { name: 'AbuseIPDB', icon: Database, duration: 1500, color: 'red' },
    { name: 'Shodan', icon: Globe, duration: 2500, color: 'green' },
    { name: 'GreyNoise', icon: Zap, duration: 1800, color: 'yellow' },
    { name: 'AlienVault OTX', icon: Shield, duration: 2200, color: 'purple' },
    { name: 'AI Analysis', icon: Brain, duration: 3000, color: 'pink' }
  ];

  const handleEnrich = async () => {
    setEnriching(true);
    setEnrichmentProgress(0);
    setEnrichmentData(null);

    // Simulate enrichment process
    for (let i = 0; i < sources.length; i++) {
      setCurrentSource(sources[i].name);
      setEnrichmentProgress(((i + 1) / sources.length) * 100);
      await new Promise(resolve => setTimeout(resolve, sources[i].duration));
    }

    // Mock enrichment results
    setEnrichmentData({
      ioc: ioc,
      type: iocType,
      virustotal: {
        malicious: 28,
        suspicious: 5,
        harmless: 54,
        undetected: 2,
        reputation: -75,
        last_analysis: '2 hours ago',
        community_score: -42
      },
      abuseipdb: {
        abuse_confidence_score: 92,
        total_reports: 145,
        last_reported: '1 day ago',
        country: 'Russia',
        isp: 'Unknown ISP',
        usage_type: 'Data Center/Web Hosting/Transit',
        is_tor: false,
        is_whitelisted: false
      },
      shodan: {
        open_ports: [22, 80, 443, 8080, 3389],
        services: [
          { port: 80, product: 'nginx', version: '1.18.0', cpe: 'cpe:/a:nginx:nginx:1.18.0' },
          { port: 443, product: 'nginx', version: '1.18.0', cpe: 'cpe:/a:nginx:nginx:1.18.0' },
          { port: 3389, product: 'Microsoft Terminal Services', version: '', cpe: '' }
        ],
        vulnerabilities: ['CVE-2021-44228', 'CVE-2022-26134'],
        organization: 'Unknown',
        location: 'Moscow, Russia',
        asn: 'AS12345',
        last_scan: '3 days ago'
      },
      greynoise: {
        noise: true,
        riot: false,
        classification: 'malicious',
        name: 'Known Malware C2',
        last_seen: '5 hours ago',
        first_seen: '2023-01-15',
        tags: ['scanner', 'malware', 'tor_exit'],
        actor: 'APT28',
        cve: ['CVE-2023-1234']
      },
      alienvault: {
        pulse_count: 23,
        indicator_type: 'IPv4',
        reputation: 4,
        related_pulses: [
          { name: 'APT28 Campaign 2024', created: '2024-01-15' },
          { name: 'Ransomware Infrastructure', created: '2024-02-20' }
        ]
      },
      ai_analysis: {
        threat_level: 'Critical',
        confidence: 95,
        summary: 'This IP address is associated with known malicious activity. It has been identified as part of APT28 infrastructure and is actively being used for command and control operations.',
        attribution: {
          threat_actor: 'APT28 (Fancy Bear)',
          confidence: 87,
          country: 'Russia',
          motivation: 'Espionage'
        },
        recommended_actions: [
          'Block this IP immediately at perimeter firewall',
          'Check logs for any connections to this IP in the last 90 days',
          'Scan all systems for APT28 indicators of compromise',
          'Review and update threat hunting queries',
          'Notify SOC team and escalate to incident response if connections found'
        ],
        related_campaigns: [
          'Operation Ghost',
          'DNC Hack 2016',
          'NotPetya Distribution'
        ],
        ttps: [
          'T1071.001 - Application Layer Protocol: Web Protocols',
          'T1090 - Proxy',
          'T1573 - Encrypted Channel'
        ]
      },
      metadata: {
        enriched_at: new Date().toISOString(),
        sources_queried: 6,
        sources_successful: 6,
        total_time: '12.3 seconds'
      }
    });

    setEnriching(false);
    setCurrentSource('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
            <Search className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">IOC Enrichment</h1>
            <p className="text-violet-300">Real-time threat intelligence enrichment from multiple sources</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 mb-8">
        <div className="flex items-center space-x-4">
          <select 
            value={iocType}
            onChange={(e) => setIocType(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          >
            <option value="ip">IP Address</option>
            <option value="domain">Domain</option>
            <option value="hash">File Hash</option>
            <option value="url">URL</option>
            <option value="email">Email</option>
          </select>

          <input
            type="text"
            value={ioc}
            onChange={(e) => setIoc(e.target.value)}
            placeholder="Enter IOC to enrich (e.g., 185.220.102.252)"
            className="flex-1 px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          <button
            onClick={handleEnrich}
            disabled={enriching || !ioc}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-lg font-semibold flex items-center space-x-2 transition-all"
          >
            {enriching ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Enriching...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Enrich IOC</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Examples */}
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-sm text-slate-400">Quick examples:</span>
          {['185.220.102.252', 'malicious-domain.com', '44d88612fea8a8f36de82e1278abb02f'].map((example, idx) => (
            <button
              key={idx}
              onClick={() => setIoc(example)}
              className="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-violet-400 rounded-lg transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* Enrichment Progress */}
      {enriching && (
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Loader className="w-8 h-8 text-violet-400 animate-spin" />
              <span className="text-xl font-semibold text-white">Enriching IOC...</span>
            </div>
            <p className="text-slate-400">Querying {sources.length} threat intelligence sources</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Progress</span>
              <span className="text-sm font-semibold text-violet-400">{Math.round(enrichmentProgress)}%</span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${enrichmentProgress}%` }}
              />
            </div>
          </div>

          {/* Source Status */}
          <div className="grid grid-cols-3 gap-4">
            {sources.map((source, idx) => (
              <div 
                key={idx}
                className={`bg-slate-800/50 rounded-lg p-4 border transition-all ${
                  currentSource === source.name 
                    ? 'border-violet-500 shadow-lg shadow-violet-500/20' 
                    : (enrichmentProgress / 100) * sources.length > idx
                    ? 'border-green-500/50'
                    : 'border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-${source.color}-500/20 flex items-center justify-center`}>
                    {(enrichmentProgress / 100) * sources.length > idx ? (
                      <CheckCircle className={`w-5 h-5 text-green-400`} />
                    ) : currentSource === source.name ? (
                      <Loader className={`w-5 h-5 text-${source.color}-400 animate-spin`} />
                    ) : (
                      <source.icon className={`w-5 h-5 text-slate-600`} />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{source.name}</div>
                    <div className="text-xs text-slate-500">
                      {(enrichmentProgress / 100) * sources.length > idx 
                        ? 'Complete' 
                        : currentSource === source.name 
                        ? 'Querying...'
                        : 'Waiting'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enrichment Results */}
      {enrichmentData && (
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Threat Detected</h2>
                    <p className="text-red-300">This IOC is associated with malicious activity</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">IOC</div>
                    <div className="text-lg font-mono font-bold text-white">{enrichmentData.ioc}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Type</div>
                    <div className="text-lg font-semibold text-white">{enrichmentData.type.toUpperCase()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Threat Level</div>
                    <div className="text-lg font-semibold text-red-400">{enrichmentData.ai_analysis.threat_level}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Confidence</div>
                    <div className="text-lg font-semibold text-white">{enrichmentData.ai_analysis.confidence}%</div>
                  </div>
                </div>

                <div className="bg-red-950/50 rounded-lg p-4 border border-red-500/30">
                  <div className="text-sm font-semibold text-red-300 mb-2">AI Analysis Summary</div>
                  <p className="text-sm text-slate-300">{enrichmentData.ai_analysis.summary}</p>
                </div>
              </div>

              <div className="flex space-x-3 ml-6">
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Source Results Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* VirusTotal */}
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">VirusTotal</h3>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">VERIFIED</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                  <div className="text-3xl font-bold text-red-400">{enrichmentData.virustotal.malicious}</div>
                  <div className="text-sm text-slate-400">Malicious</div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-400">{enrichmentData.virustotal.suspicious}</div>
                  <div className="text-sm text-slate-400">Suspicious</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400">{enrichmentData.virustotal.harmless}</div>
                  <div className="text-sm text-slate-400">Harmless</div>
                </div>
                <div className="bg-slate-500/10 rounded-lg p-4 border border-slate-500/30">
                  <div className="text-3xl font-bold text-slate-400">{enrichmentData.virustotal.undetected}</div>
                  <div className="text-sm text-slate-400">Undetected</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Reputation Score:</span>
                  <span className="text-red-400 font-semibold">{enrichmentData.virustotal.reputation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Community Score:</span>
                  <span className="text-red-400 font-semibold">{enrichmentData.virustotal.community_score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Last Analysis:</span>
                  <span className="text-white">{enrichmentData.virustotal.last_analysis}</span>
                </div>
              </div>
            </div>

            {/* AbuseIPDB */}
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">AbuseIPDB</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Abuse Confidence Score</span>
                  <span className="text-2xl font-bold text-red-400">{enrichmentData.abuseipdb.abuse_confidence_score}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                    style={{ width: `${enrichmentData.abuseipdb.abuse_confidence_score}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Total Reports</div>
                  <div className="text-lg font-bold text-white">{enrichmentData.abuseipdb.total_reports}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Country</div>
                  <div className="text-lg font-semibold text-white">🇷🇺 {enrichmentData.abuseipdb.country}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">ISP</div>
                  <div className="text-sm text-white">{enrichmentData.abuseipdb.isp}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Usage Type</div>
                  <div className="text-sm text-white">{enrichmentData.abuseipdb.usage_type}</div>
                </div>
              </div>
            </div>

            {/* Shodan */}
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Shodan</h3>
              </div>

              <div className="mb-4">
                <div className="text-sm text-slate-400 mb-2">Open Ports ({enrichmentData.shodan.open_ports.length})</div>
                <div className="flex flex-wrap gap-2">
                  {enrichmentData.shodan.open_ports.map((port, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-mono">
                      {port}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-slate-400 mb-2">Services Detected</div>
                <div className="space-y-2">
                  {enrichmentData.shodan.services.map((service, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-green-400">Port {service.port}</span>
                        <span className="text-slate-400">{service.product}</span>
                      </div>
                      {service.version && (
                        <div className="text-xs text-slate-500">Version: {service.version}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {enrichmentData.shodan.vulnerabilities.length > 0 && (
                <div className="bg-red-900/20 rounded-lg p-3 border border-red-500/30">
                  <div className="text-sm font-semibold text-red-400 mb-2">
                    ⚠️ Vulnerabilities Detected
                  </div>
                  <div className="space-y-1">
                    {enrichmentData.shodan.vulnerabilities.map((cve, idx) => (
                      <div key={idx} className="text-xs font-mono text-red-300">{cve}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* GreyNoise */}
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">GreyNoise</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                  <span className="text-sm text-slate-300">Classification</span>
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded">
                    {enrichmentData.greynoise.classification.toUpperCase()}
                  </span>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-xs text-slate-400 mb-2">Threat Name</div>
                  <div className="text-sm font-semibold text-white">{enrichmentData.greynoise.name}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">First Seen</div>
                    <div className="text-sm text-white">{enrichmentData.greynoise.first_seen}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Last Seen</div>
                    <div className="text-sm text-white">{enrichmentData.greynoise.last_seen}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-400 mb-2">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {enrichmentData.greynoise.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {enrichmentData.greynoise.actor && (
                  <div className="bg-red-900/20 rounded-lg p-3 border border-red-500/30">
                    <div className="text-xs text-slate-400 mb-1">Associated Actor</div>
                    <div className="text-sm font-semibold text-red-400">{enrichmentData.greynoise.actor}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">AI-Powered Threat Analysis</h3>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {enrichmentData.ai_analysis.threat_level}
                </div>
                <div className="text-sm text-slate-400">Threat Level</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {enrichmentData.ai_analysis.confidence}%
                </div>
                <div className="text-sm text-slate-400">Confidence Score</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {enrichmentData.metadata.sources_successful}
                </div>
                <div className="text-sm text-slate-400">Sources Verified</div>
              </div>
            </div>

            {/* Attribution */}
            <div className="bg-slate-900/30 rounded-xl p-6 mb-6">
              <div className="text-lg font-semibold text-white mb-4">Threat Attribution</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Threat Actor</div>
                  <div className="text-lg font-bold text-purple-400">
                    {enrichmentData.ai_analysis.attribution.threat_actor}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Confidence</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500"
                        style={{ width: `${enrichmentData.ai_analysis.attribution.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {enrichmentData.ai_analysis.attribution.confidence}%
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Origin Country</div>
                  <div className="text-lg font-semibold text-white">
                    🇷🇺 {enrichmentData.ai_analysis.attribution.country}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Motivation</div>
                  <div className="text-lg font-semibold text-white">
                    {enrichmentData.ai_analysis.attribution.motivation}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="bg-slate-900/30 rounded-xl p-6 mb-6">
              <div className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Recommended Actions
              </div>
              <div className="space-y-3">
{enrichmentData.ai_analysis.recommended_actions.map((action, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-400">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 flex-1">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Campaigns */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-semibold text-slate-400 mb-3">Related Campaigns</div>
                <div className="space-y-2">
                  {enrichmentData.ai_analysis.related_campaigns.map((campaign, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-sm text-white hover:bg-slate-800 transition-colors cursor-pointer">
                      {campaign}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-400 mb-3">MITRE ATT&CK TTPs</div>
                <div className="space-y-2">
                  {enrichmentData.ai_analysis.ttps.map((ttp, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3 hover:bg-slate-800 transition-colors cursor-pointer">
                      <div className="text-xs font-mono text-purple-400 mb-1">
                        {ttp.split(' - ')[0]}
                      </div>
                      <div className="text-xs text-slate-300">
                        {ttp.split(' - ')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="flex items-center justify-between bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <div>
              <div className="text-lg font-semibold text-white mb-1">Export Enrichment Report</div>
              <div className="text-sm text-slate-400">Download complete analysis in your preferred format</div>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export PDF</span>
              </button>
              <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export JSON</span>
              </button>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share with Team</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelliSphereEnrichment;