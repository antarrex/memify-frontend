<template>
  <div>
    <Header></Header>
    <NewsList :news="news"></NewsList>
  </div>
</template>

<script>
import Header from '~/components/Header';
import NewsList from '~/components/NewsList';
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
  components: {
    Header,
    NewsList,
  },
  computed: {
    ...mapGetters(['news']),
  },
  fetch ({ store }) {
    return axios.get(`http://www.memify.ru/api/v1/news/`)
      .then((res) => {
        store.dispatch('setNews', res.data.results);
      })
  }
}
</script>
