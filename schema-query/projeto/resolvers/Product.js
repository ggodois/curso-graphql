module.exports = {
  priceWithDiscount (product) {
    if (product.discount) {
      const priceWithDiscount =
        product.price - product.price * (product.discount / 100)
      return priceWithDiscount
    }

    return product.price
  }
}
