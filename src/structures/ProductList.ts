import { Product } from "./Product";

export class ProductList {
  products: Product[];
  constructor(products: Product[]) {
    this.products = products;
  }
}
