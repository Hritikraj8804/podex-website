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
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

export function PodsMockup({ className }: { className?: string }) {
  const pods = [
    { name: "nginx-7d4b8c6f5-x2k9m", namespace: "production", status: "Running", node: "node-1", restarts: 0, age: "3d", color: "#10b981" },
    { name: "nginx-7d4b8c6f5-q8p3l", namespace: "production", status: "Running", node: "node-2", restarts: 0, age: "3d", color: "#10b981" },
    { name: "api-server-5f9d4c8a2-m7n4j", namespace: "production", status: "Running", node: "node-1", restarts: 2, age: "5d", color: "#10b981" },
    { name: "redis-master-0", namespace: "default", status: "Running", node: "node-2", restarts: 0, age: "7d", color: "#10b981" },
    { name: "worker-6b8f9d2c3-k9r5t", namespace: "production", status: "Pending", node: "-", restarts: 0, age: "2m", color: "#fbbf24" },
    { name: "test-app-4c7d8e9f1-p2q6w", namespace: "staging", status: "CrashLoopBackOff", node: "node-1", restarts: 8, age: "15m", color: "#ef4444" },
  ];

  return (
    <MockupWindow title="Podex - Pods" className={className}>
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
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: pod.color }} />
                      <span style={{ color: pod.color }}>{pod.status}</span>
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

export function LogsMockup({ className }: { className?: string }) {
  const logs = [
    { time: "10:23:45", level: "INFO", message: "Server started on port 8080" },
    { time: "10:23:46", level: "INFO", message: "Connected to database: postgres://db:5432/app" },
    { time: "10:23:46", level: "INFO", message: "Loading configuration from /etc/app/config.yaml" },
    { time: "10:23:47", level: "INFO", message: "Initializing middleware stack" },
    { time: "10:23:47", level: "WARN", message: "Rate limiter using default configuration" },
    { time: "10:23:48", level: "INFO", message: "Ready to accept connections" },
    { time: "10:24:12", level: "INFO", message: "GET /api/v1/pods 200 12ms" },
    { time: "10:24:15", level: "INFO", message: "GET /api/v1/namespaces 200 8ms" },
    { time: "10:25:01", level: "ERROR", message: "Failed to connect to metrics endpoint: timeout" },
    { time: "10:25:02", level: "WARN", message: "Retrying connection in 5s..." },
  ];

  return (
    <MockupWindow title="Podex - Logs" className={className}>
      <div className="bg-[#0d1117] p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="rounded-md bg-white/10 px-2 py-1 text-xs text-gray-300">Follow</div>
            <div className="rounded-md px-2 py-1 text-xs text-gray-500">Previous</div>
          </div>
          <div className="ml-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-400">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Search logs...
          </div>
        </div>
        <div className="space-y-0.5 font-mono text-xs leading-5">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-2 rounded px-2 hover:bg-white/5">
              <span className="text-gray-600">{log.time}</span>
              <span className={log.level === "ERROR" ? "text-red-400" : log.level === "WARN" ? "text-yellow-400" : "text-gray-500"}>
                [{log.level}]
              </span>
              <span className={
                log.level === "ERROR" ? "text-red-300" :
                log.level === "WARN" ? "text-yellow-300" :
                "text-gray-300"
              }>
                {log.message}
              </span>
            </div>
          ))}
          <div className="flex gap-2 px-2 text-gray-500">
            <span className="text-gray-600">10:25:03</span>
            <span className="text-green-400">[INFO]</span>
            <span className="text-gray-300">Connection re-established</span>
            <span className="ml-auto text-gray-600 animate-pulse">▊</span>
          </div>
        </div>
      </div>
    </MockupWindow>
  );
}

export function DeploymentMockup({ className }: { className?: string }) {
  return (
    <MockupWindow title="Podex - Deployments" className={className}>
      <div className="bg-background p-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-2xl font-bold text-foreground">12</div>
            <div className="text-xs text-muted-foreground">Total Deployments</div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-2xl font-bold text-emerald">10</div>
            <div className="text-xs text-muted-foreground">Healthy</div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-2xl font-bold text-[var(--gradient-mid)]">2</div>
            <div className="text-xs text-muted-foreground">Updating</div>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: "nginx", replicas: "2/2", updated: "2/2", available: "2/2", status: "healthy" },
            { name: "api-server", replicas: "3/3", updated: "3/3", available: "3/3", status: "healthy" },
            { name: "worker-service", replicas: "5/5", updated: "3/5", available: "5/5", status: "updating" },
            { name: "notification-svc", replicas: "2/2", updated: "1/2", available: "2/2", status: "updating" },
          ].map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-lg border border-border bg-card p-3 transition-colors hover:bg-surface">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${d.status === "healthy" ? "bg-emerald" : "bg-[var(--gradient-mid)] animate-pulse"}`} />
                <div>
                  <div className="text-sm font-medium text-foreground">{d.name}</div>
                  <div className="text-xs text-muted-foreground">Replicas: {d.replicas}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Updated: {d.updated}</span>
                <span>Available: {d.available}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupWindow>
  );
}
