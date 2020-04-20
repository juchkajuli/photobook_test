<template>
<div class="header__cont">
  <div class="header">
    <img src="./img/cat.svg" alt="Логотип" class="logo">
    <span class="name-logo">Photobook</span>
    <input class="search" type="text" autocapitalize="none" placeholder="Поиск" value>
    <nav class="menu-list">
      <router-link to="/" class="menu-icon"><img src="./img/home.svg" alt="home" class="img-menu-head"></router-link>
      <router-link to="/message" class="menu-icon"><img src="./img/message.svg" alt="message" class="img-menu-head"></router-link>
      <router-link to="/explore" class="menu-icon"><img src="./img/heart.svg" alt="interes" class="img-menu-head"></router-link>
      <router-link to="/account" class="menu-icon">
      <img src="./img/avatar1.svg" alt="avatar" class="img-menu-head"></router-link>
      <router-link to="/input" class="menu-icon"><img src="./img/close-button.svg" class="img-menu-head"></router-link>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>
