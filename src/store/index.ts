import Vue from 'vue';
import Vuex from 'vuex';
import IFood from '../interfaces/food.interface';
import foodApi from '../api/food.api';

Vue.use(Vuex);

export default new Vuex.Store<{ foods: IFood[]; focusedFood: IFood | null; isDarkMode: boolean }>({
  state: {
    foods: [],
    focusedFood: null,
    isDarkMode: false,
  },
  getters: {
  },
  mutations: {
    setFoods(state, foods: IFood[]) {
      state.foods = foods;
    },
    setFocusedFood(state, index: number) {
      state.focusedFood = state.foods.find((food) => food.id === index) || null;
    },
    initDisplayMode(state) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.isDarkMode = true;
      } else {
        state.isDarkMode = false;
      }
    },
    toggleDisplayMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  actions: {
    async getAllFoods({ commit }) {
      const foods = await foodApi.getFoods();
      commit('setFoods', foods);
    },
  },
});
