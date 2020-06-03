/*eslint-disable */
module.exports = {
  css: {
    sourceMap: true,
  },
  // 빌드 후 만들어지는 manifest.json에 영향을 준다.
  pwa: {
    workboxPluginMode: 'GenerateSW', // default, another option: InjectManifest
    workboxOptions: {
      // Do not precache images
      // TODO: 나머지는 프리캐시가 되는건가? 그리고 프리캐시 되는 애들은 캐싱전략이 어떻게 되는거지? => 프리캐시만의 로직이 있다. revision 같은. 좀 더 알아볼 필요가 있다.
      // precach, runtime caching이 비교할 게 아닌가? addRoute, registerRoute의 차이와 연관이 있어보이는데...
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'CacheFirst',

        options: {
          // Use a custom cache name.
          cacheName: 'images',

          // Only cache 10 images.
          // expiration: {
          //   maxEntries: 10,
          // },
        },
      }],
    },
    name: 'botw receipe normal', // name, 앱 설치 후 바탕화면에 보이는 이름으로 쓰인다.
    shortName: 'botw receipe short', // short_name
    // themeColor: '#695c30', // theme_color
    themeColor: '#f7f6f4', // 데스크탑 앱에서 top toolbar에 적용된다.
    manifestOptions: {
      background_color: '#38b6f1', // background_color
      start_url: '/', // start_url, 웹으로 접속한건지, pwa로 접속한건지 구분할 수 있다.
      display: 'standalone', // browser(위에 url이 보임), standalone(일반적인 앱과 같은 화면), fullscreen(아래에 뒤로 가기, 홈 버튼도 안보인)
    },
  },
};
