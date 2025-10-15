// IntelliSphere/Landscape.jsx
import React, { useState } from 'react';
import { Globe, MapPin, Activity, Zap, Filter } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const ThreatLandscape = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [timeRange, setTimeRange] = useState('24h');

  // Threat hotspots data
  const threatLocations = [
    { name: 'Eastern Europe', coords: [30, 50], threats: 247, severity: 'critical' },
    { name: 'East Asia', coords: [120, 35], threats: 189, severity: 'high' },
    { name: 'North America', coords: [-95, 40], threats: 156, severity: 'high' },
    { name: 'Middle East', coords: [45, 30], threats: 134, severity: 'medium' },
    { name: 'South America', coords: [-60, -15], threats: 89, severity: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Global Threat Landscape</h1>
          <p className="text-slate-400">Real-time threat activity across the globe</p>
        </div>
        <div className="flex space-x-3">
          {['24h', '7d', '30d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg transition-all ${
                timeRange === range
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Global Map */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 mb-8">
        <div className="relative h-[500px]">
          <ComposableMap
            projectionConfig={{
              scale: 147
            }}
            className="w-full h-full"
          >
            <Geographies geography="/world-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1e293b"
                    stroke="#475569"
                    strokeWidth={0.5}
                    style={{
                      hover: {
                        fill: "#334155",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
            
            {/* Threat Markers */}
            {threatLocations.map((location, idx) => (
              <Marker key={idx} coordinates={location.coords}>
                <g className="cursor-pointer" onClick={() => setSelectedRegion(location.name)}>
                  <circle
                    r={Math.sqrt(location.threats) / 2}
                    fill={
                      location.severity === 'critical' ? '#ef4444' :
                      location.severity === 'high' ? '#f59e0b' :
                      '#eab308'
                    }
                    fillOpacity={0.6}
                    className="animate-pulse"
                  />
                  <circle
                    r={Math.sqrt(location.threats) / 2 + 5}
                    fill="none"
                    stroke={
                      location.severity === 'critical' ? '#ef4444' :
                      location.severity === 'high' ? '#f59e0b' :
                      '#eab308'
                    }
                    strokeWidth={2}
                    strokeOpacity={0.3}
                    className="animate-ping"
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-lg rounded-lg p-4 border border-slate-700">
            <div className="text-sm font-semibold text-white mb-2">Threat Activity</div>
            <div className="space-y-2">
              {[
                { label: 'Critical', color: 'bg-red-500', count: '500+' },
                { label: 'High', color: 'bg-orange-500', count: '100-500' },
                { label: 'Medium', color: 'bg-yellow-500', count: '50-100' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-xs text-slate-300">{item.label} ({item.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Counter */}
          <div className="absolute top-4 right-4 bg-red-900/90 backdrop-blur-lg rounded-lg p-4 border border-red-500/50">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-red-400 animate-pulse" />
              <div>
                <div className="text-2xl font-bold text-white">815</div>
                <div className="text-xs text-red-300">Active Threats</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="grid grid-cols-5 gap-6">
        {threatLocations.map((location, idx) => (
          <div 
            key={idx}
            className={`bg-slate-900/50 backdrop-blur-lg rounded-xl p-5 border cursor-pointer transition-all hover:scale-105 ${
              selectedRegion === location.name
                ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                : 'border-slate-700/50'
            }`}
            onClick={() => setSelectedRegion(location.name)}
          >
            <div className="flex items-center justify-between mb-3">
              <MapPin className={`w-5 h-5 ${
                location.severity === 'critical' ? 'text-red-400' :
                location.severity === 'high' ? 'text-orange-400' :
                'text-yellow-400'
              }`} />
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                location.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                location.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {location.severity}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{location.threats}</div>
            <div className="text-sm text-slate-400">{location.name}</div>
            <div className="mt-3 pt-3 border-t border-slate-700">
              <div className="text-xs text-slate-500">Top Threat Type</div>
              <div className="text-xs text-white font-semibold">Ransomware</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatLandscape;