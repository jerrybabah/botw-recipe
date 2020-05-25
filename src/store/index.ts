import Vue from 'vue';
import Vuex from 'vuex';
import IFood from '../interfaces/food.interface';
import foodApi from '../api/food.api';

Vue.use(Vuex);

export default new Vuex.Store<{ foods: IFood[]; focusedFood: IFood | null }>({
  state: {
    foods: [],
    focusedFood: null,
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
  },
  actions: {
    async getAllFoods({ commit }) {
      const foods = await foodApi.getFoods();
      commit('setFoods', foods);
    },
  },
});
