const state = () => ({
  orders: [
    { name: 'Crispy Chicken', price: 11.99, quantity: 1 },
    { name: 'Ultimate Bacon', price: 14.99, quantity: 2 },
    { name: 'Baa-Baa Black Sheep', price: 15.75, quantity: 3 },
    { name: 'Double Burger', price: 15.35, quantity: 4 },
    { name: 'Messy Beauty', price: 23, quantity: 3 },
    { name: 'Rosy Business', price: 21, quantity: 2 },
    { name: 'Old Fashion', price: 18, quantity: 1 },
  ]
})

const mutations = {
  addItem(state, selectedItem) {
    const index = state.orders.findIndex((item) => {
      return item.name === selectedItem.name;
    });

    if (index === -1) {
      state.orders.push({
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    } else {
      state.orders[index].quantity++;
    }
  },
};

export default {
  state,
  mutations,
};
