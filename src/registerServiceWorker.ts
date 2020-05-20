/* eslint-disable no-console */

import { register } from 'register-service-worker';

/**
 * service worker 관련 interfaces
 * 1. ServiceWorkerContainer
 * 2. ServiceWorkerRegistration
 * 3. ServiceWorker
 * 4. ServiceWorkerGlobalScope
 */

// production 환경이면서 브라우저에서 service worker를 지원하는지 확인
// 여기 script는 웹 페이지 프로세스 내에서 실행되는 것이니, document, window, navigator에 접근 가능
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  /**
   * 1.
   * register의 인자로 쓰이는 swUrl은 반드시 vue.config.js에 쓰인 pwa 관련 설정 중 swUrl과 같은 경로를 가져야 한다.
   * -> TODO: 확실히 이해 못함
   * 2.
   * 두 번째 인자로 hook을 설정한다. addEventListener을 붙인 것과 같다. '어디에' 이벤트를 붙였는지 이해할 필요가 있다.
   * navigator.serviceWorker()의 결과로 Promise<ServiceWorkerRegistration>을 반환하는 데,
   * ServiceWorkerRegistration에 addEventListener을 한 것이다.
   * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
   */
  register(`${process.env.BASE_URL}service-worker.js`, {
    /**
     * navigator.servieWorker.register()에서 두 번째 인자로 options를 넣는데, registrationOptions가 그 역할을 한다.
     * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameters
     */
    registrationOptions: {
      // scope: '',
      // type: 'classic',
      // updateViaCache: 'none',
    },
    ready(registration) {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered(registration) {
      console.log('Service worker has been registered.');
    },
    cached(registration) {
      console.log('Content has been cached for offline use.');
    },
    updatefound(registration) {
      console.log('New content is downloading.');
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
