<template>
    <div>
        <div id="header" class="relative bg-left bg-[url('/menu-light.png')]">
            <BurgerNavBar />
            <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-black dark:text-white">
                Our Menu
            </h1>
        </div>
        <div>
           <table class="table-auto w-2/3 mt-20 mx-auto">
                <thead class="text-3xl font-oswald text-black uppercase">
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="order in $store.state.orders"
                        :key="order.name"
                        class="font-oswald uppercase text-2xl border-b"
                    >
                            <td class="py-10">{{ order.name }}</td>
                            <td class="text-right">RM {{ order.price.toFixed(2) }}</td>
                            <td class="text-center">{{ order.quantity }}</td>
                            <td class="text-right">RM {{ (order.price*order.quantity).toFixed(2) }}</td>
                            <td class="text-center"><button @click="removeItem">✖️</button></td>
                    </tr>
                    <tr>
                        <td class="text-left text-3xl text-black font-black text-oswald uppercase">Grand Total</td>
                        <td class="invisible">price</td>
                        <td class="text-right text-3xl text-black font-black text-oswald uppercase">quantity</td>
                        <td class="text-right text-3xl text-black font-black text-oswald uppercase">sum</td>
                        <td class="invisible">remove</td>
                    </tr>
                </tbody>
            </table>
            <button class="bg-red-500 text-white text-oswald text-2xl text-center px-8 py-3 rounded my-12 grid grid-cols-1 item-center">
                <NuxtLink to="/burger/checkout">Proceed to Checkout</NuxtLink>
            </button>
            <div>
                <input> </input>
                <input> </input>
                <button @click="sum">Sum</button>
            </div>
        </div>
    </div>
</template>

<!--remove button
<script>
quantity = $store.state.order.quantity
export default {
    constant removeItems = function (quantity) {
        newQuantity = quantity - 1;
        return newQuantity;
    },
};
</script>
-->
<!--grandTotal
<script>
const sumTotal = function () {
}
</script>
-->
