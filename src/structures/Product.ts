export class Product {
  imageSrc = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  name = "Product";
  price: [number, number] = [0, 0];
  saleMultiplyer = 1; // in range (0, 1]
  currency = "RUB"; // ["USD", "EUR", "RUB"]

  constructor(
    imageSrc: string,
    name: string,
    price: [number, number],
    saleMultiplyer = 1,
    currency = "RUB"
  ) {
    this.imageSrc = imageSrc;
    this.name = name;
    this.price = price;
    this.saleMultiplyer = saleMultiplyer;
    this.currency = currency;
  }

  // ----------------------------------------------------------------

  public getPrice(): [string, string] {
    let ret: [string, string];
    //
    switch (this.currency) {
      case "USD":
        ret = this.getSalesPrice("$ ", "");
        break;
      case "EUR":
        ret = this.getSalesPrice("", " €");
        break;
      case "RUB":
        ret = this.getSalesPrice("", " ₽");
        break;

      default:
        ret = this.getSalesPrice("", "");

        break;
    }
    return ret;
  }

  private getSalesPrice(prefix: string, postfix: string): [string, string] {
    let from: number, to: number;
    //
    [from, to] = this.price;
    const noSalePrice = this.getRangePrice(from, to, prefix, postfix);

    from *= this.saleMultiplyer;
    to *= this.saleMultiplyer;

    const salePrice = this.getRangePrice(from, to, prefix, postfix);

    // TODO
    return [noSalePrice, salePrice];
  }
  private getRangePrice(
    from: number,
    to: number,
    prefix: string,
    postfix: string
  ): string {
    let ret: string;
    //
    if (from === to) {
      ret = `${prefix} ${from.toFixed(2)}${postfix}`;
    } else {
      ret = `${prefix}${from.toFixed(2)}${postfix} - ${prefix}${to.toFixed(
        2
      )}${postfix}`;
    }
    return ret;
  }
}
