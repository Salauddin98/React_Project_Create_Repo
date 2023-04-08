import { getShoppingCart } from "../../utilities/fakedb";

const cartsProductsLoader = async () => {
  const loaderProducts = await fetch("products.json");
  const products = await loaderProducts.json();

  const storeCart = getShoppingCart();
  const saveCart = [];
  for (const id in storeCart) {
    const addedProducts = products.find((product) => product.id === id);
    if (addedProducts) {
      const quantity = storeCart[id];
      addedProducts.quantity = quantity;
      saveCart.push(addedProducts);
    }
  }
  //if you send to two things
  //return [products,saveCart]
  //return {products,saveCarts}
  return saveCart;
};

export default cartsProductsLoader;
