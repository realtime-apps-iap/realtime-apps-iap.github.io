module.exports = {
    title: "Realtime Apps",
    tagline: "Realtime Apps IAP Workshop Resources",
    url: "https://realtime-apps-iap.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "realtime-apps-iap",
    projectName: "realtime-apps-iap.github.io",
    themeConfig: {
        hideableSidebar: true,
        navbar: {
            title: "Realtime Apps",
            logo: {
                alt: "Realtime Apps Logo",
                src: "img/logo.png",
            },
            items: [{
                    to: "docs",
                    //activeBasePath: "docs",
                    label: "Learning Materials",
                    position: "right",
                },
                {
                    to: "competition",
                    //activeBasePath: "competition",
                    label: "Competition",
                    position: "right",
                },
                // { to: "blog", label: "Blog", position: "right" },
                {
                    href: "https://github.com/realtime-apps-iap",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [{
                    title: "Docs",
                    items: [{
                            label: "Learning Materials",
                            to: "docs/",
                        },
                        {
                            label: "Chat Platform",
                            to: "docs/chatapp/intro",
                        },
                        {
                            label: "Videocall App",
                            to: "docs/videocallapp/intro",
                        },
                        {
                            label: "Exploring Browser APIs",
                            to: "docs/browserapi/intro",
                        },
                        {
                            label: "Heroku Deployment",
                            to: "docs/herokudeployment/react",
                        },
                        {
                            label: "Workshop Poster",
                            to: "docs/others/poster",
                        },
                    ],
                },
                {
                    title: "Competition",
                    items: [{
                            label: "Competition Information",
                            to: "/competition",
                        },
                        {
                            label: "Project ideas",
                            to: "/competition/projectideas",
                        },
                        {
                            label: "Projects Submitted",
                            to: "/competition/projects",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        // {
                        //     label: "Blog",
                        //     to: "blog",
                        // },
                        {
                            label: "GitHub",
                            href: "https://github.com/realtime-apps-iap",
                        },
                    ],
                },
            ],
            copyright: `Realtime Apps IAP | Built with ❤️`,
        },
        gtag: {
            trackingID: "G-WT3D2HSL72",
            // Optional fields.
            anonymizeIP: false, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
                    //editUrl: null, // set as null to hide edit option
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                    //editUrl: null, // set as null to hide edit option
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};