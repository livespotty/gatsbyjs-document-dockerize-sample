const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        d: 'public',
        dest: 'public',
        root:
          '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app',
          templates:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/node_modules/docz-core/dist/templates',
          docz:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz',
          cache:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/.cache',
          app:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app',
          appPackageJson:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/package.json',
          appTsConfig:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/tsconfig.json',
          gatsbyConfig:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/gatsby-config.js',
          gatsbyBrowser:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/gatsby-browser.js',
          gatsbyNode:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/gatsby-node.js',
          gatsbySSR:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/gatsby-ssr.js',
          importsJs:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app/imports.js',
          rootJs:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app/root.jsx',
          indexJs:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app/index.jsx',
          indexHtml:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app/index.html',
          db:
            '/Users/petermendis/Documents/GitHub/gatsbyjs-document-dockerize-sample/my-docz-app/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
