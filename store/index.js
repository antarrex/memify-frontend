import Vuex from 'vuex';
import Axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      memes: [],
      news: [],
      textmems: [],
    },
    getters: {
      memes(state) {
        return state.memes;
      },
      news(state) {
        return state.news;
      },
      textmems(state) {
        return state.textmems;
      },
    },
    mutations: {
      setMemes(state, memes) {
        state.memes = [...state.memes, ...memes];
      },
      setNews(state, news) {
        state.news = news;
      },
      setTextmems(state, textmems) {
        state.textmems = [...state.textmems, ...textmems];;
      },
    },
    actions: {
      setMemes(vuexContext, memes) {
        vuexContext.commit('setMemes', memes);
      },
      setNews(vuexContext, news) {
        vuexContext.commit('setNews', news);
      },
      setTextmems(vuexContext, textmems) {
        vuexContext.commit('setTextmems', textmems);
      }
    }
  });
};

export default createStore;