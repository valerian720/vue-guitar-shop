import { Product } from "./Product";
import { SearchSettings } from "./SearchSettings";

export class ProductList {
  products: Product[];
  search: SearchSettings;

  constructor(products: Product[]) {
    this.products = products;
    this.search = new SearchSettings();
  }

  public getFilteredProductList(): Product[] {
    let result: Product[] = this.products;
    //
    if (this.search.text !== "") {
      result = result.filter((v) => v.name.indexOf(this.search.text) > -1);
    }
    //
    return result;
  }
}
