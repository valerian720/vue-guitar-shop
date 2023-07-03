<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Product image--><img
        class="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ product.name }}</h5>
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
          <a class="btn btn-outline-dark mt-auto" href="#"> View options </a>
        </div>
      </div>
    </div>
    {{ product }}
  </div>
  <!--  -->
  <!-- <div class="col mb-5">
    <div class="card h-100">
      <div
        class="badge bg-dark text-white position-absolute"
        style="top: 0.5rem; right: 0.5rem"
      >
        Sale
      </div>
      <img
        class="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">Sale Item</h5>
          <span class="text-muted text-decoration-line-through">$50.00</span
          >$25.00
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
        </div>
      </div>
    </div>
  </div> -->
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
