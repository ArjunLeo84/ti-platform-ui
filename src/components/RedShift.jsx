// RedShift.jsx
import React, { useState, useEffect } from 'react';
import { Zap, Target, Shield, AlertTriangle, CheckCircle, Code, Terminal, Lock, Unlock, Activity } from 'lucide-react';

const RedShift = () => {
  const [testing, setTesting] = useState(false);
  const [testProgress, setTestProgress] = useState(0);
  const [currentTest, setCurrentTest] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [liveOutput, setLiveOutput] = useState([]);
  const [exploitAttempts, setExploitAttempts] = useState([]);

  const testPhases = [
    { name: 'Reconnaissance', duration: 3000, tests: ['DNS Enumeration', 'Port Scanning', 'Service Detection'] },
    { name: 'Vulnerability Scanning', duration: 4000, tests: ['CVE Detection', 'Misconfigurations', 'Weak Passwords'] },
    { name: 'Exploitation Attempts', duration: 5000, tests: ['SQL Injection', 'XSS Testing', 'RCE Attempts'] },
    { name: 'Privilege Escalation', duration: 3500, tests: ['Sudo Misconfig', 'SUID Binaries', 'Kernel Exploits'] },
    { name: 'Lateral Movement', duration: 2500, tests: ['Credential Harvesting', 'Network Pivoting'] },
    { name: 'Data Exfiltration Test', duration: 2000, tests: ['Data Access', 'Egress Testing'] }
  ];

  const startPentest = async () => {
    setTesting(true);
    setTestProgress(0);
    setLiveOutput([]);
    setExploitAttempts([]);
    setTestResults(null);

    for (let i = 0; i < testPhases.length; i++) {
      setCurrentTest(testPhases[i].name);
      
      // Simulate live terminal output
      const outputInterval = setInterval(() => {
        const outputs = [
          `[*] Scanning target: 203.0.113.42`,
          `[+] Port 80 open - HTTP detected`,
          `[+] Port 443 open - HTTPS detected`,
          `[!] Vulnerability found: CVE-2024-${Math.floor(Math.random() * 9999)}`,
          `[*] Attempting exploit...`,
          `[+] Exploit successful!`,
          `[*] Gathering credentials...`,
          `[+] Found hash: $2a$10$...`,
          `[!] Weak password detected`,
          `[*] Attempting lateral movement...`
        ];
        
        const output = {
          time: new Date().toLocaleTimeString(),
          text: outputs[Math.floor(Math.random() * outputs.length)],
          type: outputs[Math.floor(Math.random() * outputs.length)].includes('[!]') ? 'warning' :
                outputs[Math.floor(Math.random() * outputs.length)].includes('[+]') ? 'success' : 'info'
        };
        
        setLiveOutput(prev => [output, ...prev].slice(0, 20));
      }, 600);

      // Simulate exploit attempts
      setTimeout(() => {
        const newAttempt = {
          id: Date.now(),
          phase: testPhases[i].name,
          test: testPhases[i].tests[Math.floor(Math.random() * testPhases[i].tests.length)],
          result: Math.random() > 0.3 ? 'success' : 'failed',
          severity: ['critical', 'high', 'medium'][Math.floor(Math.random() * 3)]
        };
        setExploitAttempts(prev => [...prev, newAttempt]);
      }, testPhases[i].duration / 2);

      await new Promise(resolve => setTimeout(resolve, testPhases[i].duration));
      clearInterval(outputInterval);
      
      setTestProgress(((i + 1) / testPhases.length) * 100);
    }

    // Generate final results
    setTestResults({
      target: '203.0.113.42 (acmecorp.com)',
      duration: '18.5 seconds',
      findings: {
        critical: 2,
        high: 5,
        medium: 12,
        low: 23,
        info: 45
      },
      vulnerabilities: [
        {
          id: 'VULN-001',
          title: 'SQL Injection in Login Form',
          severity: 'Critical',
          cvss: 9.8,
          exploitable: true,
          description: 'Username parameter vulnerable to boolean-based blind SQL injection',
          remediation: 'Use parameterized queries and input validation'
        },
        {
          id: 'VULN-002',
          title: 'Unauthenticated Admin Panel Access',
          severity: 'Critical',
          cvss: 10.0,
          exploitable: true,
          description: 'Admin panel accessible without authentication at /admin',
          remediation: 'Implement authentication and IP whitelisting'
        },
        {
          id: 'VULN-003',
          title: 'Cross-Site Scripting (XSS)',
          severity: 'High',
          cvss: 7.5,
          exploitable: true,
          description: 'Reflected XSS in search parameter',
          remediation: 'Implement output encoding and CSP headers'
        },
        {
          id: 'VULN-004',
          title: 'Weak TLS Configuration',
          severity: 'High',
          cvss: 7.4,
          exploitable: false,
          description: 'Server supports TLS 1.0 and weak cipher suites',
          remediation: 'Disable TLS 1.0/1.1, use strong ciphers only'
        },
        {
          id: 'VULN-005',
          title: 'Missing Security Headers',
          severity: 'Medium',
          cvss: 5.3,
          exploitable: false,
          description: 'HSTS, X-Frame-Options, and CSP headers not implemented',
          remediation: 'Configure security headers on web server'
        }
      ],
      exploited_successfully: 3,
      attack_path: [
        'SQL Injection → Database Access',
        'Credential Harvesting → Admin Access',
        'Admin Panel → System Shell',
        'Privilege Escalation → Root Access'
      ],
      recommendations: [
        'Implement WAF to protect against common attacks',
        'Enforce strong authentication on all admin interfaces',
        'Regular security patching and updates',
        'Implement network segmentation',
        'Deploy comprehensive logging and monitoring'
      ]
    });

    setTesting(false);
    setCurrentTest('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950 to-slate-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">RedShift</h1>
            <p className="text-orange-300">Offensive Security & Penetration Testing</p>
          </div>
        </div>

        <button
          onClick={startPentest}
          disabled={testing}
          className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-lg font-semibold flex items-center space-x-2"
        >
          <Target className={`w-5 h-5 ${testing ? 'animate-pulse' : ''}`} />
          <span>{testing ? 'Testing in Progress...' : 'Launch Pentest'}</span>
        </button>
      </div>

      {/* Test Configuration */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-400 mb-4">Target Configuration</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Target IP/Domain</label>
              <input
                type="text"
                defaultValue="203.0.113.42"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Scan Intensity</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm">
                <option>Stealth</option>
                <option>Normal</option>
                <option>Aggressive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-400 mb-4">Test Modules</h3>
          <div className="space-y-2">
            {['Web Application', 'Network Services', 'Authentication', 'Authorization', 'Data Exposure'].map((module, idx) => (
              <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded bg-slate-800 border-slate-600" />
                <span className="text-sm text-white">{module}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-400 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            {[
              { label: 'Tests Run', value: '847' },
              { label: 'Vulnerabilities Found', value: '234' },
              { label: 'Success Rate', value: '87%' },
              { label: 'Avg. Duration', value: '18.5s' }
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-xs text-slate-500">{stat.label}:</span>
                <span className="text-sm font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Testing Interface */}
      {testing && (
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Activity className="w-6 h-6 text-orange-400 animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-white">Penetration Test in Progress</h2>
                <p className="text-sm text-slate-400">Target: 203.0.113.42 (acmecorp.com)</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-400">{Math.round(testProgress)}%</div>
              <div className="text-sm text-slate-400">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Current Phase: {currentTest}</span>
              <span className="text-sm text-orange-400 font-semibold">
                {exploitAttempts.filter(e => e.result === 'success').length} successful exploits
              </span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                style={{ width: `${testProgress}%` }}
              />
            </div>
          </div>

          {/* Test Phases */}
          <div className="grid grid-cols-6 gap-4 mb-8">
            {testPhases.map((phase, idx) => (
              <div 
                key={idx}
                className={`bg-slate-800/50 rounded-lg p-4 border transition-all ${
                  currentTest === phase.name 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20' 
                    : (testProgress / 100) * testPhases.length > idx
                    ? 'border-green-500/50'
                    : 'border-slate-700'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center ${
                    (testProgress / 100) * testPhases.length > idx
                      ? 'bg-green-500/20'
                      : currentTest === phase.name
                      ? 'bg-orange-500/20'
                      : 'bg-slate-700/50'
                  }`}>
                    {(testProgress / 100) * testPhases.length > idx ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : currentTest === phase.name ? (
                      <Activity className="w-6 h-6 text-orange-400 animate-pulse" />
                    ) : (
                      <Shield className="w-6 h-6 text-slate-600" />
                    )}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{phase.name}</div>
                  <div className="text-xs text-slate-500">
                    {(testProgress / 100) * testPhases.length > idx 
                      ? 'Complete' 
                      : currentTest === phase.name 
                      ? 'Running...'
                      : 'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Terminal and Exploit Results */}
          <div className="grid grid-cols-2 gap-6">
            {/* Terminal Output */}
            <div className="bg-black/80 rounded-xl p-4 border border-orange-500/30">
              <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-slate-700">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-white">Live Terminal Output</span>
              </div>
              <div className="font-mono text-xs space-y-1 max-h-[400px] overflow-y-auto">
                {liveOutput.map((output, idx) => (
                  <div key={idx} className={`animate-fade-in ${
                    output.type === 'success' ? 'text-green-400' :
                    output.type === 'warning' ? 'text-yellow-400' :
                    'text-cyan-400'
                  }`}>
                    <span className="text-slate-500">[{output.time}]</span> {output.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Exploit Attempts */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-slate-700">
                <Code className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Exploit Attempts</span>
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {exploitAttempts.map((attempt, idx) => (
                  <div key={attempt.id} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700 animate-slide-in">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {attempt.result === 'success' ? (
                          <Unlock className="w-4 h-4 text-green-400" />
                        ) : (
                          <Lock className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-xs font-semibold text-white">{attempt.test}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        attempt.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        attempt.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {attempt.severity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{attempt.phase}</span>
                      <span className={`font-semibold ${
                        attempt.result === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {attempt.result === 'success' ? '✓ Exploited' : '✗ Failed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Results */}
      {testResults && (
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Penetration Test Complete</h2>
                <p className="text-orange-300">Target: {testResults.target}</p>
                <p className="text-sm text-slate-400">Duration: {testResults.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  {testResults.findings.critical + testResults.findings.high}
                </div>
                <div className="text-sm text-slate-300">Critical & High Issues</div>
              </div>
            </div>

            {/* Findings Summary */}
            <div className="grid grid-cols-5 gap-4">
              {[
                { label: 'Critical', count: testResults.findings.critical, color: 'red' },
                { label: 'High', count: testResults.findings.high, color: 'orange' },
                { label: 'Medium', count: testResults.findings.medium, color: 'yellow' },
                { label: 'Low', count: testResults.findings.low, color: 'blue' },
                { label: 'Info', count: testResults.findings.info, color: 'slate' }
              ].map((finding, idx) => (
                <div key={idx} className={`bg-${finding.color}-500/10 rounded-lg p-4 border border-${finding.color}-500/30 text-center`}>
                  <div className={`text-3xl font-bold text-${finding.color}-400 mb-1`}>{finding.count}</div>
                  <div className="text-sm text-slate-300">{finding.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vulnerability Details */}
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Vulnerability Details</h2>
            <div className="space-y-4">
              {testResults.vulnerabilities.map((vuln, idx) => (
                <div key={vuln.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${
                          vuln.severity === 'Critical' ? 'bg-red-500 text-white' :
                          vuln.severity === 'High' ? 'bg-orange-500 text-white' :
                          'bg-yellow-500 text-black'
                        }`}>
                          {vuln.severity}
                        </span>
                        <span className="text-xs font-mono text-slate-500">{vuln.id}</span>
                        {vuln.exploitable && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded flex items-center space-x-1">
                            <Zap className="w-3 h-3" />
                            <span>EXPLOITABLE</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{vuln.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{vuln.description}</p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-3 mb-3">
                        <div className="text-xs text-slate-500 mb-1">Remediation</div>
                        <div className="text-sm text-green-400">{vuln.remediation}</div>
                      </div>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <div className="text-3xl font-bold text-orange-400 mb-1">{vuln.cvss}</div>
                      <div className="text-xs text-slate-400">CVSS Score</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-lg">
                      View Full Report
                    </button>
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg">
                      Export POC
                    </button>
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg">
                      Create Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attack Path Visualization */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-400" />
                Attack Path
              </h2>
              <div className="space-y-3">
                {testResults.attack_path.map((step, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-orange-500 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-2 border-slate-900" />
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-xs text-orange-400 font-semibold mb-1">Step {idx + 1}</div>
                      <div className="text-sm text-white">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Recommendations
              </h2>
              <div className="space-y-3">
                {testResults.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-green-400">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 flex-1">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="flex items-center justify-between bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
            <div>
              <div className="text-lg font-semibold text-white mb-1">Export Penetration Test Report</div>
              <div className="text-sm text-slate-400">
                Successfully exploited {testResults.exploited_successfully} vulnerabilities
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg font-semibold">
                Export Full Report
              </button>
              <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold">
                Schedule Retest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedShift;