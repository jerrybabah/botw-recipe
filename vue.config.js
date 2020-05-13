/*eslint-disable */
module.exports = {
  // 빌드 후 만들어지는 manifest.json에 영향을 준다.
  pwa: {
    name: 'botw receipe normal', // name, 앱 설치 후 바탕화면에 보이는 이름으로 쓰인다.
    shortName: 'botw receipe short', // short_name
    // themeColor: '#695c30', // theme_color
    themeColor: '#38b6f1', // 데스크탑 앱에서 top toolbar에 적용된다.
    manifestOptions: {
      background_color: '#38b6f1', // background_color
      start_url: '/?launcher=true', // start_url, 웹으로 접속한건지, pwa로 접속한건지 구분할 수 있다.
    },
  },
};
