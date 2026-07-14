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
  { title: "Blog", href: "/blog" },
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
    slug: "installation",
    title: "Installation",
    description: "Install Podex on Windows, macOS, or Linux.",
    category: "Getting Started",
    order: 1,
    content: `
## System Requirements

Before installing Podex, ensure your system meets the following requirements:

**Windows**
- Windows 10 or later (64-bit)
- 4 GB RAM minimum (8 GB recommended)
- 500 MB disk space

**macOS**
- macOS 12 Monterey or later
- Apple Silicon or Intel processor
- 4 GB RAM minimum (8 GB recommended)

**Linux**
- Ubuntu 20.04+, Debian 11+, Fedora 38+, or similar
- 4 GB RAM minimum (8 GB recommended)
- 500 MB disk space

## Installation Steps

### Windows

1. Download the \`.msi\` installer from the [Download page](/download).
2. Run the installer and follow the setup wizard.
3. Launch Podex from the Start Menu.

### macOS

1. Download the \`.dmg\` file from the [Download page](/download).
2. Open the \`.dmg\` file and drag Podex to your Applications folder.
3. Launch Podex from Applications.

### Linux

1. Download the \`.deb\` or \`.AppImage\` from the [Download page](/download).
2. For \`.deb\` files: \`sudo dpkg -i podex_*.deb\`
3. For \`.AppImage\` files: \`chmod +x podex_*.AppImage && ./podex_*.AppImage\`
4. Launch Podex from your application menu.

## Verifying Installation

After installation, open a terminal and run:

\`\`\`bash
podex --version
\`\`\`

You should see the current version number displayed.
`,
  },
  {
    slug: "connect-cluster",
    title: "Connect a Cluster",
    description: "Connect Podex to your Kubernetes cluster.",
    category: "Getting Started",
    order: 2,
    content: `
## Connecting to a Kubernetes Cluster

Podex supports connecting to any Kubernetes cluster that is accessible via your \`kubectl\` configuration.

### Prerequisites

- A running Kubernetes cluster
- A valid \`kubeconfig\` file
- Network access to the cluster API server

### Auto-Discovery

When you first launch Podex, it automatically detects clusters from your \`~/.kube/config\` file. You will see them listed on the Clusters page.

### Manual Connection

To add a cluster manually:

1. Navigate to **Settings → Clusters**.
2. Click **Add Cluster**.
3. Enter a name and paste your kubeconfig content.
4. Click **Connect**.

### Using kubeconfig from a File

1. Click **Import kubeconfig** on the Clusters page.
2. Browse to your \`kubeconfig\` file.
3. Select the context you want to use.
4. Click **Import**.

### Switching Contexts

Podex supports multiple contexts from a single kubeconfig file. Use the context switcher in the sidebar to switch between clusters without any terminal commands.

### Connection Status

- **Connected** (green): The cluster is reachable and healthy.
- **Degraded** (yellow): The cluster is reachable but some components are unhealthy.
- **Disconnected** (red): The cluster cannot be reached.
- **Unknown** (gray): Connection status is being determined.

## Troubleshooting

If Podex cannot connect to your cluster:

1. Verify that your kubeconfig is valid: \`kubectl cluster-info\`
2. Check network connectivity to the API server.
3. Ensure you have the correct permissions.
4. Check the Podex logs for detailed error messages.
`,
  },
  {
    slug: "browse-pods",
    title: "Browse Pods",
    description: "Explore and manage pods in your cluster.",
    category: "Core Features",
    order: 3,
    content: `
## Browsing Pods

The Pod Explorer is the heart of Podex. It gives you a real-time view of all pods running in your cluster.

### Viewing All Pods

Navigate to **Pods** in the sidebar to see a complete list of pods across all namespaces, or select a specific namespace to filter the view.

### Pod Details

Click on any pod to see detailed information:

- **Overview**: Status, node, IP address, restart count, and resource usage.
- **Containers**: List of containers with their images, ports, and resource limits.
- **Logs**: Real-time log streaming for each container.
- **Events**: Kubernetes events related to the pod.
- **Terminal**: Exec into the pod's container with a full terminal.
- **YAML**: View and edit the pod's YAML manifest directly.

### Search and Filter

Use the search bar at the top to quickly find pods by name, namespace, or label. You can also filter by:

- Status (Running, Pending, Failed, etc.)
- Namespace
- Node
- Label selectors
- Age

### Real-Time Updates

Podex polls the Kubernetes API at configurable intervals (default: 5 seconds). Status changes, new pods, and pod deletions appear in real time without requiring a page refresh.

### Quick Actions

Right-click any pod or use the action menu to:

- **View Logs**: Open the log viewer for the selected pod.
- **Exec into Pod**: Open a terminal session.
- **Delete Pod**: Remove the pod from the cluster.
- **Restart Pod**: Delete and recreate the pod.
- **Port Forward**: Set up port forwarding to a local port.
- **Copy Pod Name**: Copy the pod name to the clipboard.

## Pod Status Reference

| Status | Description |
|--------|-------------|
| Running | The pod is executing on a node. |
| Pending | The pod is waiting to be scheduled. |
| Succeeded | The pod completed successfully. |
| Failed | The pod terminated with an error. |
| Unknown | The pod status could not be determined. |
| CrashLoopBackOff | The pod is repeatedly crashing and restarting. |
`,
  },
  {
    slug: "logs",
    title: "Viewing Logs",
    description: "Stream and search pod logs in real time.",
    category: "Core Features",
    order: 4,
    content: `
## Log Viewer

Podex provides a powerful built-in log viewer that makes it easy to debug and monitor your applications.

### Accessing Logs

1. Select a pod from the Pods list.
2. Click the **Logs** tab.
3. Choose a container from the dropdown if the pod has multiple containers.

### Log Streaming

Logs are streamed in real time by default. New log lines appear at the bottom of the viewer as they are produced by your application.

### Searching Logs

Use the search bar above the log viewer to filter logs by keyword. The search is case-insensitive and supports regular expressions.

### Log Options

- **Since**: View logs from the last 5 minutes, 15 minutes, 1 hour, or custom time range.
- **Tail**: Show only the last N lines.
- **Follow**: Toggle real-time log streaming on or off.
- **Previous**: View logs from the previous container instance (useful after crashes).

### Exporting Logs

Click the **Export** button to download the current log output as a \`.txt\` file for offline analysis or sharing with your team.

## Troubleshooting with Logs

When debugging pod issues, start with these steps:

1. Check the pod status for CrashLoopBackOff or Error states.
2. View logs for the most recent container instance.
3. If the container is crashing immediately, check the **Previous** logs option.
4. Look for error messages, stack traces, or startup failures.
5. Use the Events tab to see if there are scheduling or image pull issues.
`,
  },
  {
    slug: "deploy-apps",
    title: "Deploy Applications",
    description: "Deploy and manage applications from the Podex UI.",
    category: "Core Features",
    order: 5,
    content: `
## Deploying Applications

Podex makes it easy to deploy applications to your cluster without writing YAML files manually.

### Quick Deploy

1. Click the **Deploy** button in the top navigation bar.
2. Enter a name for your deployment.
3. Specify the container image (e.g., \`nginx:latest\`).
4. Set the number of replicas.
5. Optionally configure ports, environment variables, and resource limits.
6. Click **Deploy**.

### Deploy from YAML

If you have a YAML manifest ready:

1. Click **Deploy → From YAML**.
2. Paste or type your YAML manifest.
3. Click **Apply**.

Podex will parse the YAML and create all the specified resources.

### Managing Deployments

Navigate to **Deployments** in the sidebar to see all deployments. From here you can:

- View deployment status and rollout history
- Scale replicas up or down
- Update the container image
- Roll back to a previous revision
- Pause and resume rollouts
- Delete deployments

### Rollback

If a deployment causes issues, you can quickly roll back:

1. Go to **Deployments** and select the deployment.
2. Click **Rollback**.
3. Choose the revision to roll back to.
4. Confirm the rollback.

Podex will update the deployment to use the previous ReplicaSet and container image configuration.

## Best Practices

- Always specify image tags explicitly (avoid using \`latest\` in production).
- Set resource requests and limits for your containers.
- Use namespaces to organize your deployments.
- Enable health checks (liveness and readiness probes) for production workloads.
`,
  },
  {
    slug: "namespaces",
    title: "Managing Namespaces",
    description: "Organize your cluster resources with namespaces.",
    category: "Core Features",
    order: 6,
    content: `
## Namespaces

Namespaces provide a way to divide cluster resources between multiple teams or projects. Podex gives you full visibility and control over namespaces.

### Viewing Namespaces

Navigate to **Namespaces** in the sidebar to see all namespaces in your cluster, including:

- **default**: The default namespace for resources.
- **kube-system**: System components.
- **kube-public**: Publicly accessible resources.
- **Custom namespaces**: Created by you or your team.

### Creating a Namespace

1. Click **Create Namespace**.
2. Enter a name (DNS-compliant label).
3. Optionally add labels and annotations.
4. Click **Create**.

### Namespace Details

Click on a namespace to see:

- Resource quotas and limits
- All resources within the namespace
- Network policies
- RBAC bindings
- Usage metrics

### Deleting a Namespace

Warning: Deleting a namespace removes all resources within it.

1. Select the namespace.
2. Click **Delete**.
3. Confirm the deletion by typing the namespace name.

## Tips

- Use namespaces to separate development, staging, and production environments.
- Apply resource quotas to prevent any single namespace from consuming too many cluster resources.
- Use labels to organize and filter resources within namespaces.
`,
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    description: "Common questions about Podex.",
    category: "Support",
    order: 7,
    content: `
## General

### What is Podex?

Podex is a desktop application that provides a visual interface for browsing and managing Kubernetes clusters. Think of it as Docker Desktop, but designed for Kubernetes.

### Is Podex free?

Yes! Podex is free to use. We offer a Pro plan with additional features for teams and advanced users. See our [Pricing page](/pricing) for details.

### What Kubernetes versions are supported?

Podex supports Kubernetes 1.24 and later. We recommend using the latest stable version for the best experience.

## Installation

### Do I need kubectl installed?

No. Podex includes its own Kubernetes client and does not require kubectl to be installed separately. However, if kubectl is available, Podex will automatically detect and use your existing kubeconfig file.

### Can I install Podex on a remote server?

Podex is designed as a desktop application. For remote access, you can run it on a local machine and connect to remote clusters using kubeconfig files.

### Does Podex work with Minikube, kind, or k3s?

Yes. Podex works with any Kubernetes distribution, including Minikube, kind, k3s, EKS, GKE, AKS, and OpenShift.

## Troubleshooting

### Podex is not detecting my cluster

1. Verify your kubeconfig file exists and is valid.
2. Check that the cluster is running and accessible.
3. Try importing the kubeconfig manually through Settings.
4. Restart Podex and try again.

### Logs are not streaming

1. Check that you have permission to read pod logs.
2. Ensure the pod is running.
3. Try refreshing the pod list.
4. Check the Podex logs for connection errors.

### How do I report a bug?

Please visit our [GitHub Issues](https://github.com/podex/podex/issues) page to report bugs. Include your Podex version, OS, and steps to reproduce the issue.
`,
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and their solutions.",
    category: "Support",
    order: 8,
    content: `
## Common Issues

### Connection Problems

**Symptom**: Podex shows "Disconnected" status or cannot reach the cluster.

**Solutions**:
1. Verify your kubeconfig is correct: \`kubectl config view\`
2. Test connectivity: \`kubectl get nodes\`
3. Check if the API server is accessible from your network.
4. Ensure you have the correct context selected in Podex.
5. If using a VPN, make sure you are connected.

### Performance Issues

**Symptom**: Podex is slow or unresponsive.

**Solutions**:
1. Reduce the number of pods displayed by filtering namespaces.
2. Increase the polling interval in Settings.
3. Close unused log streams and terminals.
4. Ensure your system has at least 4 GB of RAM available.
5. Check for other resource-intensive applications.

### Permission Errors

**Symptom**: You see "Forbidden" or "Unauthorized" errors.

**Solutions**:
1. Verify your RBAC permissions: \`kubectl auth can-i list pods\`
2. Check if your service account has the required roles.
3. If using OIDC authentication, ensure your token is valid and not expired.
4. Contact your cluster administrator to grant the necessary permissions.

### Application Crashes

**Symptom**: Podex crashes or freezes.

**Solutions**:
1. Check for Podex updates and install the latest version.
2. Clear the Podex cache: Settings → Advanced → Clear Cache.
3. Check system logs for crash reports.
4. If the issue persists, report it on [GitHub Issues](https://github.com/podex/podex/issues).

### Log Retrieval Fails

**Symptom**: Logs tab shows an error or empty content.

**Solutions**:
1. Ensure the pod is running and has completed at least one restart if it crashed.
2. Check if the container has log output (some containers write to stderr only).
3. Verify you have the \`pods/log\` permission in the namespace.
4. Try selecting a different container in the pod if it has multiple containers.

## Getting Help

If you cannot resolve an issue:

1. Check the [FAQ](/docs/faq) for similar questions.
2. Search [GitHub Issues](https://github.com/podex/podex/issues) for existing reports.
3. Join our [Discord community](https://discord.gg/podex) for real-time support.
4. File a new issue with detailed reproduction steps.
`,
  },
];

