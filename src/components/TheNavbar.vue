<template>
  <nav class="nav nav-pills nav-fill px-5 fixed-top">
    <button type="button" class="menu-button nav-link">
      <div id="hamburger">
        <span></span>
        <span></span>
      </div>
      <span class="ps-2">Menu</span>
    </button>
    <button type="button" class="second-button nav-link">
      Much longer nav link
    </button>
    <div class="nav-link">
      <a href="#">
        <img src="../assets/img/planete-terre-white.png" alt="" width="50" />
      </a>
    </div>
    <button type="button" class="third-button nav-link">
      Third link
    </button>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
.nav-link {
  color: white;
}

#hamburger span {
  width: 18px;
  display: block;
  height: 0px;
  margin-bottom: 5px;
  border-width: 1px;
  border-style: solid;
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
}

.menu-button {
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  /* padding: 0px; */
  cursor: pointer;
  position: relative;
  outline: none;

  flex: 0 1 auto;
}

.second-button {

  display: flex;
  align-items: flex-end;
  align-self: flex-end;

  flex: 0 1 32rem;
}

.third-button {

  display: flex;
  align-items: flex-end;
  align-self: flex-end;

  flex-direction: column-reverse
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0px;
}
</style>
