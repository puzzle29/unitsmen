<template>
  <nav class="nav nav-pills nav-fill px-5 mt-3 desk-nav">
    <button type="button" class="menu-button nav-link">
      <div id="hamburger">
        <span></span>
        <span></span>
      </div>
      <span class="ps-2">Menu</span>
    </button>
    <button type="button" class="third-button nav-link">UNITSMEN</button>
  </nav>

  <nav class="nav nav-pills nav-fill px-5 mt-3 mobile-nav">
    <div class="nav-link">
      <span class="title"> Unitsmen </span>
    </div>
    <button type="button" class="menu-button nav-link">
      <div id="hamburger">
        <span></span>
        <span></span>
      </div>
      <span class="ps-2">Menu</span>
    </button>
  </nav>

  <nav
    class="px-5"
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
  >
    <ol class="breadcrumb px-3">
      <li class="breadcrumb-item"><a href="#">Accueil</a></li>
      <li class="breadcrumb-item"><a href="#">Profils</a></li>
      <li class="breadcrumb-item active" aria-current="page">Évènement</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: bold;
}

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
}

.third-button {
  display: flex;
  align-items: flex-end;
  align-self: flex-end;

  flex-direction: column-reverse;
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

.mobile-nav {
  display: none;
}

.mobile-nav .nav-link {
  text-align: left;
}

.breadcrumb a {
  color: white;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: white;
  font-weight: bold;
}

@media (min-width: 1800px) {
  .second-button {
    flex: 0 1 32rem;
  }
}

@media (max-width: 767.98px) {
  .mobile-nav {
    display: block;
  }
  .desk-nav {
    display: none;
  }

  .mobile-nav .nav-link {
    text-align: left;
  }
}

/* @media (min-width: 768px) {
  .desk-nav {
    display: block;
  }
} */
</style>
