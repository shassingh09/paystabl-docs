# AgentPay Documentation

This is the official documentation site for AgentPay, built with Docusaurus and deployed separately on Replit.

## 🚀 Deployment

This documentation is deployed to: **https://agentpay-docs.replit.app**

## 🛠️ Development

To run the documentation locally:

```bash
npm install
npm start
```

This will start the development server on `http://localhost:3001` with hot reload.

## 📦 Building

To build the static documentation:

```bash
npm run build
```

The static files will be generated in the `build/` directory.

## 🎨 Theme

The documentation uses a custom gradient theme that matches the main AgentPay application:
- Purple to pink gradient backgrounds
- Glass-morphism effects with backdrop blur
- Hidden scrollbars for clean appearance
- Responsive design with mobile support

## 📁 Structure

```
docs/
├── index.mdx              # Introduction
├── quickstart.mdx         # Quick Start Guide
├── architecture.mdx       # Architecture Overview
├── integrations/          # Framework integrations
│   ├── mcp.mdx           # Claude MCP Server
│   ├── langgraph.mdx     # LangGraph integration
│   ├── n8n.mdx           # n8n integration
│   └── custom_frameworks.mdx
├── examples/              # Usage examples
│   ├── claude_demo.mdx
│   ├── langgraph_retry.mdx
│   └── agent_to_agent.mdx
├── tools/                 # Tool documentation
│   ├── pay_agent.mdx
│   └── pay_api_endpoint.mdx
├── reference/             # API reference
│   └── x402_headers.mdx
├── security.mdx           # Security guidelines
└── testnets.mdx          # Testnet information
```

## 🔗 Linking from Main App

The main AgentPay application links to this documentation via:
- Navigation menu "Documentation" button
- Hero section "Documentation" button  
- Footer links

All links use `target="_blank"` to open in new tabs.

## 🚀 Replit Deployment

To deploy updates:

1. Make your changes to the documentation
2. Commit and push to the repository
3. The Replit deployment will automatically update

The `.replit` configuration handles:
- Automatic building and serving
- Port configuration (3001 → 80)
- Host binding for external access

## 🎯 Key Features

- **Independent deployment** - Updates without redeploying main app
- **Beautiful gradient theme** - Matches main app design perfectly
- **Fast updates** - Content changes deploy in ~1-2 minutes
- **SEO optimized** - Proper meta tags and structure
- **Mobile responsive** - Works great on all devices
- **Hidden scrollbars** - Clean, modern appearance