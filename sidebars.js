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

module.exports = {
  frontendSidebar: {
    CSS: [
      {
        type: "category",
        label: "動畫",
        collapsible: true,
        collapsed: false,
        items: [
          {
            type: "doc",
            id: "frontend/css/animation/transition",
            label: "Transition",
          },
          {
            type: "doc",
            id: "frontend/css/animation/animation",
            label: "Animation",
          },
        ],
      },
    ],
    WebAPI: [
      {
        type: "doc",
        label: "Location",
        id: "frontend/web-api/location",
      },
      {
        type: "doc",
        label: "History",
        id: "frontend/web-api/history",
      },
      {
        type: "doc",
        label: "Fetch",
        id: "frontend/web-api/fetch",
      },
      {
        type: "doc",
        label: "瀏覽器儲存區",
        id: "frontend/web-api/storage",
      },
    ],
  },
  softwareSidebar: [
    {
      type: "category",
      label: "Command Line",
      items: [
        { type: "doc", id: "software/command-line/basic", label: "基礎" },
        { type: "doc", id: "software/command-line/file", label: "檔案" },

      ],
    },
  ],
  computerScienceBar: [
    {
      type: "category",
      label: "網際網路協定",
      items: [
        {
          type: "doc",
          id: "computer-science/internet/application1",
          label: "應用程式協定(上)",
        },
        {
          type: "doc",
          id: "computer-science/internet/application2",
          label: "應用程式協定(下)",
        },
      ],
    },
  ],
};
