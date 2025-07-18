// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PayStabl AgentPay Documentation",
  tagline:
    "Programmable wallets for AI agents enabling autonomous onchain transactions",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://agentpay-docs.replit.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "paystabl", // Usually your GitHub org/user name.
  projectName: "paystabl-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/paystabl/docs/tree/main/",
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/paystabl-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "PayStabl Logo",
          src: "img/header-logo.png",
          width: 110,
          height: 100,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://paystabl.com/",
            label: "Dashboard",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/introduction",
              },
              {
                label: "API Reference",
                to: "/reference/x402_headers",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/paystabl",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/paystabl",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/paystabl/docs",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} AgentPay. Programmable wallet infrastructure for AI agents enabling autonomous onchain transactions.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "json", "javascript", "typescript"],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
