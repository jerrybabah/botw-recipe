<template>
  <!-- TODO: 꾸미기 -->
  <button class="install" v-if="deferredPrompt" @click="promptInstall">
    설치하기
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BeforeInstallPromptEvent } from 'vue-pwa-install';

@Component
export default class InstallButton extends Vue {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;

  private promptInstall() {
    console.log('설치 시작');
    if (this.deferredPrompt) {
      // Show the prompt:
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt:
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }

        this.deferredPrompt = null;
      });
    }
  }

  // hook은 그에 맞는 이름으로 메소드를 구현하면 된다.
  private created() {
    this.$on('canInstall', (event: BeforeInstallPromptEvent) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt:
      event.preventDefault();

      // Stash the event so it can be triggered later:
      this.deferredPrompt = event;
    });
  }
}
</script>

<style>
button.install {
  cursor: pointer;
}
</style>
