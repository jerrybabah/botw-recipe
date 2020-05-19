<template>
  <div>
    <div>cook page</div>
    <div>{{ num }}</div>
    <button @click="increment">button</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Cook extends Vue {
  num = 1;

  increment() {
    this.num += 1;
  }
}

// export default {
//   name: 'Cook',
//   data() {
//     return {
//       num: 1,
//     };
//   },
//   methods: {
//     increment() {
//       this.num += 1;
//     },
//   },
// };
</script>

<style>

</style>
