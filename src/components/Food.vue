<template>
  <li>
    <div class="food-wraaper">
      <img :src="food.img" alt="이미지">
      <div class="name">{{ food.name }}</div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IFood from '../interfaces/food';

@Component
export default class Food extends Vue {
  @Prop() private food!: IFood;
}
</script>

<style>

</style>
