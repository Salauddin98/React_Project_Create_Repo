export const addToCart = (id) => {
  let shoppingCart = {};
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    // console.log(storedCard);
    shoppingCart = JSON.parse(storedCard);
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//MOdule First Process
// export const addToCart = (id) => {
//   const items = localStorage.getItem(id);
//   if (items) {
//     console.log("Item already exits");
//     const newQuantity = parseInt(items) + 1;
//     localStorage.setItem(id, newQuantity);
//   } else {
//     localStorage.setItem(id, 1);
//   }
// };
