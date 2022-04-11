const state = () => ({
  purchase: [
  ]
})

const mutations = {
  addCart(state, selectedProduct) {
    const index = state.purchase.findIndex((product) => {
      return product.name === selectedProduct.name;
    });
    if (index === -1) {
      state.purchase.push({
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
      });
    } else {
      state.products[index].quantity++;
    }
  },
};

export default {
  state,
  mutations,
};
