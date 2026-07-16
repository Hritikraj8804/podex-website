export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { title: "Home", href: "/" },

  { title: "Pricing", href: "/pricing" },
  { title: "Download", href: "/download" },
  { title: "Documentation", href: "/docs" },
  { title: "About", href: "/about" },
];

export interface DocEntry {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  order: number;
}

export const docs: DocEntry[] = [
  {
    slug: "quick-start",
    title: "Quick Start",
    description: "Get Podex running in minutes with Docker Compose.",
    category: "Getting Started",
    order: 1,
    content: `
## Quick Start

Podex is a local, visual Kubernetes cluster examiner and interactive playground. Start exploring your cluster in minutes.

### Prerequisites

- **Docker** and **Docker Compose** installed
- A running local **Kubernetes cluster** (e.g. [Kind](https://kind.sigs.k8s.io/), [Minikube](https://minikube.sigs.k8s.io/), Docker Desktop K8s, or OrbStack)
- A valid \`~/.kube/config\` file

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/Hritikraj8804/podex.git
cd podex
\`\`\`

### Step 2: Start with Docker Compose

\`\`\`bash
docker compose up --build
\`\`\`

This builds and launches two services:
1. **Frontend UI**  reachable at \`http://localhost:3456\`
2. **Backend Daemon**  reachable at \`http://localhost:3457\`

### Step 3: Open Your Browser

Navigate to \`http://localhost:3456\`. Podex automatically detects your active Kubernetes context from \`~/.kube/config\` and loads your cluster dashboard.

### That's It!

You're now looking at your cluster through Podex's visual interface. Explore pods, stream logs, or open the Arena to start designing cluster architectures visually.

### Local Development (Without Docker)

**Backend:**
\`\`\`bash
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 3457 --reload
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

The frontend dev server runs on \`http://localhost:3456\` and connects directly to your local kubeconfig without container network address overrides.
`,
  },
  {
    slug: "architecture",
    title: "Architecture",
    description: "How Podex is built  a two-tier local daemon architecture.",
    category: "Getting Started",
    order: 2,
    content: `
## Architecture

Podex is designed as a local two-tier desktop daemon service running via Docker Compose. It binds directly to your active local Kubernetes cluster.

\`\`\`mermaid
graph TD
    Browser[Browser / UI]
    React[React Frontend]
    FastAPI[FastAPI Backend]
    K8sClient[Official Python Kubernetes Client]
    Kind[Kind / Minikube Local Cluster]
    AI[Gemini / OpenAI API]
    PortForward[kubectl port-forward subprocess]
    WSUpdates[WebSocket Update Stream]

    Browser -->|Clicks UI| React
    React -->|REST / SSE / WS| FastAPI
    FastAPI -->|Queries Context| K8sClient
    FastAPI -->|Spawns / Kills| PortForward
    PortForward -->|Exposes| Kind
    K8sClient -->|KubeConfig / Port 6443| Kind
    FastAPI -->|Structured Prompt| AI
    FastAPI -->|Pushes via| WSUpdates
    WSUpdates -->|Real-time Data| React
\`\`\`

### Tier 1: React Frontend
Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS 4**. Runs in the user's browser, fetching API data from the FastAPI backend. Implements a stateful client layout with tabs:

- **Dashboard**  Cluster health donut, pod status matrix, needs-attention panel, poddy chat
- **Explorer**  Table views for 9 resource types with port forwarding, bulk delete, WebSocket updates
- **Topology**  Dynamic column-based React Flow mapping with pan/zoom and drag-repositioning
- **Arena**  Visual React Flow canvas to model resources and generate YAML, persisted via sessionStorage
- **Concepts Tutor**  Chat-like AI companion with structured explanations, analogies, and troubleshooting

### Tier 2: FastAPI Backend
Built with **FastAPI** and **Python**. Acts as a proxy between the UI client and the Kubernetes api-server. **Stateless design** — all state resides inside your Kubernetes cluster.

- Translates listing requests and streams logs using Server-Sent Events (SSE)
- Establishes real-time terminal shells inside containers using WebSocket connections
- Manages \`kubectl port-forward\` subprocess lifecycles with \`--address 0.0.0.0\`
- Pushes real-time resource updates via WebSocket (\`/api/ws/updates\`)

### Local Cluster Connectivity
When running inside Docker, the backend loads the host's \`~/.kube/config\` context. If the endpoint points to \`localhost\` or \`127.0.0.1\`, it dynamically replaces it with \`host.docker.internal\` so the container can route to the host cluster daemon. SSL verification is skipped for local development certificates.

### Cloud Shell
Docker Desktop-style terminal panel at the bottom of the page with drag-to-resize handle. Uses WebSocket-backed xterm.js shell with kubectl and bash commands. On Windows, uses Git Bash for Linux command support.

### AI Provider Integration
Coordinates structured prompts containing actual cluster state, timeline logs, and resource descriptions. Leverages **Google Gemini** and **OpenAI** models. Includes fallback to **mock sandbox providers** when no API keys are present, making the app fully functional offline.
`,
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Detailed setup guide for Podex and its dependencies.",
    category: "Getting Started",
    order: 3,
    content: `
## Installation

### Local Cluster Setup

Podex works with any local Kubernetes cluster. Here's how to set one up:

**Using Kind (Kubernetes-in-Docker):**
\`\`\`bash
kind create cluster --name podex
kubectl cluster-info
\`\`\`

**Using Minikube:**
\`\`\`bash
minikube start
kubectl cluster-info
\`\`\`

### Prerequisites

- **Docker** and **Docker Compose**  [Install Docker](https://docs.docker.com/get-docker/)
- **Kind** or **Minikube**  [Install Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) / [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
- A populated config file at \`~/.kube/config\`

### Running Podex

\`\`\`bash
git clone https://github.com/Hritikraj8804/podex.git
cd podex
docker compose up --build
\`\`\`

This builds:
1. **Backend container** (port \`8000\`)  Python FastAPI server
2. **Frontend container** (port \`5173\`)  Nginx serving React app + proxying API

Access the UI at \`http://localhost:3456\`.

### Environment Variables

**Backend:**
- \`GEMINI_API_KEY\` or \`GOOGLE_API_KEY\`  API key for Google Gemini
- \`OPENAI_API_KEY\`  API key for OpenAI
- \`OPENAI_BASE_URL\`  Custom endpoint for self-hosted LLM servers
- \`OPENAI_MODEL\`  Model name (e.g. \`gpt-4o-mini\`)
- \`DOCKER_MODE\`  Set to \`true\` in Docker to enable address patching

**Frontend:**
- \`VITE_API_URL\`  API daemon address (default: \`http://localhost:3457\`)
`,
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    description: "Real-time cluster health and metrics at a glance.",
    category: "Features",
    order: 4,
    content: `
## Dashboard

The Dashboard tab gives you an instant overview of your cluster health with a CNCF-observability-themed layout.

### Gradient Hero Panel
Top section with cluster connection status, CNCF compatibility badges, and mascot branding card featuring Poddy.

### Key Metrics
Color-coded stat cards with icon containers for:
- **Nodes**  Total cluster nodes with status breakdown
- **Pods**  Running vs total pod count
- **Deployments**  Desired vs ready replicas
- **Services**  Service endpoints and cluster IPs

### Health Donut
A circular SVG chart renders the ratio of running, pending, and failed workloads — giving you a quick visual pulse check of your cluster.

### Pod Status Matrix
Compact color-coded cell grid (green/amber/red) showing health percentage and ready count across all pods.

### Needs-Attention Panel
Lists degraded pods with one-click jump to AI-powered diagnosis without leaving the Dashboard.

### Poddy Chat
Click any pod to open an AI-powered diagnosis popup directly from the Dashboard.

### Real-Time Updates
Metrics auto-refresh at a configurable interval (default: 8 seconds), so you always see the current cluster state.
`,
  },
  {
    slug: "explorer",
    title: "Cluster Explorer",
    description: "Browse and manage Kubernetes resources visually.",
    category: "Features",
    order: 5,
    content: `
## Cluster Explorer

The Explorer tab provides interactive table views for 9 Kubernetes resource types.

### Resource Views
- **Pods**  Status, node, IP, restart count, age
- **Deployments**  Desired/ready/available replicas
- **Services**  External IPs, Cluster IPs, ports
- **Nodes**  Cluster-scoped node listing with status, role, kubelet version
- **ConfigMaps**  Data keys and counts
- **Secrets**  Namespace-scoped listing with type and age
- **StatefulSets**  Desired/ready/current replica counts
- **DaemonSets**  Node availability and scheduling status
- **Events**  Cross-resource event timeline with type, reason, message, count

### Namespace Filtering
Use the namespace selector to filter resources. A toggle lets you include system namespaces when you need deeper visibility.

### Inline Actions
Each resource row has action controls:
- **Scale**  Adjust deployment replica count instantly
- **Restart**  Execute rolling restarts by patching deployment annotations
- **Delete**  Safely remove resources with a themed confirmation modal
- **Port Forward**  One-click port forwarding with dialog-based local/target port input
- **Terminal**  Direct jump to WebSocket shell for Pods

### Bulk Delete Mode
Checkbox selection with confirmation modal for batch resource deletion.

### Real-Time Updates
Resources update in real-time via WebSocket (\`/api/ws/updates\`) — no manual refresh needed.

### Resource Details
Click any resource to open a slide-over detail drawer with tabbed views:
- **Overview**  Full YAML manifest and container configurations
- **Logs**  Live SSE log streaming with configurable tail limit and timestamps
- **Events**  Event timeline with type, reason, and age
- **Investigate**  AI-powered one-click pod diagnosis
- **Terminal**  Interactive WebSocket shell

The drawer supports maximize/restore toggle (fixed 520px default, expands to full viewport width).
`,
  },
  {
    slug: "arena",
    title: "Arena Playground",
    description: "Visual drag-and-drop Kubernetes architecture designer.",
    category: "Features",
    order: 6,
    content: `
## Arena Playground

The Arena is a React Flow sandbox canvas where you visually design Kubernetes architectures.

### How It Works
1. **Drag blocks** from the toolbox — Pods, Services, Deployments, ConfigMaps, Secrets, Ingress, StatefulSets
2. **Connect them** by drawing wires between ports to model network relationships
3. **Edit** configurations in side drawers — forms or raw YAML tabs
4. **Apply** your design directly to the cluster

### Canvas Features
- **Pan and Zoom**  Navigate large architectures with mouse controls
- **Snap Grid**  Blocks align automatically for clean layouts
- **Minimap**  Full canvas overview in corner
- **Auto-Generated YAML**  Visual design renders as valid Kubernetes manifests
- **Custom K8sNode**  Compact sizing with hexagonal icon badges and color-coded accent stripes
- **Toolbox Sidebar**  Collapsible for more canvas space

### Persistence
Canvas state saved to sessionStorage — survives browser refreshes.

### Onboarding
First-time users see a helpful overlay guide ("Start with Empty Arena") shown once per session.
`,
  },
  {
    slug: "debugging",
    title: "Live Debugging",
    description: "Stream logs and exec into containers in real time.",
    category: "Features",
    order: 7,
    content: `
## Live Debugging

Podex provides real-time debugging tools accessible from any pod's detail drawer.

### Log Streaming (SSE)
See container logs in real time using Server-Sent Events.
- **Live tailing**  New log lines appear as they're written
- **Line wrap toggle**  Control log readability
- **Timestamps**  Toggle timestamp display
- **Tail limit**  Configure how many lines to request (default: 100)
- **Auto-reconnect**  SSE automatically reconnects if the connection drops

### Interactive Terminal (WebSocket)
Exec into any container directly from your browser.
- Full terminal emulation via xterm.js
- Connect to \`/bin/sh\` or \`/bin/bash\`
- Multi-container pod support with container selector
- Real-time I/O over WebSocket

### Cloud Shell
Docker Desktop-style terminal panel at the bottom of the page with drag-to-resize handle. WebSocket-backed xterm.js shell supporting kubectl and bash commands. On Windows, uses Git Bash for Linux command support.

### YAML Inspector
View the full manifest of any resource directly in the Resource Drawer panel.
`,
  },
  {
    slug: "ai-tutor",
    title: "AI Concept Tutor & Troubleshooter",
    description: "Learn Kubernetes with AI-powered explanations and diagnoses.",
    category: "Features",
    order: 8,
    content: `
## AI Concept Tutor & Troubleshooter

Podex integrates LLMs as interactive troubleshooters and learning companions, all with a built-in mock fallback that works offline.

### Poddy Chat (Learn Tab)
ChatGPT-style interface for free-form Kubernetes Q&A. Ask "What is a Service?" and get:
- Clear, beginner-friendly explanations
- Real-world analogies (e.g. "A Service is like a receptionist who directs calls")
- Why the resource exists
- Common gotchas and pitfalls

### AI Investigation (Resource Drawer)
One-click pod diagnosis with:
- **Confidence scoring**
- **Root cause explanation** in plain language
- **Evidence list** — bullet points of what was found
- **Suggested fix** — actionable resolution steps
- **Concept lesson** — sub-tab with beginner explanation

### AI Command Generator (Terminal)
Type natural language prompts (e.g. "find python files", "check disk space") to generate kubectl/container commands, with one-click "Run in Terminal" execution.

### FormattedText Component
AI responses render with proper lists, bold text, code blocks with copy button, and inline code highlighting.

### Supported Providers
- **Google Gemini**  via \`google-generativeai\` SDK
- **OpenAI**  via \`openai\` SDK (also supports custom endpoints)
- **Mock Fallback**  built-in sandbox providers that work offline without API keys

`,
  },
  {
    slug: "topology",
    title: "Topology View",
    description: "Visualize relationships between your cluster resources.",
    category: "Features",
    order: 9,
    content: `
## Topology View

The Topology tab renders a dynamic, column-based React Flow map of your cluster's resource relationships.

### What You See
- **Ingress rules** connected to Services
- **Services** connected to Deployments (derived programmatically by finding shared Pods)
- **Deployments** connected to Pods
- **ConfigMaps and Secrets** linked to their consumers

### Interaction
- **Drag to reposition**  rearrange nodes to your liking
- **Zoom and Pan**  navigate large clusters with custom controls
- **Filter**  search hides non-matching nodes and their connections
- **Reset View**  restores default layout, zoom, and node positions

### Visual Design
- Dark tech-grid canvas (dark mode) or slate styling (light mode)
- Custom K8sNode cards with compact sizing, hexagonal icon badges, and status-colored accent stripes
- Animated SVG bezier connection lines
- Column-based layout organized by resource type
`,
  },
  {
    slug: "port-forwarding",
    title: "Port Forwarding",
    description: "One-click port forwarding to Pods and Services from the Explorer.",
    category: "Features",
    order: 10,
    content: `
## Port Forwarding

Podex provides one-click port forwarding to your cluster resources directly from the Explorer table.

### How It Works

Click the port icon on any supported resource row to open a dialog, enter a local port (e.g., 8080), and the backend handles the rest:

1. Spawns a \`kubectl port-forward --address 0.0.0.0\` subprocess
2. Auto-detects the container port if not specified
3. Returns a clickable \`http://127.0.0.1:PORT\` link (local) or a badge (Docker/sandbox)

### Supported Resources

- Pods
- Services
- Deployments
- StatefulSets
- DaemonSets

### Port Mapping

- When both \`port\` and \`target_port\` are provided: \`kubectl port-forward kind/name PORT:TARGET_PORT -n namespace\`
- When only \`port\` is provided: maps \`localhost:PORT\` to the resource's first container port

### Docker Support

When running in Docker, the backend automatically:
- Patches kubeconfig replacing \`127.0.0.1\` with \`host.docker.internal\`
- Adds \`insecure-skip-tls-verify\` for self-signed certificates
- Sets missing \`current-context\` if needed

### API Endpoints

\`\`\`
POST /api/kube/port-forward
  Body: { kind, name, namespace, port, target_port? }
  Returns: { pid, port, target_port, is_docker }

DELETE /api/kube/port-forward/{pid}
  Kills the port-forward subprocess by PID.
\`\`\`
`,
  },
  {
    slug: "configuration",
    title: "Configuration",
    description: "Customize Podex to your preferences.",
    category: "Reference",
    order: 11,
    content: `
## Configuration

Podex is designed with zero-config defaults, but supports persistent customization.

### Frontend Settings (localStorage)

The following preferences are stored in your browser's \`localStorage\`:

| Setting | Key | Default | Options |
|---------|-----|---------|---------|
| Accent Color | \`accentColor\` | \`cyan\` | cyan, indigo, violet, emerald, amber, peach |
| Theme | \`theme\` | \`dark\` | light, dark |
| AI Provider | \`aiProvider\` | \`gemini\` | gemini, openai |
| Gemini Key | \`geminiKey\` |  | Your API key |
| OpenAI Key | \`openaiKey\` |  | Your API key |
| Custom Namespaces | \`customNamespaces\` |  | System namespaces to exclude/include |
| Refresh Interval | \`refreshInterval\` | \`8\` | Seconds between auto-refresh |
| Log Line Wrap | \`logsLineWrap\` | \`false\` | Toggle line wrapping in logs |
| Log Timestamps | \`logsShowTimestamps\` | \`false\` | Toggle timestamps in logs |
| Log Tail Limit | \`logsTailLimit\` | \`100\` | Number of log lines to fetch |

Accent color persistence is saved to localStorage and restored on reload.
`,
  },
  {
    slug: "api-reference",
    title: "API Reference",
    description: "Complete REST and WebSocket API documentation.",
    category: "Reference",
    order: 12,
    content: `
## API Reference

Podex exposes a local HTTP REST and WebSocket API from the backend daemon (default port: \`3457\`).

### REST Endpoints

#### Cluster Statistics
\`\`\`
GET /api/stats
\`\`\`
Returns total node count, pod count, deployment count, service count, and namespace status.

#### Combined Resource Discovery
\`\`\`
GET /api/resources?namespace=<ns>&show_system=<bool>
\`\`\`
Returns all 9 resource types in one response: pods, deployments, services, nodes, configmaps, secrets, statefulsets, daemonsets, events.

#### Per-Type Resource Lists
\`\`\`
GET /api/pods
GET /api/deployments
GET /api/services
GET /api/nodes
GET /api/configmaps
GET /api/secrets
GET /api/statefulsets
GET /api/daemonsets
GET /api/events
\`\`\`

#### Resource Details
\`\`\`
GET /api/{type}/{namespace}/{name}/details
GET /api/{type}/{namespace}/{name}/yaml
GET /api/node/{name}/yaml
GET /api/{type}/{namespace}/{name}/logs?tail=<n>&timestamps=<bool>
GET /api/{type}/{namespace}/{name}/events
\`\`\`

#### Port Forwarding
\`\`\`
POST /api/kube/port-forward
  Body: { kind, name, namespace, port, target_port? }
  Returns: { pid, port, target_port, is_docker }

DELETE /api/kube/port-forward/{pid}
\`\`\`

#### Workload Operations
\`\`\`
POST /api/deployments/{namespace}/{name}/restart
POST /api/deployments/{namespace}/{name}/scale?replicas=<n>
POST /api/kube/delete
  Body: { kind, name, namespace }
POST /api/apply-yaml
\`\`\`

#### Kubeconfig Context Management
\`\`\`
GET /api/kube/contexts
POST /api/kube/switch
  Body: { context }
\`\`\`

#### AI Integration
\`\`\`
POST /api/investigate
  Body: { namespace, pod_name, container_name }
  Returns: Diagnosis report with root cause, evidence, and fix

POST /api/learn
  Body: { concept }
  Returns: Explanation with analogies and gotchas

POST /api/pods/generate-command
  Body: { prompt }
  Returns: Generated kubectl command
\`\`\`

### WebSocket Endpoints

#### Resource Updates Stream
\`\`\`
WS /api/ws/updates
\`\`\`
Pushes real-time resource updates (pods, deployments, services, nodes, configmaps, secrets, statefulsets, daemonsets, events) to the frontend.

#### Interactive Terminal Shell
\`\`\`
WS /api/ws/terminal/{namespace}/{pod_name}/{container_name}
\`\`\`
Binds browser terminal inputs directly to \`/bin/sh\` or \`/bin/bash\` processes in the container.
`,
  },
  {
    slug: "contributing",
    title: "Contributing",
    description: "How to contribute to Podex.",
    category: "Community",
    order: 13,
    content: `
## Contributing

We welcome contributions from the community!

### Development Setup

1. Set up a local Kind cluster:
   \`\`\`bash
   kind create cluster --name podex
   \`\`\`

2. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Hritikraj8804/podex.git
   cd podex
   \`\`\`

3. **Backend setup:**
   \`\`\`bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   uvicorn main:app --reload
   \`\`\`

4. **Frontend setup:**
   \`\`\`bash
   cd frontend
   npm install
   npm run dev
   \`\`\`

### Areas to Contribute
- **Unit Tests**  The codebase needs pytest and Vitest test suites
- **Integration Tests**  API endpoint verification against test clusters
- **Documentation**  Improve guides and API docs
- **Features**  Check the roadmap for in-progress items

### Code Style
- Python: Follow PEP 8, lint with \`ruff\`
- TypeScript/React: ESLint + Prettier
- Use the existing component patterns and Tailwind classes
`,
  },
];

export const docsByCategory = docs.reduce<Record<string, typeof docs>>((acc, doc) => {
  if (!acc[doc.category]) {
    acc[doc.category] = [];
  }
  acc[doc.category].push(doc);
  return acc;
}, {});
