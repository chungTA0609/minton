import menu from "../components/menu";

import { getField, updateField } from "vuex-map-fields";

const { menuItemArr } = menu();
export const state = () => ({
  menuItems: null,
});

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  SET_MENU_ITEMS(state, menuItems) {
    state.menuItems = menuItems;
  },
};

export const actions = {
  async getMenuItems({ commit }, payload) {
    try {
      const response = await this.$axios.get("/url");
      commit("SET_MENU_ITEMS", response ? response : menuItemArr);
    } catch (error) {
      //handle errors
      console.log(error);
      commit("SET_MENU_ITEMS", menuItemArr);
    }
  },
};
