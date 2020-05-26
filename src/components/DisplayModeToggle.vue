<template>
  <!-- TODO: 스위치 버튼으로 바꾸고, 꾸미기 -->
  <button class="toggle" @click="toggleDisplayMode">
    화면 모드 토글(동작x)
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  methods: {
    ...mapMutations([
      'toggleDisplayMode',
    ]),
  },
})
export default class DisplayModeToggle extends Vue {
  private isDarkMode = false;

  private toggleDisplayMode!: () => void;
}
</script>

<style>
  button.toggle {
    position: absolute;
    top: 10px;
    right: 50px;
  }
</style>
