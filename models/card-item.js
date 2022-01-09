class CartItem {
  constructor(quantity, productPrice, proDes, product_img, productTitle, sum) {
    (this.quantity = quantity),
      (this.productPrice = productPrice),
      (this.proDes = proDes),
      (this.productTitle = productTitle),
      (this.product_img = product_img),
      (this.sum = sum);
  }
}

export default CartItem;
