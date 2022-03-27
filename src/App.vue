<template>
  <!--header-->
  <router-view name="header"></router-view>

  <!--main-->
  <main class="main">
    <router-view name="main"></router-view>
  </main>

  <!--footer-->
  <router-view name="footer"></router-view>
</template>

<style>
#app {
  font-family: "Helvetica Now Text", sans-serif;
}
</style>
