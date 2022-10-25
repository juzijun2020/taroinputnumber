const config = {
  projectName: 'taro',
  date: '2022-10-24',
  designWidth: 375,
  compiler: {
    type: 'webpack5',  
    prebundle: {
        enable: true    
    }  
  }, 
  cache: {
    enable: true  
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [
    '@tarojs/plugin-html'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  mini: {
    // prerender: {
    //   match: 'pages/shop/**',
    // },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    chunkDirectory: 'chunk'+Math.ceil(Math.random()*1000),
    esnextModules: ['nutui-taro'],
    router: {
      mode: 'browser', // hash、browser
      customRoutes: {
        '/pages/index/index': '/',
      }
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          minRootSize: 24,
          maxRootSize: 24,
        },
      },
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
