const state = () => ({
    orders:[]
})

const mutations = {
    addItem(state, selectedItem){
        state.orders.push({
            name: selectedItem.name,
            price: selectedItem.price,
            quantity: 1,
        })
    }
}