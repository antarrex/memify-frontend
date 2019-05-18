<template>
  <div class="ui card">
    <div class="content">
      <div class="meme-text" :class="{expanded: expanded}">
        {{text}}
      </div>
      <button v-if="longText && !expanded" @click="expanded = !expanded" class="show-more">Читать полностью</button>      
    </div>
    <div class="image">
      <img :src="image">
    </div>
    <div class="content">
      <span class="right floated">
        <i class="heart outline like icon"></i>
        17 likes
      </span>
      <i class="comment icon"></i>
      3 comments
    </div>
    <div class="extra content">
      <div class="ui large transparent left icon input">
        <i class="heart outline icon"></i>
        <input type="text" placeholder="Комментировать...">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['text', 'image'],
    data() {
      return {
        longText: this.text.length >= 150,
        expanded: false
      }
    }
  }
</script>


<style scoped>
  .card {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0 auto 30px auto;
    max-width: 500px;
    width: 100%;
  }
  .card-inner {
    padding: 0 40px;
  }
  .meme-text {
    max-height: 62px;
    overflow: hidden;
  }
  .meme-text.expanded {
    max-height: 100%;
  }
  .show-more {
    color: #0275d8;
    border: 0 none;
    margin: 5px auto;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
</style>
