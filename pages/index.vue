<template>
  <div>
    <Header></Header>
    <MemeList></MemeList>
  </div>
</template>

<script>
import Header from '~/components/Header';
import MemeList from '~/components/MemeList';
import axios from 'axios';

export default {
  components: {
    Header,
    MemeList,
  },
  fetch ({ store }) {
    return axios.get(`http://www.memify.ru/api/v1/mems/?page=1&page_size=20`)
      .then((res) => {
        store.dispatch('setMemes', res.data.results);
      })
  }
}
</script>

<style>
 body {
   background: #dadada;
 }
</style>
