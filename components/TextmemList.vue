<template>
  <div class="ui container">
    <Meme v-for="meme in textmems" 
          :key="meme.id"
          :text="meme.text"
          :image="meme.image">
    </Meme>
    <div class="preloader" v-show="!loading">Загрузка...</div>
  </div>
</template>

<script>
  import Meme from '~/components/Meme';
  import {mapGetters} from 'vuex';
  import axios from 'axios';

  export default {
    components: {
      Meme,
    },
    data() {
      return {
        loading: false,
        pageNum: 2,
      }
    },
    mounted() {
      this.scroll(this.pageNum);
    },
    methods: {
      scroll () {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight;
          if (bottomOfWindow) {
            if (!this.loading) {
              this.loading = true;
              axios.get(`http://www.memify.ru/api/v1/textmems/?page=${this.pageNum}&page_size=20`)
                .then((res) => {
                  this.$store.dispatch('setTextmems', res.data.results);
                  this.pageNum++;
                  this.loading = false;
                });
            }
          }
        };
      },
    },
    computed: {
      ...mapGetters(['textmems']),
    }
  }
</script>

<style scoped>
  .container {
    margin: 80px 0;
  }
  .preloader {
    text-align: center;
  }
</style>