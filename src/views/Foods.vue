<template>
  <main class="container">
    <ul class="food-list" @click="showModal">
      <food v-for="food in foods" :key="food.id" :food="food"/>
    </ul>
    <food-modal :food="focusedFood" :isHidden="isModalHidden" @hide="hideModal"></food-modal>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import foodData from '../data/foods.data';
import IFood from '../interfaces/food.interface';

import Food from '../components/Food.vue';
import FoodModal from '../components/FoodModal.vue';

import { isClickableElement, getIdFromClickableElement } from '../utils/helper';


@Component({
  components: {
    Food,
    FoodModal,
  },
})
export default class Foods extends Vue {
  // @Prop() private foods!: Array<IFood>;
  private foods: IFood[] = foodData.data;

  private isModalHidden = true;

  private focusedFood: IFood | null = null;

  // event delegation: 이벤트 위임
  // 리스트의 요소마다 이벤트를 등록한다면 요소가 많아질 수록 쓸데없이 메모리 누수가 생긴다.
  // 이벤트 전파를 이용해 이벤트 핸들러를 공통 부모 요소에게 위임하자.
  private showModal(e: Event) {
    const target = e.target as Element;

    if (e.target && isClickableElement(target)) {
      this.isModalHidden = false;

      this.focusedFood = this.foods
        .find((food) => food.id === getIdFromClickableElement(target)) || null;
    }

    // input 엘리먼트에 대한 key 이벤트는 vue 자체적으로 api를 제공하지만
    // 모달을 지우기 위한 key 이벤트 핸들러처럼 input 엘리먼트와 상관없다면
    // document에 이벤트 리스너를 등록해야 한다.
    document.addEventListener('keydown', () => {
      this.isModalHidden = true;
    });
  }

  private hideModal() {
    this.isModalHidden = true;

    // 다른 keydown 이벤트와 혹시 겹칠 수도 있으니 필요 없어지면 이벤트 리스너 삭제
    document.removeEventListener('keydown', () => {
      this.isModalHidden = true;
    });
  }
}
</script>

<style scoped>
  ul, li {
    all: unset;
  }

  .food-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
