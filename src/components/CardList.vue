<template>
  <div>
    <!-- Header-->
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">Guitar shop</h1>
          <p class="lead fw-normal text-white-50 mb-0">
            самые бюджетные гитары на рынке
          </p>
        </div>
      </div>
    </header>
    <!--  -->
    <search-util :search="products.search" />
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          v-if="products"
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <product-card
            :product="product"
            v-for="(product, index) in products?.getFilteredProductList()"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

import ProductCard from "@/components/ProductCard.vue";
import SearchUtil from "@/components/Utils/SearchUtil.vue";

import { Product } from "@/structures/Product";
import { ProductList } from "@/structures/ProductList";
import { SearchSettings } from "@/structures/SearchSettings";

@Options({
  components: {
    ProductCard,
    SearchUtil,
  },
})
export default class CardList extends Vue {
  products: ProductList = new ProductList([]);

  //
  // product = new Product(
  //   "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  //   "Гитара 1",
  //   [12000, 18000],
  //   0.8
  // );
  mounted() {
    this.fillDummyGuitarProductList();
  }
  //
  dummyCount = 4 * 12;
  fillDummyGuitarProductList() {
    let arr: Product[] = [];
    for (let i = 0; i < this.dummyCount; i++) {
      arr.push(this.createDummyGuitar());
    }
    this.products = new ProductList(arr);
    console.log(this.products);
  }
  createDummyGuitar(): Product {
    let value = this.toFixed(Math.random() * 20000);
    return new Product(
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      `Гитара №${~~(Math.random() * 100)}`,
      [
        value,
        Math.random() > 0.5
          ? this.toFixed(value + Math.random() * 5000)
          : value,
      ],
      Math.random() > 0.5 ? this.toFixed(Math.random()) : 1
    );
  }
  toFixed = (num: number) => Number(num.toFixed(2));
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
