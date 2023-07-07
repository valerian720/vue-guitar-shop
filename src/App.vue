<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">Guitar shop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home">
              Личный кабинет
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О нас</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Магазин
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/">
                  Все товары
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <router-link class="dropdown-item" to="/popular">
                  Популярные товары
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/new">
                  Новые товары
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Корзина
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
  <!-- Footer-->
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center m-0 py-3 border-top bg-dark"
  >
    <div class="col-md-4 d-flex align-items-center m-2">
      <span class="text-white">© 2023 Guitar shop inc.</span>
    </div>
    <VersionDisplay class="text-white" />
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VersionDisplay from "@/components/VersionDisplay.vue";

@Options({
  components: {
    VersionDisplay,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
