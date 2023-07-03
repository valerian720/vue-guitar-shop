<template>
  <div class="home">
    <CardList msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardList from "@/components/CardList.vue"; // @ is an alias to /src

@Options({
  components: {
    CardList,
  },
})
export default class HomeView extends Vue {}
</script>