export const blogPosts = [
  {
    slug: "introducing-podex",
    title: "Introducing Podex: Kubernetes Without the Complexity",
    excerpt: "We are thrilled to announce Podex, a new way to interact with Kubernetes clusters from your desktop.",
    date: "2025-06-15",
    author: "Sarah Chen",
    role: "CEO & Co-founder",
    category: "Announcement",
    readTime: "5 min read",
    content: `
## Why We Built Podex

Kubernetes has become the industry standard for container orchestration. It powers millions of applications worldwide, from startups to Fortune 500 companies. Yet despite its power, Kubernetes remains notoriously difficult to learn and use.

We spoke with hundreds of developers and heard the same story again and again: "I know I should be using Kubernetes, but the learning curve is just too steep." YAML manifests, kubectl commands, and cluster configuration are barriers that keep talented developers from leveraging the full power of cloud-native infrastructure.

## The Docker Desktop Inspiration

When Docker Desktop launched, it transformed how developers work with containers. Instead of managing the Docker daemon through the command line, developers got a visual interface that made container management intuitive and accessible.

We asked ourselves: why doesn't this exist for Kubernetes?

## Enter Podex

Podex is the desktop browser for Kubernetes. It gives you a visual interface to explore clusters, manage pods, view logs, deploy applications, and monitor events, all without leaving your desktop.

### What You Can Do

- **Browse your cluster** with a visual tree view of all resources
- **Monitor pods** in real time with automatic status updates
- **Stream logs** from any container with search and filtering
- **Exec into pods** with a built-in terminal
- **Deploy applications** using a visual editor or paste your own YAML
- **Manage namespaces** and their resources
- **Track events** across your cluster

## Our Vision

We believe Kubernetes should be accessible to every developer, not just platform engineers and SREs. Podex is our first step toward making that vision a reality.

Today we are launching the free tier, which includes all core features. In the coming months, we will add team collaboration features, AI-powered troubleshooting, and a plugin system for extending Podex.

## Get Started

Download Podex today and experience Kubernetes from a new perspective. Whether you are a seasoned Kubernetes veteran or just getting started, Podex will change how you think about cluster management.

We would love to hear your feedback. Join our [community](https://discord.gg/podex) and let us know what you think.
`,
  },
  {
    slug: "podex-0.2-release",
    title: "Podex 0.2: Real-Time Logs, Terminal Access, and More",
    excerpt: "Our latest release brings real-time log streaming, pod terminal access, and improved cluster visualization.",
    date: "2025-07-02",
    author: "Marcus Rivera",
    role: "Head of Engineering",
    category: "Release Notes",
    readTime: "4 min read",
    content: `
## What's New in Podex 0.2

We have been busy since our initial launch, and today we are excited to share Podex 0.2 with you. This release focuses on the features you asked for most: real-time logs and terminal access.

### Real-Time Log Streaming

The new log viewer streams logs from your containers in real time. No more switching between terminals or running kubectl logs commands. Features include:

- **Live streaming** with configurable buffer sizes
- **Search and filter** with regex support
- **Export logs** to text files for offline analysis
- **Multi-container support** for pods with sidecars

### Built-in Terminal

Exec into any pod directly from Podex. The terminal feature supports:

- Full PTY terminal emulation
- Multi-tab sessions
- Session history and reconnection
- Container selection for multi-container pods

### Cluster Visualization

We have redesigned the cluster overview to give you a clearer picture of your cluster health. The new resource tree shows:

- Node status and resource utilization
- Pod distribution across nodes
- Service and deployment relationships
- Namespace organization

## Performance Improvements

- 40% reduction in API calls through smarter caching
- Lazy loading for large namespace lists
- Reduced memory footprint for clusters with many pods
- Faster startup time with optimized data fetching

## Bug Fixes

- Fixed an issue where pod deletion would not reflect in the UI until manually refreshed
- Resolved a crash when connecting to clusters with RBAC restrictions
- Fixed log viewer not scrolling to the bottom on new messages
- Corrected YAML editor syntax highlighting for multi-document YAML files

## What's Next

In Podex 0.3, we are working on:

- Port forwarding management UI
- Visual deployment editor
- Resource quota monitoring
- Dark mode improvements

Thank you for using Podex. Your feedback drives our development, so keep the suggestions coming on [GitHub](https://github.com/podex/podex/issues).
`,
  },
  {
    slug: "kubernetes-debugging-guide",
    title: "A Developer's Guide to Kubernetes Debugging with Podex",
    excerpt: "Learn how to quickly diagnose and resolve common Kubernetes issues using Podex's built-in debugging tools.",
    date: "2025-07-08",
    author: "Elena Volkov",
    role: "Developer Advocate",
    category: "Tutorial",
    readTime: "8 min read",
    content: `
## Debugging Kubernetes Doesn't Have to Be Painful

Every Kubernetes developer has been there: your deployment is not working, pods are in CrashLoopBackOff, and you are staring at a terminal wondering where to start.

Podex includes several tools that make debugging faster and more intuitive. Let me walk you through a systematic approach to troubleshooting common Kubernetes issues.

## Step 1: Check the Pod Status

Open Podex and navigate to the Pods view. Look for any pods that are not in the **Running** state. Podex highlights problematic pods with color-coded status indicators.

Common problematic states:

- **CrashLoopBackOff**: The pod is crashing and restarting repeatedly.
- **Pending**: The pod cannot be scheduled to a node.
- **ImagePullBackOff**: Kubernetes cannot pull the container image.

## Step 2: Read the Events

Click on the problematic pod and navigate to the **Events** tab. Events tell you exactly what Kubernetes is doing with your pod, including:

- Scheduling decisions
- Image pull attempts
- Container starts and stops
- Resource allocation

## Step 3: Check the Logs

Navigate to the **Logs** tab. If the pod has crashed and restarted, toggle the **Previous** option to see logs from the crashed container.

Look for:

- Application error messages
- Missing configuration or secrets
- Database connection failures
- Out of memory errors

## Step 4: Inspect the YAML

Click the **YAML** tab to view the pod's manifest. Check for:

- Incorrect container image or tag
- Missing environment variables
- Insufficient resource limits
- Incorrect volume mounts
- Wrong command or arguments

## Step 5: Exec into the Pod

If the pod is running but not working correctly, use the **Terminal** tab to exec into the container. From there you can:

- Check file system contents
- Test network connectivity
- Verify environment variables
- Check application configuration files

## Step 6: Check Node Health

Go back to the cluster overview and check if the node where the pod is scheduled is healthy. Look for:

- Node NotReady status
- Resource pressure (memory, disk, CPU)
- Network issues

## Common Issues and Solutions

### CrashLoopBackOff

1. Check logs for the error message
2. Verify environment variables are set correctly
3. Ensure required secrets and config maps exist
4. Check that the container image tag is correct

### Pending Pods

1. Check node resources (CPU, memory)
2. Verify node selectors and taints/tolerations
3. Check for PVC binding issues
4. Look at events for scheduling errors

### Service Not Reachable

1. Verify the service selector matches pod labels
2. Check that the target pods are running
3. Ensure the correct ports are configured
4. Test with pod-to-pod connectivity

## Pro Tips

1. Use Podex's search feature to quickly find pods by name or label.
2. Set up multiple terminal tabs for different pods simultaneously.
3. Export logs before deleting a crashed pod to preserve debugging information.
4. Use the resource viewer to understand the relationships between services, deployments, and pods.

With these tools and techniques, you will spend less time debugging and more time building great applications.
`,
  },
  {
    slug: "podex-architecture",
    title: "Under the Hood: The Architecture of Podex",
    excerpt: "A deep dive into how Podex is built, from the Electron shell to the Kubernetes client layer.",
    date: "2025-07-10",
    author: "Marcus Rivera",
    role: "Head of Engineering",
    category: "Engineering",
    readTime: "7 min read",
    content: `
## Building a Kubernetes Desktop Client

When we set out to build Podex, we wanted to create a fast, responsive, and reliable desktop application for Kubernetes. This meant making deliberate architectural choices at every level of the stack.

## Technology Stack

### Desktop Framework

We chose Electron for the desktop shell because it gives us access to native APIs while maintaining a single codebase across Windows, macOS, and Linux. The tradeoff is a larger binary size, but we mitigated this through aggressive code splitting and lazy loading.

### Frontend

The UI is built with React and TypeScript. We use a component-based architecture that mirrors how we think about Kubernetes resources:

- **ClusterBrowser**: The main view for exploring cluster resources
- **PodExplorer**: Detailed pod management interface
- **LogViewer**: Real-time log streaming component
- **Terminal**: PTY-based terminal emulator
- **ResourceGraph**: Visual representation of resource relationships

### Kubernetes Client

Podex uses a custom Kubernetes client library built on top of the official JavaScript client. We added:

- **Smart caching**: Reduces API calls by maintaining a local resource cache
- **Watch-based updates**: Uses Kubernetes watch API for real-time changes
- **Retry logic**: Automatically handles transient connection failures
- **Rate limiting**: Prevents overwhelming the API server

## Data Flow

The data flow in Podex follows a clear pattern:

1. **User interaction** triggers a view change
2. **Data layer** determines what resources to fetch
3. **Kubernetes client** queries the API server (or cache)
4. **State manager** updates the application state
5. **React components** re-render with new data

This architecture ensures that the UI always reflects the current state of the cluster while minimizing unnecessary API calls.

## Caching Strategy

We implement a multi-level caching strategy:

- **L1 (In-Memory)**: Hot data like current namespace pods
- **L2 (IndexedDB)**: Persistent cache for cluster metadata
- **L3 (API Server)**: Source of truth

Cache invalidation is driven by:

- Kubernetes watch events
- User-initiated refreshes
- TTL-based expiry for watch failures
- Explicit invalidation on resource mutations

## Performance Considerations

### Memory Management

Kubernetes clusters can have thousands of resources. We handle this by:

- Virtualizing large lists to render only visible items
- Paginating API responses for large namespaces
- Using Web Workers for background data processing
- Implementing LRU cache eviction

### Network Optimization

- Batch API calls where possible
- Use watch API instead of polling for real-time updates
- Compress WebSocket messages
- Implement exponential backoff for reconnection

## Testing Strategy

Our testing pyramid consists of:

- **Unit tests**: Core business logic and utility functions
- **Component tests**: React component behavior
- **Integration tests**: Kubernetes client interactions
- **E2E tests**: Full application workflows

## What We Learned

Building Podex taught us several important lessons:

1. **Start with the data model**: Understanding Kubernetes resource relationships made everything else easier.
2. **Watch everything**: The watch API is incredibly powerful for real-time updates.
3. **Cache aggressively**: API servers have rate limits, and users expect instant responses.
4. **Design for failure**: Kubernetes connections are inherently unreliable. Build retry logic from day one.

We are excited about where Podex is heading. The architecture we have built allows us to quickly add new features while maintaining performance and reliability.
`,
  },
  {
    slug: "kubernetes-best-practices",
    title: "10 Kubernetes Best Practices Every Developer Should Know",
    excerpt: "Essential Kubernetes practices that will save you time and prevent headaches in production.",
    date: "2025-07-12",
    author: "Sarah Chen",
    role: "CEO & Co-founder",
    category: "Guide",
    readTime: "10 min read",
    content: `
## Kubernetes Best Practices for Modern Development

Whether you are deploying your first application or managing hundreds of microservices, these Kubernetes best practices will help you build more reliable, secure, and efficient systems.

### 1. Always Use Resource Requests and Limits

Every container should specify CPU and memory requests and limits. This helps Kubernetes schedule pods efficiently and prevents one container from starving others.

\`\`\`yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "250m"
\`\`\`

### 2. Use Namespaces to Organize Resources

Namespaces provide logical separation between different teams, projects, or environments. They help you manage access control and resource quotas effectively.

### 3. Implement Health Checks

Always configure liveness and readiness probes for your containers. Liveness probes tell Kubernetes when to restart a container, while readiness probes control when a pod receives traffic.

### 4. Use Labels and Annotations Consistently

Labels are the foundation of Kubernetes organization. Develop a consistent labeling strategy and stick to it. Common labels include:

- \`app\`: The application name
- \`version\`: The application version
- \`environment\`: The deployment environment
- \`team\`: The responsible team

### 5. Manage Secrets Securely

Never store sensitive data in plain text within your manifests. Use Kubernetes Secrets or integrate with a secrets manager like HashiCorp Vault.

### 6. Implement Network Policies

Network policies control traffic flow between pods. Without them, any pod can communicate with any other pod, which is a security risk.

### 7. Monitor Resource Usage

Set up monitoring and alerting for resource consumption. Tools like Prometheus and Grafana, or Podex's built-in resource viewer, help you track usage patterns and prevent resource exhaustion.

### 8. Use GitOps for Deployment Management

Store your Kubernetes manifests in Git and use tools like ArgoCD or Flux to automate deployments. This provides audit trails, rollback capabilities, and deployment consistency.

### 9. Implement Pod Disruption Budgets

PodDisruptionBudgets ensure that a minimum number of pods remain available during voluntary disruptions like node maintenance or cluster upgrades.

### 10. Keep Images Updated and Minimal

Use specific image tags instead of \`latest\`. Regularly update base images for security patches. Use multi-stage builds to create minimal container images.

## How Podex Helps

Podex makes it easy to follow these best practices by providing:

- Visual resource quota monitoring
- Real-time event tracking
- Log viewer for debugging
- Deployment management interface
- Namespace organization tools

Start implementing these practices today, and your Kubernetes clusters will be more reliable, secure, and maintainable.
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
