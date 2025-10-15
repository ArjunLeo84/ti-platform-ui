// AccessGate.jsx - Organization Onboarding Portal
import React, { useState } from 'react';
import { Building2, Users, Shield, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const AccessGate = () => {
  const [step, setStep] = useState(1);
  const [orgData, setOrgData] = useState({
    name: '',
    domain: '',
    industry: '',
    size: '',
    primaryContact: '',
    securityTeam: []
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">AccessGate</h1>
            </div>
            <div className="text-purple-300 text-sm">Organization Onboarding</div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[
              { num: 1, title: 'Organization Info', icon: Building2 },
              { num: 2, title: 'Security Team', icon: Users },
              { num: 3, title: 'Asset Discovery', icon: Shield },
              { num: 4, title: 'Configuration', icon: CheckCircle }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step >= s.num 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {step > s.num ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <s.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className="mt-2 text-sm text-slate-300">{s.title}</span>
                </div>
                {idx < 3 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step > s.num ? 'bg-purple-600' : 'bg-slate-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Organization Information</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Primary Domain *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="acmecorp.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Industry *
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500">
                    <option>Select Industry</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Technology</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Hospitality</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Organization Size *
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500">
                    <option>Select Size</option>
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1001-5000 employees</option>
                    <option>5000+ employees</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Additional Domains (one per line)
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 h-32"
                    placeholder="subsidiary1.com&#10;subsidiary2.com&#10;product.io"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Security Team Configuration</h2>
              
              {/* Team Members List */}
              <div className="space-y-4">
                {[
                  { name: 'John Doe', role: 'CISO', email: 'john.doe@acme.com', access: 'Full Access' },
                  { name: 'Jane Smith', role: 'Security Analyst', email: 'jane.smith@acme.com', access: 'Analyst' }
                ].map((member, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-white font-medium">{member.name}</div>
                        <div className="text-sm text-slate-400">{member.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm">
                        <div className="text-slate-400">Role</div>
                        <div className="text-white">{member.role}</div>
                      </div>
                      <div className="text-sm">
                        <div className="text-slate-400">Access Level</div>
                        <div className="text-purple-400">{member.access}</div>
                      </div>
                      <button className="text-red-400 hover:text-red-300">Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Member Form */}
              <div className="bg-slate-900/30 rounded-lg p-6 border border-dashed border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Add Team Member</h3>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white"
                    placeholder="Email"
                  />
                  <select className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white">
                    <option>Access Level</option>
                    <option>Full Access</option>
                    <option>Analyst</option>
                    <option>Read Only</option>
                  </select>
                </div>
                <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm">
                  Add Member
                </button>
              </div>

              <div className="flex justify-between pt-6">
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                  Back
                </button>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2">
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Initial Asset Discovery</h2>
              
              {/* Discovery Status */}
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white animate-pulse" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Discovery in Progress</div>
                      <div className="text-sm text-slate-300">Scanning acmecorp.com and subsidiaries</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">67%</div>
                    <div className="text-sm text-slate-300">Complete</div>
                  </div>
                </div>
                
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-2/3 animate-pulse" />
                </div>
              </div>

              {/* Discovery Results */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Subdomains', count: 47, icon: '🌐', color: 'blue' },
                  { label: 'IP Addresses', count: 23, icon: '🖥️', color: 'green' },
                  { label: 'Technologies', count: 156, icon: '⚙️', color: 'purple' },
                  { label: 'Certificates', count: 12, icon: '🔒', color: 'yellow' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-white">{item.count}</div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Live Discovery Feed */}
              <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-600 max-h-64 overflow-y-auto">
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Discovery Activity</h3>
                <div className="space-y-2 text-sm font-mono">
                  {[
                    '✓ Found subdomain: api.acmecorp.com',
                    '✓ Detected technology: nginx/1.21.0',
                    '✓ Found subdomain: mail.acmecorp.com',
                    '✓ SSL certificate expires: 2025-12-31',
                    '✓ Found subdomain: cdn.acmecorp.com',
                    '⏳ Scanning ports on 203.0.113.42...',
                    '✓ Open ports: 80, 443, 8080',
                  ].map((log, idx) => (
                    <div key={idx} className="text-green-400 animate-fade-in">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                  Back
                </button>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2">
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Onboarding Complete!</h2>
                <p className="text-slate-300">Your organization is now configured and ready to use the platform</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Assets Discovered', value: '238' },
                  { label: 'Team Members', value: '12' },
                  { label: 'Initial Risk Score', value: '72/100' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-lg p-6 text-center border border-slate-600">
                    <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  {[
                    'Review discovered assets in Surface Sentinel',
                    'Configure alert thresholds in Risk Register',
                    'Set up integrations with your SIEM',
                    'Schedule your first security assessment'
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center pt-6">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold">
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessGate;