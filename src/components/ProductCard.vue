<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Bage -->
      <div
        v-if="product.saleMultiplyer < 1"
        class="badge bg-dark text-white position-absolute"
        style="top: 0.5rem; right: 0.5rem"
      >
        Sale
      </div>
      <!-- Product image-->
      <img
        class="card-img-top"
        :src="product.imageSrc"
        :alt="product.name + ' image'"
      />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">
            {{ product.name }}
            <span v-if="product.saleMultiplyer < 1"
              >(-{{ ((1 - product.saleMultiplyer) * 100).toFixed(0) }}%)</span
            >
          </h5>
          <span
            class="text-muted text-decoration-line-through"
            v-if="product.saleMultiplyer < 1"
            >{{ product.getPrice()[0] }}</span
          ><br />
          {{ product.getPrice()[1] }}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="#">
            {{
              product.price[0] === product.price[1] ? "В корзину" : "Подробнее"
            }}
          </a>
        </div>
      </div>
    </div>
    <!-- {{ product }} -->
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Product } from "@/structures/Product";

@Options({
  props: {
    product: Product,
  },
})
export default class ProductCard extends Vue {
  product!: Product;
}
</script>
<style lang=""></style>
