<template>
  <li :data-index="food.id">
    <div class="food">
      <div class="image-wrapper">
        <img class="image" :src="food.image" alt="이미지">
      </div>
      <div class="name">{{ food.name_kr }}</div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IFood from '../interfaces/food.interface';

@Component
export default class Food extends Vue {
  @Prop() private food!: IFood;
}
</script>

<style>
  .food {
    min-width: 200px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .food .image-wrapper {
    margin-top: 30px;
  }

  .food .name {
    margin: 0 auto;
    margin-top: 16px;
  }

  .food .name:hover, .food .image-wrapper .image {
    text-decoration: underline;
    cursor: pointer;
  }

  .food .image-wrapper .image {
    width: 120px;
  }
</style>
