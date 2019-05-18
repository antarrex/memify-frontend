<template>
  <div class="ui menu fixed">
    <div class="ui container">
      <div class="header item">
        Memify
      </div>
      <nuxt-link to="/">
        <a class="item">
          Мемы
        </a>
      </nuxt-link>
      <nuxt-link to="/news">
        <a class="item">
          Новостянка
        </a>
      </nuxt-link>
      <nuxt-link to="/texts">
        <a class="item">
          Буквы
        </a>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .menu {
    background: #929FBA;
  }
  .menu .item {
    color: #fff;
    font-weight: 300;
    font-size: 16px;
  }
</style>

