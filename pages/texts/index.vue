<template>
  <div>
    <Header></Header>
    <TextmemList></TextmemList>
  </div>
</template>

<script>
import Header from '~/components/Header';
import TextmemList from '~/components/TextmemList';
import axios from 'axios';

export default {
  components: {
    Header,
    TextmemList,
  },
  fetch ({ store }) {
    return axios.get(`http://www.memify.ru/api/v1/textmems/?page=1&page_size=20`)
      .then((res) => {
        store.dispatch('setTextmems', res.data.results);
      })
  }
}
</script>