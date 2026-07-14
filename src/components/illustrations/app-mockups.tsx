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
  const pods = [
    { name: "web", ns: "default", status: "Running" },
    { name: "api", ns: "default", status: "Running" },
    { name: "db", ns: "default", status: "Running" },
    { name: "cache", ns: "prod", status: "Running" },
    { name: "worker", ns: "prod", status: "Pending" },
    { name: "batch", ns: "prod", status: "Failed" },
  ];
  const matrixPods = [
    "green", "green", "amber", "green", "green", "red",
    "green", "green", "green", "amber", "green", "green",
    "green", "red", "green", "green", "amber", "green",
    "green", "green", "green", "green", "green", "amber",
  ];

  return (
    <MockupWindow title="Podex  Dashboard" className={className}>
      <div className="bg-background">
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent px-4 pt-4 pb-6">
          <div className="mb-1 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-500">kind-podex</span>
            <span className="text-xs text-muted-foreground ml-auto">v1.2.0</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[
              { label: "Nodes", value: "3", icon: "●" },
              { label: "Pods", value: "24", icon: "◆" },
              { label: "Deployments", value: "12", icon: "■" },
              { label: "Services", value: "8", icon: "▲" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border/60 bg-card/80 p-2.5 text-center backdrop-blur-sm">
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="text-xl font-bold text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-4 py-3">
          <div className="col-span-2 rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 72 72" className="h-16 w-16 shrink-0">
                <circle cx="36" cy="36" r="30" fill="none" stroke="currentColor" strokeWidth="6" className="text-border/50" />
                <circle cx="36" cy="36" r="30" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="157 31" strokeDashoffset="0" transform="rotate(-90, 36, 36)" />
                <circle cx="36" cy="36" r="30" fill="none" stroke="#f59e0b" strokeWidth="6" strokeDasharray="16 172" strokeDashoffset="157" transform="rotate(-90, 36, 36)" />
                <circle cx="36" cy="36" r="30" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="16 172" strokeDashoffset="173" transform="rotate(-90, 36, 36)" />
              </svg>
              <div>
                <div className="text-xs font-semibold text-foreground">Cluster Health</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">20 Running · 2 Pending · 2 Failed</div>
                <div className="flex gap-2 mt-1.5">
                  <span className="flex items-center gap-1 text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Healthy</span>
                  <span className="flex items-center gap-1 text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Warning</span>
                  <span className="flex items-center gap-1 text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Critical</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-xs font-semibold text-foreground mb-2">Needs Attention</div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">worker</span>
                <span className="text-[10px] text-amber-500 font-medium">Pending</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">batch</span>
                <span className="text-[10px] text-red-500 font-medium">CrashLoop</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">test-app</span>
                <span className="text-[10px] text-red-500 font-medium">Error</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="text-xs font-semibold text-foreground mb-2">Pod Status Matrix</div>
          <div className="grid grid-cols-8 gap-1">
            {matrixPods.map((color, i) => (
              <div
                key={i}
                className={`h-5 rounded-sm ${
                  color === "green" ? "bg-emerald-500/70" :
                  color === "amber" ? "bg-amber-500/70" :
                  "bg-red-500/70"
                }`}
                title={`Pod ${i + 1}`}
              />
            ))}
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
