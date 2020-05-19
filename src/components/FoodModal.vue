<template>
  <div class="modal-container" :class="{ hidden: isHidden }" @keydown.esc="emitHiding">
    <div class="overlay" @click="emitHiding"></div>
    <div class="modal-wrapper">
      <span class="exit" @click="emitHiding"> X </span>
      <div class="content" v-if="food !== null">
        <div class="image-wrapper">
          <img :src="food.image" alt="이미지" class="image">
        </div>
        <div class="info">
          <div class="name">{{ food.name_kr }}</div>
          <div class="etcs">
            <div class="etc">
              <span class="key">최소 회복량: </span>
              <span class="value">{{ food.minHeartsRestored }}</span>
            </div>
            <div class="etc">
              <span class="key">최대 회복량: </span>
              <span class="value">{{ food.maxHeartsRestored }}</span>
            </div>
            <div class="etc">
              <span class="key">최소 판매가: </span>
              <span class="value">{{ food.minSellingPrice }}</span>
            </div>
            <div class="etc">
              <span class="key">최대 판매가: </span>
              <span class="value">{{ food.maxSellingPrice }}</span>
            </div>
            <div class="etc">
              <span class="key">참고: </span>
              <span class="value">{{ food.note_kr }}</span>
            </div>
          </div>
          <div class="materials">
            <div class="key">재료: </div>
            <div class="value">
              <div class="material-list-wrapper"
              v-for="(materialList, index) in food.materials" :key="index">
                <!-- TODO: 다음 중 하나 멘트를 넣을 지 결정 -->
                <div class="comment">{{index + 1}}: (다음 중 하나)?</div>
                <div class="material-list">
                  <div class="material" v-for="material in materialList" :key="material.id">
                    <div class="image-wrapper">
                      <img :src="material.image" alt="이미지">
                    </div>
                    <div class="name">{{material.name_kr}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>nothing to selected food...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IFood from '../interfaces/food.interface';

@Component
export default class FoodModal extends Vue {
  @Prop() private food!: IFood | null;

  @Prop() private isHidden!: boolean;

  protected emitHiding() {
    this.$emit('hide');
  }
}
</script>

<style>
  .modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal-wrapper {
    position: relative;
    background-color: white;
    z-index: 2;
    min-width: 800px;
    min-height: 400px;
    height: 80%;
    overflow: scroll;
  }

  .modal-wrapper .exit {
    position: absolute;
    top: 2%;
    right: 2%;
    font-weight: 900;
  }

  .modal-wrapper .exit:hover {
    cursor: pointer;
    color: gray;
  }

  .hidden {
  display: none;
}
</style>
