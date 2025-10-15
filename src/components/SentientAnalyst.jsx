// SentientAnalyst.jsx
import React, { useState, useEffect } from 'react';
import { Send, Database, Calendar } from 'lucide-react';
import { 
  Brain, Sparkles, Shield, Users, TrendingUp, AlertTriangle, Target, 
  Zap, Eye, MessageSquare, BarChart3, Network, 
  Lightbulb, Clock, Download, Share2, RefreshCw,
  ArrowRight, CheckCircle, XCircle, Activity
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SentientAnalyst = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('');
  const [insights, setInsights] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [userQuery, setUserQuery] = useState('');
  const [aiTyping, setAiTyping] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [predictiveAlerts, setPredictiveAlerts] = useState([]);

  const analysisPhases = [
    { name: 'Data Aggregation', icon: Database, duration: 2000, description: 'Collecting data from 45 sources' },
    { name: 'Pattern Recognition', icon: Network, duration: 3000, description: 'Analyzing threat patterns and correlations' },
    { name: 'Behavioral Analysis', icon: Activity, duration: 2500, description: 'Evaluating threat actor behaviors' },
    { name: 'Risk Modeling', icon: BarChart3, duration: 2000, description: 'Computing probabilistic risk scenarios' },
    { name: 'Predictive Analytics', icon: TrendingUp, duration: 3500, description: 'Forecasting potential threats' },
    { name: 'Insight Generation', icon: Lightbulb, duration: 2000, description: 'Synthesizing actionable intelligence' }
  ];

  // Simulate AI analysis
  const runAnalysis = async () => {
    setAnalyzing(true);
    setAnalysisProgress(0);
    setInsights(null);

    for (let i = 0; i < analysisPhases.length; i++) {
      setCurrentPhase(analysisPhases[i].name);
      await new Promise(resolve => setTimeout(resolve, analysisPhases[i].duration));
      setAnalysisProgress(((i + 1) / analysisPhases.length) * 100);
    }

    // Generate comprehensive insights
    setInsights({
      executiveSummary: {
        overallThreatLevel: 'Elevated',
        threatScore: 76,
        trendDirection: 'increasing',
        criticalFindings: 12,
        predictedIncidents: 3,
        confidenceScore: 94,
        lastUpdated: new Date().toISOString()
      },
      keyFindings: [
        {
          id: 1,
          severity: 'critical',
          title: 'Credential Stuffing Attack Pattern Detected',
          description: 'AI has identified unusual login attempt patterns across 47 accounts matching known credential stuffing signatures. Attack originated from 23 unique IP addresses in Eastern Europe.',
          confidence: 97,
          affectedAssets: 47,
          timeframe: 'Last 6 hours',
          recommendation: 'Implement immediate MFA enforcement and reset credentials for affected accounts',
          aiReasoning: 'Pattern matches APT28 credential harvesting campaigns with 94% similarity. Timing correlates with recent dark web credential dump.'
        },
        {
          id: 2,
          severity: 'high',
          title: 'Zero-Day Vulnerability Exploitation Predicted',
          description: 'Machine learning models indicate 89% probability of CVE-2024-XXXX exploitation within next 72 hours based on dark web chatter and exploit kit updates.',
          confidence: 89,
          affectedAssets: 156,
          timeframe: 'Next 72 hours',
          recommendation: 'Apply emergency patch or implement virtual patching via WAF rules',
          aiReasoning: 'Historical analysis shows similar dark web activity patterns preceded 14 out of 16 zero-day exploitations in past 18 months.'
        },
        {
          id: 3,
          severity: 'high',
          title: 'Anomalous Data Exfiltration Behavior',
          description: 'Behavioral analytics detected unusual data transfer patterns from database servers. Volume increased 340% compared to baseline with transfers occurring during non-business hours.',
          confidence: 92,
          affectedAssets: 3,
          timeframe: 'Last 48 hours',
          recommendation: 'Investigate database access logs, review user privileges, implement DLP policies',
          aiReasoning: 'Transfer patterns match known data exfiltration techniques. User behavior deviates significantly from established baseline.'
        },
        {
          id: 4,
          severity: 'medium',
          title: 'Supply Chain Risk Elevation',
          description: 'Third-party vendor risk assessment indicates elevated threat level for 2 critical vendors based on recent security incidents in their infrastructure.',
          confidence: 85,
          affectedAssets: 234,
          timeframe: 'Current',
          recommendation: 'Conduct immediate vendor security review and consider alternative suppliers',
          aiReasoning: 'Vendors show security posture degradation over 90 days. Similar vendor compromise led to downstream attacks in 67% of analyzed cases.'
        }
      ],
      threatPredictions: [
        {
          threatType: 'Ransomware Attack',
          probability: 73,
          timeframe: '7-14 days',
          indicators: ['Increased reconnaissance activity', 'Dark web mentions', 'Similar organization breaches'],
          preventiveMeasures: [
            'Verify backup integrity and isolation',
            'Conduct ransomware tabletop exercise',
            'Review and test incident response plan',
            'Enhance email security filtering'
          ]
        },
        {
          threatType: 'Phishing Campaign',
          probability: 86,
          timeframe: '1-3 days',
          indicators: ['Domain typosquatting detected', 'Increased email spoofing attempts', 'Social engineering recon'],
          preventiveMeasures: [
            'Deploy advanced email authentication (DMARC)',
            'Conduct targeted security awareness training',
            'Implement additional email filtering rules',
            'Monitor for lookalike domains'
          ]
        },
        {
          threatType: 'Insider Threat',
          probability: 45,
          timeframe: '30-60 days',
          indicators: ['Unusual access patterns', 'Policy violations', 'Disgruntled employee signals'],
          preventiveMeasures: [
            'Review privileged access controls',
            'Enhance user behavior monitoring',
            'Conduct HR security collaboration',
            'Implement additional DLP controls'
          ]
        }
      ],
      threatActorIntelligence: {
        activeActors: [
          {
            name: 'APT28',
            targetingProbability: 78,
            reason: 'Your organization matches their historical targeting profile (defense sector, critical infrastructure)',
            recentActivity: 'Increased spearphishing campaigns targeting similar organizations in past 30 days',
            recommendedDefenses: ['Enhanced email filtering', 'Endpoint hardening', 'Network segmentation']
          },
          {
            name: 'FIN7',
            targetingProbability: 62,
            reason: 'Financial data access and payment systems match their typical targets',
            recentActivity: 'Point-of-sale malware updates detected in underground forums',
            recommendedDefenses: ['POS system monitoring', 'Payment network isolation', 'Transaction anomaly detection']
          }
        ]
      },
      riskTrajectory: {
        current: 76,
        predicted30Days: 82,
        predicted60Days: 79,
        predicted90Days: 71,
        trendAnalysis: 'Risk expected to peak in 30 days due to predicted phishing campaign and patch deployment delays. Improvement projected after 60 days if recommendations implemented.',
        keyDrivers: [
          'Unpatched vulnerabilities in web applications',
          'Increased threat actor activity',
          'Supply chain security gaps',
          'User security awareness training overdue'
        ]
      },
      automatedRecommendations: [
        {
          priority: 1,
          action: 'Emergency Patch Deployment',
          systems: 'Web Application Servers (47 systems)',
          effort: 'High',
          impact: 'Critical',
          timeframe: '24-48 hours',
          riskReduction: '34%',
          costBenefit: 'High ROI - prevents potential $2.5M incident'
        },
        {
          priority: 2,
          action: 'MFA Enforcement Expansion',
          systems: 'All user accounts (1,247 users)',
          effort: 'Medium',
          impact: 'High',
          timeframe: '1 week',
          riskReduction: '28%',
          costBenefit: 'High ROI - reduces credential compromise risk by 94%'
        },
        {
          priority: 3,
          action: 'Security Awareness Training',
          systems: 'All employees (1,500 staff)',
          effort: 'Medium',
          impact: 'Medium',
          timeframe: '2 weeks',
          riskReduction: '18%',
          costBenefit: 'Medium ROI - reduces phishing success rate by 67%'
        }
      ],
      correlationAnalysis: {
        crossSourceInsights: [
          'Dark web credential dump + increased login attempts = Active credential stuffing campaign',
          'Vendor security incident + supply chain dependencies = Elevated third-party risk',
          'Exploit kit updates + unpatched systems = Imminent exploitation window',
          'Phishing infrastructure setup + employee targeting = Planned attack within 72 hours'
        ],
        temporalPatterns: [
          'Attack attempts increase 340% during holidays and weekends',
          'Reconnaissance activity peaks 7-10 days before actual attacks',
          'Credential harvesting attempts correlate with dark web forum activity'
        ]
      }
    });

    // Generate predictive alerts
    setPredictiveAlerts([
      {
        id: 1,
        type: 'imminent',
        title: 'High Probability Phishing Campaign',
        timeframe: '24-48 hours',
        confidence: 91,
        description: 'AI models predict targeted phishing campaign based on infrastructure setup and historical patterns'
      },
      {
        id: 2,
        type: 'emerging',
        title: 'Potential Data Breach',
        timeframe: '3-5 days',
        confidence: 67,
        description: 'Anomalous data access patterns suggest potential unauthorized data collection'
      }
    ]);

    // Generate recommendations
    setRecommendations([
      { category: 'Immediate', items: 12, priority: 'critical' },
      { category: 'Short-term', items: 23, priority: 'high' },
      { category: 'Long-term', items: 34, priority: 'medium' }
    ]);

    setAnalyzing(false);
    setCurrentPhase('');
  };

  // Handle conversational AI
  const handleAskAI = async () => {
    if (!userQuery.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: userQuery,
      timestamp: new Date().toISOString()
    };

    setConversationHistory(prev => [...prev, newMessage]);
    setUserQuery('');
    setAiTyping(true);

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 2000));

    const aiResponse = {
      id: Date.now() + 1,
      type: 'ai',
      content: generateAIResponse(userQuery),
      timestamp: new Date().toISOString(),
      confidence: Math.floor(Math.random() * 20) + 80,
      sources: ['Threat Intelligence Feeds', 'Historical Analysis', 'Behavioral Models']
    };

    setConversationHistory(prev => [...prev, aiResponse]);
    setAiTyping(false);
  };

  const generateAIResponse = (query) => {
    const responses = {
      'ransomware': 'Based on current threat intelligence, your organization faces a 73% probability of ransomware targeting within the next 14 days. This assessment is derived from analyzing 1,247 similar organizations, dark web mentions of your domain, and recent reconnaissance activity. I recommend immediate backup verification, incident response plan review, and enhanced email security measures.',
      'apt28': 'APT28 (Fancy Bear) shows high interest in organizations matching your profile. Their recent campaigns focus on spearphishing with custom malware. Key indicators include reconnaissance of your external assets and domain enumeration attempts detected in the last 72 hours. Recommended defenses include enhanced email filtering, endpoint hardening, and network segmentation.',
      'vulnerabilities': 'AI analysis identified 89 vulnerabilities across your infrastructure, with 12 classified as critical. Priority remediation should focus on CVE-2024-XXXX in your web application servers, which has public exploits available and matches recent dark web discussions. Estimated exploitation probability within 72 hours: 89%.',
      default: 'I\'ve analyzed your query against our threat intelligence database. Based on current data patterns, historical trends, and predictive models, I can provide detailed insights on this topic. Could you specify if you\'re interested in threat actor attribution, vulnerability analysis, risk assessment, or defensive recommendations?'
    };

    const lowerQuery = query.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuery.includes(key)) return response;
    }
    return responses.default;
  };

  // Risk trajectory data
  const riskTrajectoryData = insights ? [
    { day: 'Today', risk: insights.riskTrajectory.current, target: 60 },
    { day: '7d', risk: 78, target: 60 },
    { day: '14d', risk: 80, target: 60 },
    { day: '30d', risk: insights.riskTrajectory.predicted30Days, target: 60 },
    { day: '60d', risk: insights.riskTrajectory.predicted60Days, target: 60 },
    { day: '90d', risk: insights.riskTrajectory.predicted90Days, target: 60 }
  ] : [];

  // Threat distribution data
  const threatDistributionData = [
    { name: 'Malware', value: 234, color: '#ef4444' },
    { name: 'Phishing', value: 189, color: '#f59e0b' },
    { name: 'Vulnerabilities', value: 156, color: '#eab308' },
    { name: 'Insider Threats', value: 78, color: '#8b5cf6' },
    { name: 'DDoS', value: 45, color: '#06b6d4' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-white">Sentient Analyst</h1>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-purple-300">AI-Powered Threat Intelligence & Predictive Analytics</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-lg px-4 py-2 border border-purple-500/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-white">AI Model: GPT-4 Enhanced</span>
            </div>
          </div>
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-lg font-semibold flex items-center space-x-2 shadow-lg"
          >
            <RefreshCw className={`w-5 h-5 ${analyzing ? 'animate-spin' : ''}`} />
            <span>{analyzing ? 'Analyzing...' : 'Run AI Analysis'}</span>
          </button>
        </div>
      </div>

      {/* AI Capabilities Banner */}
      <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 mb-8">
        <div className="grid grid-cols-4 gap-6">
          {[
            { icon: Brain, label: 'Neural Pattern Recognition', value: '1.2M patterns/sec' },
            { icon: Target, label: 'Predictive Accuracy', value: '94.7%' },
            { icon: Network, label: 'Data Sources', value: '45 integrated' },
            { icon: Zap, label: 'Real-time Processing', value: '<100ms latency' }
          ].map((capability, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <capability.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{capability.value}</div>
                <div className="text-xs text-slate-400">{capability.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Progress */}
      {analyzing && (
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
                <h2 className="text-2xl font-bold text-white">AI Analysis in Progress</h2>
              </div>
              <p className="text-slate-400">Processing multi-dimensional threat intelligence data...</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-purple-400">{Math.round(analysisProgress)}%</div>
              <div className="text-sm text-slate-400">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Phase: {currentPhase}</span>
              <span className="text-sm text-purple-400 font-semibold">
                {analysisPhases.find(p => p.name === currentPhase)?.description}
              </span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500"
                style={{ width: `${analysisProgress}%` }}
              />
            </div>
          </div>

          {/* Analysis Phases */}
          <div className="grid grid-cols-6 gap-4">
            {analysisPhases.map((phase, idx) => (
              <div 
                key={idx}
                className={`bg-slate-800/50 rounded-lg p-4 border transition-all ${
                  currentPhase === phase.name 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                    : (analysisProgress / 100) * analysisPhases.length > idx
                    ? 'border-green-500/50'
                    : 'border-slate-700'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center ${
                    (analysisProgress / 100) * analysisPhases.length > idx
                      ? 'bg-green-500/20'
                      : currentPhase === phase.name
                      ? 'bg-purple-500/20'
                      : 'bg-slate-700/50'
                  }`}>
                    {(analysisProgress / 100) * analysisPhases.length > idx ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : currentPhase === phase.name ? (
                      <phase.icon className="w-6 h-6 text-purple-400 animate-pulse" />
                    ) : (
                      <phase.icon className="w-6 h-6 text-slate-600" />
                    )}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{phase.name}</div>
                  <div className="text-xs text-slate-500">
                    {(analysisProgress / 100) * analysisPhases.length > idx 
                      ? '✓ Done' 
                      : currentPhase === phase.name 
                      ? 'Processing...'
                      : 'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Tabs */}
      {insights && (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-2 border border-slate-700/50 flex space-x-2">
            {[
              { id: 'overview', label: 'Executive Overview', icon: BarChart3 },
              { id: 'findings', label: 'Key Findings', icon: Lightbulb },
              { id: 'predictions', label: 'Threat Predictions', icon: TrendingUp },
              { id: 'recommendations', label: 'AI Recommendations', icon: Target },
              { id: 'chat', label: 'Ask AI', icon: MessageSquare }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Executive Summary Card */}
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Executive Summary</h2>
                    <p className="text-purple-300">AI-Generated Threat Intelligence Overview</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-slate-400">Confidence Score:</span>
                      <span className="text-2xl font-bold text-green-400">{insights.executiveSummary.confidenceScore}%</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Updated: {new Date(insights.executiveSummary.lastUpdated).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6">
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl font-bold text-orange-400 mb-2">
                      {insights.executiveSummary.threatScore}
                    </div>
                    <div className="text-sm text-slate-400 mb-3">Overall Threat Score</div>
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded text-xs font-bold ${
                      insights.executiveSummary.trendDirection === 'increasing' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      <TrendingUp className={`w-3 h-3 ${insights.executiveSummary.trendDirection === 'decreasing' ? 'rotate-180' : ''}`} />
                      <span>{insights.executiveSummary.trendDirection}</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl font-bold text-red-400 mb-2">
                      {insights.executiveSummary.criticalFindings}
                    </div>
                    <div className="text-sm text-slate-400">Critical Findings</div>
                    <div className="text-xs text-red-400 mt-2">Requires immediate attention</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl font-bold text-yellow-400 mb-2">
                      {insights.executiveSummary.predictedIncidents}
                    </div>
                    <div className="text-sm text-slate-400">Predicted Incidents</div>
                    <div className="text-xs text-yellow-400 mt-2">Next 30 days</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className={`text-5xl font-bold mb-2 ${
                      insights.executiveSummary.overallThreatLevel === 'Critical' ? 'text-red-400' :
                      insights.executiveSummary.overallThreatLevel === 'Elevated' ? 'text-orange-400' :
                      'text-yellow-400'
                    }`}>
                      {insights.executiveSummary.overallThreatLevel}
                    </div>
                    <div className="text-sm text-slate-400">Threat Level</div>
                    <div className="text-xs text-orange-400 mt-2">Above baseline</div>
                  </div>
                </div>
              </div>

              {/* Risk Trajectory Chart */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                    Risk Trajectory Forecast
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={riskTrajectoryData}>
                      <defs>
                        <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="day" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="risk" 
                        stroke="#ef4444" 
                        fillOpacity={1} 
                        fill="url(#riskGradient)" 
                        strokeWidth={3}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="target" 
                        stroke="#22c55e" 
                        strokeDasharray="5 5"
                        fillOpacity={0}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <div className="text-sm text-slate-300">{insights.riskTrajectory.trendAnalysis}</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-pink-400" />
                    Threat Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={threatDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {threatDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {threatDistributionData.map((threat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: threat.color }} />
                        <span className="text-sm text-slate-300">{threat.name}: {threat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Predictive Alerts */}
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" />
                  Predictive Threat Alerts
                </h3>
                <div className="space-y-4">
                  {predictiveAlerts.map((alert) => (
                    <div 
                      key={alert.id}
                      className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-5 border border-yellow-500/30 hover:border-yellow-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                              alert.type === 'imminent' ? 'bg-red-500 text-white' : 'bg-orange-500/20 text-orange-400'
                            }`}>
                              {alert.type === 'imminent' ? '🚨 IMMINENT' : '⚠️ EMERGING'}
                            </span>
                            <span className="text-xs text-slate-400">Probability within: {alert.timeframe}</span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">{alert.title}</h4>
                          <p className="text-sm text-slate-300">{alert.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-3xl font-bold text-yellow-400">{alert.confidence}%</div>
                          <div className="text-xs text-slate-400">Confidence</div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-semibold">
                        View Mitigation Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Risk Drivers */}
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Key Risk Drivers</h3>
                <div className="space-y-3">
                  {insights.riskTrajectory.keyDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-red-400">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-300">{driver}</p>
                      </div>
                      <button className="text-sm text-purple-400 hover:text-purple-300 font-semibold">
                        Details →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Findings Tab */}
          {activeTab === 'findings' && (
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">AI-Identified Security Findings</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-400">Sorted by:</span>
                    <select className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm">
                      <option>Severity</option>
                      <option>Confidence</option>
                      <option>Time Detected</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {insights.keyFindings.map((finding) => (
                    <div 
                      key={finding.id}
                      className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all"
                    >
                      {/* Finding Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                              finding.severity === 'critical' ? 'bg-red-500 text-white' :
                              finding.severity === 'high' ? 'bg-orange-500 text-white' :
                              'bg-yellow-500 text-black'
                            }`}>
                              {finding.severity.toUpperCase()}
                            </span>
                            <span className="text-xs text-slate-500">ID: FINDING-{finding.id.toString().padStart(3, '0')}</span>
                            <div className="flex items-center space-x-1">
                              <Brain className="w-4 h-4 text-purple-400" />
                              <span className="text-xs text-purple-400 font-semibold">AI Detected</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{finding.title}</h3>
                          <p className="text-sm text-slate-300 mb-4">{finding.description}</p>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="w-24 h-24 rounded-full border-8 border-purple-500 flex items-center justify-center mb-2"
                               style={{ 
                                 borderColor: finding.confidence >= 90 ? '#22c55e' : 
                                             finding.confidence >= 70 ? '#eab308' : '#ef4444' 
                               }}>
                            <div>
                              <div className="text-2xl font-bold text-white">{finding.confidence}%</div>
                              <div className="text-xs text-slate-400">Confidence</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Finding Details Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <div className="text-xs text-slate-400 mb-1">Affected Assets</div>
                          <div className="text-2xl font-bold text-white">{finding.affectedAssets}</div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <div className="text-xs text-slate-400 mb-1">Time Window</div>
                          <div className="text-lg font-semibold text-white">{finding.timeframe}</div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <div className="text-xs text-slate-400 mb-1">Risk Level</div>
                          <div className={`text-lg font-semibold ${
                            finding.severity === 'critical' ? 'text-red-400' : 'text-orange-400'
                          }`}>
                            {finding.severity === 'critical' ? 'CRITICAL' : 'HIGH'}
                          </div>
                        </div>
                      </div>

                      {/* AI Reasoning */}
                      <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30 mb-4">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                          <div>
                            <div className="text-sm font-semibold text-purple-300 mb-2">AI Reasoning</div>
                            <p className="text-sm text-slate-300">{finding.aiReasoning}</p>
                          </div>
                        </div>
                      </div>

                      {/* Recommendation */}
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30 mb-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <div className="text-sm font-semibold text-green-300 mb-2">Recommended Action</div>
                            <p className="text-sm text-slate-300">{finding.recommendation}</p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-semibold flex items-center space-x-2">
                          <Target className="w-4 h-4" />
                          <span>Create Incident</span>
                        </button>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold">
                          Export Report
                        </button>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold">
                          Add to Watchlist
                        </button>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold flex items-center space-x-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>Ask AI</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Correlation Insights */}
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Network className="w-5 h-5 mr-2 text-blue-400" />
                  AI Cross-Correlation Insights
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Cross-Source Intelligence</h4>
                    <div className="space-y-2">
                      {insights.correlationAnalysis.crossSourceInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-blue-400">{idx + 1}</span>
                          </div>
                          <p className="text-sm text-slate-300">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Temporal Pattern Analysis</h4>
                    <div className="space-y-2">
                      {insights.correlationAnalysis.temporalPatterns.map((pattern, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-purple-900/10 rounded-lg border border-purple-500/20">
                          <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-300">{pattern}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Predictions Tab */}
          {activeTab === 'predictions' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Predictive Threat Intelligence</h2>
                    <p className="text-orange-300">AI-powered threat forecasting based on multi-variate analysis</p>
                  </div>
                </div>
                <div className="text-sm text-slate-300">
                  Our AI models analyze historical attack patterns, current threat landscape, behavioral indicators, 
                  and intelligence from 45+ sources to predict likely threats with industry-leading accuracy.
                </div>
              </div>

              {/* Threat Predictions */}
              {insights.threatPredictions.map((prediction, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{prediction.threatType}</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-400">Expected: {prediction.timeframe}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          prediction.probability >= 70 ? 'bg-red-500/20 text-red-400' :
                          prediction.probability >= 50 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {prediction.probability >= 70 ? 'HIGH PROBABILITY' :
                           prediction.probability >= 50 ? 'MEDIUM PROBABILITY' :
                           'LOW PROBABILITY'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Probability Gauge */}
                    <div className="ml-6">
                      <div className="relative w-32 h-32">
                        <svg className="transform -rotate-90 w-32 h-32">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="#1e293b"
                            strokeWidth="12"
                            fill="none"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke={prediction.probability >= 70 ? '#ef4444' : 
                                   prediction.probability >= 50 ? '#f59e0b' : '#eab308'}
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={`${prediction.probability * 3.51} 351`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">{prediction.probability}%</div>
                            <div className="text-xs text-slate-400">Probability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Indicators */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Indicators Detected</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {prediction.indicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-start space-x-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                          <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preventive Measures */}
                  <div className="bg-green-900/20 rounded-lg p-5 border border-green-500/30">
                    <h4 className="text-sm font-semibold text-green-300 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      AI-Recommended Preventive Measures
                    </h4>
                    <div className="space-y-2">
                      {prediction.preventiveMeasures.map((measure, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <p className="text-sm text-slate-300 flex-1">{measure}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-4">
                    <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold">
                      Activate Prevention Plan
                    </button>
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold">
                      Schedule Drill
                    </button>
                  </div>
                </div>
              ))}

              {/* Threat Actor Intelligence */}
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-red-400" />
                  Threat Actor Targeting Analysis
                </h3>
                <div className="space-y-4">
                  {insights.threatActorIntelligence.activeActors.map((actor, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{actor.name}</h4>
                          <p className="text-sm text-slate-400 mb-3">{actor.reason}</p>
                          <div className="text-sm text-orange-300 mb-2">
                            <span className="font-semibold">Recent Activity:</span> {actor.recentActivity}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-red-400">{actor.targetingProbability}%</div>
                          <div className="text-xs text-slate-400">Targeting<br/>Probability</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-slate-400 mb-2">Recommended Defenses:</div>
                        <div className="flex flex-wrap gap-2">
                          {actor.recommendedDefenses.map((defense, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg">
                              {defense}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recommendations Tab */}
          {activeTab === 'recommendations' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">AI-Generated Security Recommendations</h2>
                    <p className="text-green-300">Prioritized actions optimized for maximum risk reduction</p>
                  </div>
                  <div className="flex space-x-3">
                    {recommendations.map((rec, idx) => (
                      <div key={idx} className="bg-slate-900/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">{rec.items}</div>
                        <div className="text-xs text-slate-400">{rec.category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommendations List */}
              <div className="space-y-4">
                {insights.automatedRecommendations.map((rec, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                            rec.priority === 1 ? 'bg-red-500' :
                            rec.priority === 2 ? 'bg-orange-500' :
                            'bg-yellow-500 text-black'
                          }`}>
                            #{rec.priority}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{rec.action}</h3>
                            <p className="text-sm text-slate-400">{rec.systems}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-6 text-right">
                        <div className="text-3xl font-bold text-green-400">-{rec.riskReduction}</div>
                        <div className="text-xs text-slate-400">Risk Reduction</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Effort Level</div>
                        <div className={`text-sm font-semibold ${
                          rec.effort === 'High' ? 'text-red-400' :
                          rec.effort === 'Medium' ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>{rec.effort}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Impact</div>
                        <div className={`text-sm font-semibold ${
                          rec.impact === 'Critical' ? 'text-red-400' :
                          rec.impact === 'High' ? 'text-orange-400' :
                          'text-yellow-400'
                        }`}>{rec.impact}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Timeframe</div>
                        <div className="text-sm font-semibold text-white">{rec.timeframe}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">ROI</div>
                        <div className="text-sm font-semibold text-green-400">{rec.costBenefit}</div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30 mb-4">
                      <div className="text-sm text-slate-300">{rec.costBenefit}</div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg text-sm font-semibold flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve & Schedule</span>
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold">
                        Export Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ask AI Chat Tab */}
          {activeTab === 'chat' && (
            <div className="grid grid-cols-3 gap-6">
              {/* Chat Interface */}
              <div className="col-span-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 flex flex-col h-[700px]">
                {/* Chat Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Sentient Analyst AI</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm text-green-400">Online & Ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {conversationHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
                      <h4 className="text-lg font-semibold text-white mb-2">Ask me anything about your security posture</h4>
                      <p className="text-sm text-slate-400 mb-6">
                        I can help analyze threats, explain findings, suggest defenses, and provide strategic guidance
                      </p>
                      <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
                        {[
                          'What are our top 3 critical risks?',
                          'How can we prevent ransomware?',
                          'Analyze our vulnerability exposure',
                          'What threat actors target us?'
                        ].map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setUserQuery(suggestion);
                              setTimeout(() => handleAskAI(), 100);
                            }}
                            className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all text-left"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    conversationHistory.map((message) => (
                      <div 
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : ''}`}>
                          <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              message.type === 'user' 
                                ? 'bg-blue-500/20' 
                                : 'bg-gradient-to-br from-purple-600 to-pink-600'
                            }`}>
                              {message.type === 'user' ? (
                                <span className="text-blue-400 font-bold">U</span>
                              ) : (
                                <Brain className="w-5 h-5 text-white" />
                              )}
                            </div>
                            <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                              <div className={`inline-block px-4 py-3 rounded-2xl ${
                                message.type === 'user'
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-800 text-slate-200'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                              </div>
                              {message.type === 'ai' && (
                                <div className="mt-2 flex items-center space-x-3 text-xs text-slate-500">
                                  <div className="flex items-center space-x-1">
                                    <CheckCircle className="w-3 h-3" />
                                    <span>{message.confidence}% Confidence</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Database className="w-3 h-3" />
                                    <span>{message.sources.length} Sources</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  
                  {aiTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white animate-pulse" />
                        </div>
                        <div className="bg-slate-800 rounded-2xl px-4 py-3">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-slate-700">
                  <div className="flex items-end space-x-3">
                    <div className="flex-1">
                      <textarea
                        value={userQuery}
                        onChange={(e) => setUserQuery(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAskAI();
                          }
                        }}
                        placeholder="Ask me about threats, vulnerabilities, recommendations..."
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
                        rows="3"
                      />
                    </div>
                    <button
                      onClick={handleAskAI}
                      disabled={!userQuery.trim() || aiTyping}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-lg font-semibold flex items-center space-x-2 h-[52px]"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send</span>
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Press Enter to send, Shift+Enter for new line
                  </div>
                </div>
              </div>

              {/* AI Capabilities Panel */}
              <div className="space-y-6">
                {/* AI Stats */}
                <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                    <Activity className="w-4 h-4 mr-2 text-purple-400" />
                    AI Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Queries Processed', value: '1,247', change: '+23 today' },
                      { label: 'Avg Response Time', value: '1.2s', change: '15% faster' },
                      { label: 'Accuracy Rate', value: '94.7%', change: '+2.1%' },
                      { label: 'User Satisfaction', value: '4.8/5', change: '342 ratings' }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                        </div>
                        <div className="text-xs text-green-400">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
                  <h4 className="text-sm font-semibold text-white mb-4">Quick Insights</h4>
                  <div className="space-y-2">
                    {[
                      { icon: Target, label: 'Risk Summary', action: 'Analyze' },
                      { icon: AlertTriangle, label: 'Critical Alerts', action: 'Review' },
                      { icon: Shield, label: 'Defense Status', action: 'Check' },
                      { icon: TrendingUp, label: 'Threat Forecast', action: 'View' }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center justify-between p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="text-sm text-white">{item.label}</span>
                        </div>
                        <span className="text-xs text-purple-400 group-hover:text-purple-300">
                          {item.action} →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Learning */}
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <h4 className="text-sm font-semibold text-white">Continuous Learning</h4>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">
                    AI model continuously improves by analyzing your organization's unique threat patterns and security responses.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Model Training:</span>
                      <span className="text-white">99.2% complete</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[99%]"></div>
                    </div>
                  </div>
                </div>

                {/* Export Chat */}
                <button className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-white transition-all flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export Conversation</span>
                </button>
              </div>
            </div>
          )}

          {/* Global Actions */}
          <div className="flex items-center justify-between bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <div>
              <div className="text-lg font-semibold text-white mb-1">Sentient Analyst Report</div>
              <div className="text-sm text-slate-400">
                Complete AI analysis with {insights.keyFindings.length} findings and {insights.threatPredictions.length} predictions
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Full Report</span>
              </button>
              <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share with Team</span>
              </button>
              <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Review</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default SentientAnalyst;