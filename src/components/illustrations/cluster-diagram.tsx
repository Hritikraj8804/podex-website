"use client";

import { cn } from "@/lib/utils";

export function ClusterDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 600 400" className="w-full h-auto" aria-label="Kubernetes cluster architecture diagram">
        <defs>
          <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Cluster boundary */}
        <rect x="20" y="20" width="560" height="360" rx="16" fill="none" stroke="url(#grad-primary)" strokeWidth="2" strokeDasharray="8 4" opacity="0.5" />
        <text x="40" y="50" fill="#818cf8" fontSize="14" fontWeight="600">Kubernetes Cluster</text>

        {/* Node 1 */}
        <rect x="40" y="70" width="250" height="140" rx="12" fill="rgba(99,102,241,0.08)" stroke="#6366f1" strokeWidth="1.5" />
        <text x="60" y="95" fill="#a5b4fc" fontSize="12" fontWeight="600">Node 1</text>

        {/* Pods in Node 1 */}
        <rect x="55" y="110" width="100" height="40" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="65" y="135" fill="#34d399" fontSize="10">Pod A</text>
        <circle cx="140" cy="130" r="5" fill="#10b981" filter="url(#glow)" />

        <rect x="165" y="110" width="100" height="40" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="175" y="135" fill="#34d399" fontSize="10">Pod B</text>
        <circle cx="250" cy="130" r="5" fill="#10b981" filter="url(#glow)" />

        <rect x="55" y="160" width="100" height="40" rx="8" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth="1" />
        <text x="65" y="185" fill="#22d3ee" fontSize="10">Pod C</text>
        <circle cx="140" cy="180" r="5" fill="#06b6d4" filter="url(#glow)" />

        <rect x="165" y="160" width="100" height="40" rx="8" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="1" />
        <text x="175" y="185" fill="#fbbf24" fontSize="10">Pod D</text>
        <circle cx="250" cy="180" r="5" fill="#fbbf24" />

        {/* Node 2 */}
        <rect x="310" y="70" width="250" height="140" rx="12" fill="rgba(99,102,241,0.08)" stroke="#6366f1" strokeWidth="1.5" />
        <text x="330" y="95" fill="#a5b4fc" fontSize="12" fontWeight="600">Node 2</text>

        <rect x="325" y="110" width="100" height="40" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="335" y="135" fill="#34d399" fontSize="10">Pod E</text>
        <circle cx="410" cy="130" r="5" fill="#10b981" filter="url(#glow)" />

        <rect x="435" y="110" width="100" height="40" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="445" y="135" fill="#34d399" fontSize="10">Pod F</text>
        <circle cx="520" cy="130" r="5" fill="#10b981" filter="url(#glow)" />

        <rect x="325" y="160" width="100" height="40" rx="8" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="1" />
        <text x="335" y="185" fill="#c084fc" fontSize="10">Pod G</text>
        <circle cx="410" cy="180" r="5" fill="#a855f7" filter="url(#glow)" />

        {/* Services */}
        <rect x="40" y="230" width="520" height="60" rx="12" fill="rgba(168,85,247,0.08)" stroke="#a855f7" strokeWidth="1.5" />
        <text x="60" y="255" fill="#c084fc" fontSize="12" fontWeight="600">Services & Ingress</text>

        <rect x="200" y="240" width="80" height="35" rx="6" fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="1" />
        <text x="215" y="262" fill="#a5b4fc" fontSize="9">Service A</text>

        <rect x="300" y="240" width="80" height="35" rx="6" fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="1" />
        <text x="315" y="262" fill="#a5b4fc" fontSize="9">Service B</text>

        <rect x="400" y="240" width="80" height="35" rx="6" fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="1" />
        <text x="415" y="262" fill="#a5b4fc" fontSize="9">Ingress</text>

        {/* Storage */}
        <rect x="40" y="305" width="250" height="60" rx="12" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="60" y="330" fill="#22d3ee" fontSize="12" fontWeight="600">Persistent Storage</text>
        <rect x="60" y="340" width="60" height="15" rx="4" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.5" />
        <text x="70" y="351" fill="#67e8f9" fontSize="8">PVC 1</text>
        <rect x="130" y="340" width="60" height="15" rx="4" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.5" />
        <text x="140" y="351" fill="#67e8f9" fontSize="8">PVC 2</text>
        <rect x="200" y="340" width="60" height="15" rx="4" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.5" />
        <text x="210" y="351" fill="#67e8f9" fontSize="8">ConfigMap</text>

        {/* Config */}
        <rect x="310" y="305" width="250" height="60" rx="12" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5" />
        <text x="330" y="330" fill="#34d399" fontSize="12" fontWeight="600">Configuration</text>
        <rect x="330" y="340" width="60" height="15" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="0.5" />
        <text x="340" y="351" fill="#6ee7b7" fontSize="8">Secrets</text>
        <rect x="400" y="340" width="60" height="15" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="0.5" />
        <text x="410" y="351" fill="#6ee7b7" fontSize="8">RBAC</text>
        <rect x="470" y="340" width="60" height="15" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="0.5" />
        <text x="480" y="351" fill="#6ee7b7" fontSize="8">Helm</text>

        {/* Connection lines */}
        <line x1="105" y1="150" x2="105" y2="230" stroke="#6366f1" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
        <line x1="215" y1="150" x2="240" y2="230" stroke="#6366f1" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
        <line x1="410" y1="150" x2="340" y2="230" stroke="#6366f1" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
        <line x1="490" y1="150" x2="440" y2="230" stroke="#6366f1" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
