SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@16.8/umd/react.production.min.js',
    'react-dom': 'react-dom@16.8/umd/react-dom.production.min.js' ,
    'react-router-dom': 'react-router-dom@5.1.0/umd/react-router-dom.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index.jsx')
  .catch(console.error.bind("error:" + console));