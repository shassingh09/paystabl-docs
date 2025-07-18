/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'introduction',
    {
      type: 'doc',
      id: 'quickstart',
      label: 'Quickstart',
    },
    'architecture',
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/mcp',
        'integrations/langgraph',
        'integrations/n8n',
        'integrations/custom_frameworks',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/claude_demo',
        'examples/langgraph_retry',
        'examples/agent_to_agent',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/pay_agent',
        'tools/pay_api_endpoint',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/x402_headers',
        'security',
        'testnets',
      ],
    },
  ],
};

module.exports = sidebars;