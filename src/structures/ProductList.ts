import { Product } from "./Product";

export class ProductList {
  products: Product[];
  constructor(products: Product[]) {
    this.products = products;
  }

  public getFilteredProductList(): Product[] {
    return this.products; // TODO: add filtering
  }
}
