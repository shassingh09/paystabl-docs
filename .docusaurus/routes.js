import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '6a5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6aa'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '768'),
            routes: [
              {
                path: '/architecture',
                component: ComponentCreator('/architecture', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/examples/agent_to_agent',
                component: ComponentCreator('/examples/agent_to_agent', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/examples/claude_demo',
                component: ComponentCreator('/examples/claude_demo', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/examples/langgraph_retry',
                component: ComponentCreator('/examples/langgraph_retry', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integrations/custom_frameworks',
                component: ComponentCreator('/integrations/custom_frameworks', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integrations/langgraph',
                component: ComponentCreator('/integrations/langgraph', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integrations/mcp',
                component: ComponentCreator('/integrations/mcp', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/integrations/n8n',
                component: ComponentCreator('/integrations/n8n', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', '2c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/quickstart',
                component: ComponentCreator('/quickstart', 'eab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/x402_headers',
                component: ComponentCreator('/reference/x402_headers', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/security',
                component: ComponentCreator('/security', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/testnets',
                component: ComponentCreator('/testnets', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools/pay_agent',
                component: ComponentCreator('/tools/pay_agent', '339'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools/pay_api_endpoint',
                component: ComponentCreator('/tools/pay_api_endpoint', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '697'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
