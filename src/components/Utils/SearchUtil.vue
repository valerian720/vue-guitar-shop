<template>
  <div class="m-2 p-2">
    <div class="mb-1" v-if="search">
      <label for="" class="form-label">Поиск</label>
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
        v-model="search.text"
      />
      {{ search }}
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SearchSettings } from "../../structures/SearchSettings";

@Options({
  props: {
    search: SearchSettings,
  },
})
export default class ProductCard extends Vue {
  search!: SearchSettings;
}
</script>
<style lang=""></style>
