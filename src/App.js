import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Shield, Activity, Globe, Eye, Zap, AlertCircle, 
  Bug, Brain, Users, Menu, X 
} from 'lucide-react';

// Import all components
import AccessGate from './components/AccessGate';
import CommandNexus from './components/CommandNexus';
import IntelliSphereOverview from './components/IntelliSphereOverview';
import IntelliSphereLandscape from './components/IntelliSphereLandscape';
import IntelliSphereEnrichment from './components/IntelliSphereEnrichment';
import IntelliSphereThreatActors from './components/IntelliSphereThreatActors';
import SurfaceSentinel from './components/SurfaceSentinel';
import DeepGuard from './components/DeepGuard';
import RedShift from './components/RedShift';
import SentientAnalyst from './components/SentientAnalyst';
import VulnMatrix from './components/VulnMatrix';
import RiskRegister from './components/RiskRegister';

// Navigation component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'AccessGate', icon: Users, color: 'purple' },
    { path: '/dashboard', name: 'CommandNexus', icon: Activity, color: 'blue' },
    { path: '/intelligence', name: 'IntelliSphere - Overview', icon: Shield, color: 'purple' },
    { path: '/intelligenceLandscape', name: 'IntelliSphere - Threat Landscape', icon: Shield, color: 'purple' },
    { path: '/intelligenceEnrichment', name: 'IntelliSphere - Enrichment', icon: Shield, color: 'purple'},
    { path: '/intelligenceThreatActors', name: 'IntelliSphere - Threat Actors', icon: Shield, color: 'purple' },
    { path: '/surface', name: 'Surface Sentinel', icon: Globe, color: 'cyan' },
    { path: '/deepguard', name: 'DeepGuard', icon: Eye, color: 'red' },
    { path: '/redshift', name: 'RedShift', icon: Zap, color: 'orange' },
    { path: '/sentient', name: 'Sentient Analyst', icon: Brain, color: 'pink' },
    { path: '/vulns', name: 'VulnMatrix', icon: Bug, color: 'amber' },
    { path: '/risks', name: 'Risk Register', icon: AlertCircle, color: 'emerald' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TI Platform</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? `bg-${item.color}-600 text-white`
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<AccessGate />} />
            <Route path="/dashboard" element={<CommandNexus />} />
            <Route path="/intelligence" element={<IntelliSphereOverview />} />
            <Route path="/intelligenceLandscape" element={<IntelliSphereLandscape />} />
            <Route path="/intelligenceEnrichment" element={<IntelliSphereEnrichment />} />
            <Route path="/intelligenceThreat Actors" element={<IntelliSphereThreatActors />} />
            <Route path="/surface" element={<SurfaceSentinel />} />
            <Route path="/deepguard" element={<DeepGuard />} />
            <Route path="/redshift" element={<RedShift />} />
            <Route path="/sentient" element={<SentientAnalyst />} />
            <Route path="/vulns" element={<VulnMatrix />} />
            <Route path="/risks" element={<RiskRegister />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;