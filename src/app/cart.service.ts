export class CartService {

  items: any = [];

  constructor() {}

  addToCart(product) {
  console.log('from product = ' + product.name);
    this.items.push(product);
  console.log('from this.items[0] = ' + this.items[0].name);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}