import Vuex from 'vuex';
import Axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      memes: [],
    },
    getters: {
      memes(state) {
        return state.memes;
      }
    },
    mutations: {
      setMemes(state, memes) {
        state.memes = [...state.memes, ...memes];
      }
    },
    actions: {
      setMemes(vuexContext, memes) {
        vuexContext.commit('setMemes', memes);
      }
    }
  });
};

export default createStore;