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
  // tutorialSidebar: [
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
  frontendSidebar: [
    {
      type: 'category',
      label: 'Web API',
      items: [
        {
          type: 'doc',
          label: 'Location',
          id: 'javascript/web-api/location'
        },
        {
          type: 'doc',
          label: 'History',
          id: 'javascript/web-api/history'
        },
        {
          type: 'doc',
          label: 'Fetch',
          id: 'javascript/web-api/fetch'
        },
        {
          type: 'doc',
          label: '瀏覽器儲存區',
          id: 'javascript/web-api/storage'
        },
      ]
    }
  ],
  softwareBar: [
    {
      type: 'category',
      label: 'GIT',
      items: [
        {
          type: 'doc',
          label: 'Intro',
          id: 'software/git/intro'
        }
      ]
    }
  ]

};

module.exports = sidebars;
