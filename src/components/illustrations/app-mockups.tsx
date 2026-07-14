"use client";

import { cn } from "@/lib/utils";

interface MockupWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function MockupWindow({ title, children, className }: MockupWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-2xl", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground font-medium">{title}</span>
        <span className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          Connected  kind-podex
        </span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <MockupWindow title="Podex  Dashboard" className={className}>
      <div className="bg-background p-4">
        <div className="mb-4 grid grid-cols-4 gap-3">
          {[
            { label: "Nodes", value: "3", color: "text-emerald-500" },
            { label: "Pods", value: "24", color: "text-blue-500" },
            { label: "Deployments", value: "12", color: "text-emerald-500" },
            { label: "Services", value: "8", color: "text-cyan-500" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border bg-surface p-3 text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
          <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#334155" strokeWidth="8" className="opacity-20" />
            <circle cx="40" cy="40" r="35" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="183.3 36.7" strokeDashoffset="0" transform="rotate(-90, 40, 40)" />
            <circle cx="40" cy="40" r="35" fill="none" stroke="#f59e0b" strokeWidth="8" strokeDasharray="18.3 201.7" strokeDashoffset="183.3" transform="rotate(-90, 40, 40)" />
            <circle cx="40" cy="40" r="35" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="18.3 201.7" strokeDashoffset="201.7" transform="rotate(-90, 40, 40)" />
          </svg>
          <div>
            <div className="text-sm font-medium text-foreground">Cluster Health</div>
            <div className="mt-1 text-xs text-muted-foreground">20 Running · 2 Pending · 2 Failed</div>
            <div className="mt-2 flex gap-3 text-xs">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Healthy</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-500" /> Warning</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500" /> Critical</span>
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

export function PodsMockup({ className }: { className?: string }) {
  const pods = [
    { name: "nginx-7d4b8c6f5-x2k9m", namespace: "production", status: "Running", node: "node-1", restarts: 0, age: "3d" },
    { name: "nginx-7d4b8c6f5-q8p3l", namespace: "production", status: "Running", node: "node-2", restarts: 0, age: "3d" },
    { name: "api-server-5f9d4c8a2-m7n4j", namespace: "production", status: "Running", node: "node-1", restarts: 2, age: "5d" },
    { name: "redis-master-0", namespace: "default", status: "Running", node: "node-2", restarts: 0, age: "7d" },
    { name: "worker-6b8f9d2c3-k9r5t", namespace: "production", status: "Pending", node: "-", restarts: 0, age: "2m" },
    { name: "test-app-4c7d8e9f1-p2q6w", namespace: "staging", status: "CrashLoopBackOff", node: "node-1", restarts: 8, age: "15m" },
  ];

  const statusColor: Record<string, string> = {
    Running: "#10b981",
    Pending: "#fbbf24",
    CrashLoopBackOff: "#ef4444",
  };

  return (
    <MockupWindow title="Podex  Explorer" className={className}>
      <div className="bg-background">
        <div className="flex items-center gap-3 border-b border-border px-4 py-2">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs">
            <svg className="h-3.5 w-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="text-muted-foreground">Search pods...</span>
          </div>
          <div className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-primary">
            All Namespaces
          </div>
          <div className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            All Status
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Namespace</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Node</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Restarts</th>
                <th className="px-4 py-2 text-left font-medium text-muted-foreground">Age</th>
              </tr>
            </thead>
            <tbody>
              {pods.map((pod) => (
                <tr key={pod.name} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="px-4 py-2 font-mono text-foreground">{pod.name}</td>
                  <td className="px-4 py-2">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-primary">{pod.namespace}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: statusColor[pod.status] || "#94a3b8" }} />
                      <span style={{ color: statusColor[pod.status] }}>{pod.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{pod.node}</td>
                  <td className="px-4 py-2 text-muted-foreground">{pod.restarts}</td>
                  <td className="px-4 py-2 text-muted-foreground">{pod.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MockupWindow>
  );
}

export function TerminalMockup({ className }: { className?: string }) {
  const lines = [
    { prompt: "", text: "Connecting to nginx-7d4b8c6f5-x2k9m...", color: "text-gray-500" },
    { prompt: "$", text: "kubectl exec -it nginx-7d4b8c6f5-x2k9m -- /bin/sh", color: "text-gray-500" },
    { prompt: "/ #", text: "ls -la /etc/nginx/", color: "text-green-400" },
    { prompt: "", text: "total 24", color: "text-gray-400" },
    { prompt: "", text: "drwxr-xr-x 3 root root 4096 Jul 12 10:23 .", color: "text-gray-400" },
    { prompt: "", text: "drwxr-xr-x 1 root root 4096 Jul 12 10:23 ..", color: "text-gray-400" },
    { prompt: "", text: "-rw-r--r-- 1 root root 1071 Jul 12 10:23 nginx.conf", color: "text-gray-400" },
    { prompt: "", text: "-rw-r--r-- 1 root root 1071 Jul 12 10:23 mime.types", color: "text-gray-400" },
    { prompt: "", text: "drwxr-xr-x 2 root root 4096 Jul 12 10:23 conf.d", color: "text-gray-400" },
    { prompt: "/ #", text: "cat /etc/nginx/nginx.conf", color: "text-green-400" },
    { prompt: "", text: "server {", color: "text-cyan-300" },
    { prompt: "", text: "  listen 80;", color: "text-gray-300" },
    { prompt: "", text: "  location / {", color: "text-cyan-300" },
    { prompt: "", text: "    root /usr/share/nginx/html;", color: "text-gray-300" },
    { prompt: "", text: "    index index.html;", color: "text-gray-300" },
    { prompt: "", text: "  }", color: "text-cyan-300" },
    { prompt: "", text: "}", color: "text-cyan-300" },
    { prompt: "", text: "", color: "" },
  ];

  return (
    <MockupWindow title="Podex  Terminal" className={className}>
      <div className="bg-[#0d1117] p-4">
        <div className="space-y-0.5 font-mono text-xs leading-6">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-2 px-2 hover:bg-white/[0.02]">
              {line.prompt && (
                <span className="text-emerald-500 shrink-0">{line.prompt}</span>
              )}
              <span className={`${line.color} ${!line.prompt ? "pl-[1.125rem]" : ""}`}>
                {line.text}
              </span>
            </div>
          ))}
          <div className="flex gap-2 px-2">
            <span className="text-emerald-500 shrink-0">/ #</span>
            <span className="animate-pulse text-gray-300">▊</span>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}
