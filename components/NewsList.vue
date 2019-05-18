<template>
  <div class="ui container">
    <div class="ui card">
      <ul>
        <li v-for="item in news" :key="item.id">{{item.header}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news']
}
</script>


<style scoped>
 .container {
    margin: 80px 0;
  }
  .card {
    padding: 15px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  ul li {
    margin-bottom: 5px;
  }
</style>
