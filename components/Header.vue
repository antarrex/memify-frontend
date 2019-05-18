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
      <div class="right menu">
        <a class="item" href="https://t.me/memify" target="_blank">
          <i class="icon telegram"></i>
        </a>
        <a class="item" href="https://twitter.com/memifyru" target="_blank">
          <i class="icon twitter"></i>
        </a>
        <a class="item" href="https://vk.com/memify" target="_blank">
          <i class="icon vk"></i>
        </a>
        <span style="padding: 6px" class="item" href="" target="_blank">
          <img style="width: 110px" alt="Доступно в Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/ru_badge_web_generic.png">
        </span>
      </div>
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

