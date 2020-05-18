<template>
  <main>
    <ul>
      <Food v-for="(food, key) in foods" :key="key" :food="food"/>
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Food from '../components/Food.vue';
import IFood from '../interfaces/food';

@Component({
  components: {
    Food,
  },
})
export default class Foods extends Vue {
  private foods: Array<IFood> = [{
    img: 'abc',
    name: 'a',
  }];
}

// export default {
//   name: 'Foods',
// };
</script>

<style scoped>
  ul, li {
    all: unset;
  }
</style>
