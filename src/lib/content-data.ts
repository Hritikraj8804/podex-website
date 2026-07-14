export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/features" },
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
1. **Frontend UI** — reachable at \`http://localhost:3000\`
2. **Backend Daemon** — reachable at \`http://localhost:8000\`

### Step 3: Open Your Browser

Navigate to \`http://localhost:3000\`. Podex automatically detects your active Kubernetes context from \`~/.kube/config\` and loads your cluster dashboard.

### That's It!

You're now looking at your cluster through Podex's visual interface. Explore pods, stream logs, or open the Arena to start designing cluster architectures visually.

### Local Development (Without Docker)

**Backend:**
\`\`\`bash
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

The frontend dev server runs on \`http://localhost:3000\` and connects directly to your local kubeconfig without container network address overrides.
`,
  },
  {
    slug: "architecture",
    title: "Architecture",
    description: "How Podex is built — a two-tier local daemon architecture.",
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

    Browser -->|Clicks UI| React
    React -->|REST Calls / SSE / WS| FastAPI
    FastAPI -->|Queries Context| K8sClient
    K8sClient -->|KubeConfig / Port 6443| Kind
    FastAPI -->|Structured Prompt| AI
\`\`\`

### Tier 1: React Frontend
Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Runs in the user's browser, fetching API data from the FastAPI backend. Implements a stateful client layout with tab panels:

- **Dashboard** — High-level cluster stats with dynamic visual indicators
- **Explorer** — Direct table representation of pods, deployments, and services
- **Topology** — Dynamic SVG relationship mapping
- **Arena** — Visual block programming canvas to model resources and generate clean YAML
- **Concepts Tutor** — Chat-like AI companion

### Tier 2: FastAPI Backend
Built with **FastAPI** and **Python**. Acts as a proxy between the UI client and the Kubernetes api-server. **Stateless design** — all state resides inside your Kubernetes cluster.

- Translates listing requests and streams logs using Server-Sent Events (SSE)
- Establishes real-time terminal shells inside containers using WebSocket connections

### Local Cluster Connectivity
When running inside Docker, the backend loads the host's \`~/.kube/config\` context. If the endpoint points to \`localhost\` or \`127.0.0.1\`, it dynamically replaces it with \`host.docker.internal\` so the container can route to the host cluster daemon. SSL verification is skipped for local development certificates.

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

- **Docker** and **Docker Compose** — [Install Docker](https://docs.docker.com/get-docker/)
- **Kind** or **Minikube** — [Install Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) / [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
- A populated config file at \`~/.kube/config\`

### Running Podex

\`\`\`bash
git clone https://github.com/Hritikraj8804/podex.git
cd podex
docker compose up --build
\`\`\`

This builds:
1. **Backend container** (port \`8000\`) — Python FastAPI server
2. **Frontend container** (port \`5173\`) — Nginx serving React app + proxying API

Access the UI at \`http://localhost:3000\`.

### Environment Variables

**Backend:**
- \`GEMINI_API_KEY\` or \`GOOGLE_API_KEY\` — API key for Google Gemini
- \`OPENAI_API_KEY\` — API key for OpenAI
- \`OPENAI_BASE_URL\` — Custom endpoint for self-hosted LLM servers
- \`OPENAI_MODEL\` — Model name (e.g. \`gpt-4o-mini\`)
- \`DOCKER_MODE\` — Set to \`true\` in Docker to enable address patching

**Frontend:**
- \`VITE_API_URL\` — API daemon address (default: \`http://localhost:8000\`)
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

The Dashboard tab gives you an instant overview of your cluster health.

### Key Metrics
- **Nodes** — Total cluster nodes with status breakdown
- **Pods** — Running vs total pod count
- **Deployments** — Desired vs ready replicas
- **Services** — Service endpoints and cluster IPs

### Health Donut
A circular SVG chart renders the ratio of active running workloads to failed states, giving you a quick visual pulse check of your cluster.

### Real-Time Updates
Metrics auto-refresh at a configurable interval (default: 8 seconds), so you always see the current cluster state.

### Quick Access
The dashboard also provides a direct search bar to the AI Concept Tutor, letting you ask questions about any Kubernetes concept without leaving the overview.
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

The Explorer tab provides interactive table views for all your Kubernetes resources.

### Resource Views
- **Pods** — Status, node, IP, restart count, age
- **Deployments** — Desired/ready/available replicas
- **Services** — External IPs, Cluster IPs, ports

### Namespace Filtering
Use the namespace selector to filter resources. A toggle lets you include system namespaces (kube-system, etc.) when you need deeper visibility.

### Inline Actions
Each resource row has action controls:
- **Scale** — Adjust deployment replica count instantly
- **Restart** — Execute rolling restarts by patching deployment annotations
- **Delete** — Safely remove resources with a themed confirmation modal

### Resource Details
Click any pod to open a detail drawer with:
- Full YAML manifest
- Container configurations
- Event timeline
- Live SSE log streaming
- Interactive WebSocket terminal
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

The Arena is a sandbox grid canvas where you visually design Kubernetes architectures.

### How It Works
1. **Drag blocks** from the toolbox — Pods, Services, Deployments, ConfigMaps, Secrets, Ingress, StatefulSets
2. **Connect them** by drawing wires between ports to establish relationship models
3. **Edit** configurations in side drawers — forms or raw YAML
4. **Apply** your design directly to the cluster

### Canvas Features
- **Pan and Zoom** — Navigate large architectures with mouse controls
- **Snap Grid** — Blocks align automatically for clean layouts
- **Minimap** — See the full canvas overview
- **Auto-Generated YAML** — Your visual design renders as valid Kubernetes manifests

### Templates
Start with a blank canvas or use pre-built templates for common patterns.

### Onboarding
First-time users see a helpful overlay guide ("Start with Empty Arena") to get oriented.
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

Podex provides two powerful debugging tools accessible from any pod's detail drawer.

### Log Streaming (SSE)
See container logs in real time using Server-Sent Events.
- **Live tailing** — New log lines appear as they're written
- **Line wrap toggle** — Control log readability
- **Timestamps** — Toggle timestamp display
- **Tail limit** — Configure how many lines to request (default: 100)
- **Auto-reconnect** — SSE automatically reconnects if the connection drops

### Interactive Terminal (WebSocket)
Exec into any container directly from your browser.
- Full terminal emulation
- Connect to \`/bin/sh\` or \`/bin/bash\`
- Real-time I/O over WebSocket
- Works for any container in any pod

### YAML Inspector
View the full manifest of any resource to understand its configuration.
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

Podex integrates LLMs directly as interactive diagnostic troubleshooters and learning companions.

### Concept Tutor
Ask "What is a Service?" and get:
- Clear, beginner-friendly explanations
- Real-world analogies (e.g. "A Service is like a receptionist who directs calls")
- Why the resource exists
- Common gotchas and pitfalls

### Log Troubleshooter
When a pod is crashing, the AI Investigator can:
1. Fetch the pod status, container configs, event timeline, and recent logs
2. Formulate a structured diagnosis report:
   - **Diagnosis status**: healthy, degraded, or critical
   - **Root cause explanation** in plain language
   - **Evidence list** — bullet points of what was found
   - **Suggested fix** — actionable resolution steps
   - **Beginner analogy** — why it happened, in simple terms

### Supported Providers
- **Google Gemini** — via \`google-generativeai\` SDK
- **OpenAI** — via \`openai\` SDK (also supports custom endpoints)
- **Mock Fallback** — built-in sandbox providers that work offline without API keys, returning pre-compiled responses for testing
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

The Topology tab renders a dynamic, SVG-based map of your cluster's resource relationships.

### What You See
- **Ingress rules** connected to Services
- **Services** connected to Deployments
- **Deployments** connected to Pods
- **ConfigMaps and Secrets** linked to their consumers

### Interaction
- **Drag to reposition** — rearrange nodes to your liking
- **Zoom and Pan** — navigate large clusters
- **Filter** — search hides non-matching nodes and their connections
- **Reset View** — restores default layout and zoom

### Visual Design
- Dark tech-grid canvas background
- Color-coded nodes with accent stripes
- Animated SVG bezier connection lines
- Column-based layout organized by resource type
`,
  },
  {
    slug: "configuration",
    title: "Configuration",
    description: "Customize Podex to your preferences.",
    category: "Reference",
    order: 10,
    content: `
## Configuration

Podex is designed with zero-config defaults, but supports persistent customization.

### Frontend Settings (localStorage)

The following preferences are stored in your browser's \`localStorage\`:

| Setting | Key | Default | Options |
|---------|-----|---------|---------|
| Accent Color | \`accentColor\` | \`peach\` | cyan, indigo, violet, emerald, amber, peach |
| Theme | \`theme\` | \`dark\` | light, dark |
| AI Provider | \`aiProvider\` | \`gemini\` | gemini, openai |
| Gemini Key | \`geminiKey\` | — | Your API key |
| OpenAI Key | \`openaiKey\` | — | Your API key |
| Refresh Interval | \`refreshInterval\` | \`8\` | Seconds between auto-refresh |
| Log Line Wrap | \`logsLineWrap\` | \`false\` | Toggle line wrapping in logs |
| Log Timestamps | \`logsShowTimestamps\` | \`false\` | Toggle timestamps in logs |
| Log Tail Limit | \`logsTailLimit\` | \`100\` | Number of log lines to fetch |

### Accent Colors
The custom **peach** color (\`#f2856d\`) is inspired by the YunoHost project palette and serves as Podex's signature accent.
`,
  },
  {
    slug: "api-reference",
    title: "API Reference",
    description: "Complete REST and WebSocket API documentation.",
    category: "Reference",
    order: 11,
    content: `
## API Reference

Podex exposes a local HTTP REST and WebSocket API from the backend daemon (default port: \`8000\`).

### REST Endpoints

#### Cluster Statistics
\`\`\`
GET /api/stats
\`\`\`
Returns total node count, pod count, deployment count, service count, and namespace status.

#### Resource Discovery
\`\`\`
GET /api/pods?namespace=<ns>&show_system=<bool>
GET /api/deployments
GET /api/services
\`\`\`
Returns lists of resources with metadata, state, and configuration.

#### Debugging & Details
\`\`\`
GET /api/pods/{namespace}/{name}/details
GET /api/pods/{namespace}/{name}/logs
\`\`\`

#### Workload Operations
\`\`\`
POST /api/deployments/{namespace}/{name}/restart
POST /api/deployments/{namespace}/{name}/scale?replicas=<n>
DELETE /api/resources/{namespace}/{name}?type=<pod|deployment|service>
POST /api/apply-yaml
\`\`\`

#### AI Integration
\`\`\`
POST /api/investigate
  Body: { namespace, pod_name, container_name }
  Returns: Diagnosis report with root cause, evidence, and fix

POST /api/learn
  Body: { concept }
  Returns: Explanation with analogies and gotchas
\`\`\`

### WebSocket Endpoints

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
    order: 12,
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
- **Unit Tests** — The codebase needs pytest and Vitest test suites
- **Integration Tests** — API endpoint verification against test clusters
- **Documentation** — Improve guides and API docs
- **Features** — Check the roadmap for in-progress items

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
