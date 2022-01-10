// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Semester 6 Helpsite",
  tagline: "We all need our heroes",
  url: "https://helpsite.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "UtsavBalar1231",
  projectName: "helpsite",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/utsavbalar1231/helpsite/tree/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/utsavbalar1231/helpsite/tree/master/",
        },
        googleAnalytics: {
          trackingID: "G-HJB02VLS7B",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Helpsite - Semester 6",
        logo: {
          alt: "Helpsite Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Introduction",
          },
          {
            to: "/docs/subject-theory",
            label: "Subject Theory",
            position: "left",
          },
          {
            type: "doc",
            docId: "courses",
            position: "left",
            label: "Courses",
          },
          {
            to: "/docs/labs",
            label: "Labs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/UtsavBalar1231",
            label: "GitHub",
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
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Subject Theory",
                to: "/docs/Subjects-Theory/subject-theory",
              },
              {
                label: "Labs",
                to: "/docs/labs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/UtsavTheCunt",
              },
              {
                label: "Gmail",
                href: "mailto:utsavbalar1231@gmail.com",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/UtsavTheCunt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Courses",
                to: "/docs/courses",
              },
              {
                label: "Blogs",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/UtsavBalar1231",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Helpsite, <br>By UtsavBalar.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
