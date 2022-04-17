<template>
    <div class="relative">
        <div class="absolute top-0 right-0">
            <MakerspaceQuickLinks />
        </div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="px-32 py-36 bg-[url('/makerspacejb/robot-shopping.jpg')] bg-center bg-cover h-full">
                <h1 class="text-white text-8xl font-oswald uppercase text-center">
                    cart
                </h1>
            </div>
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
                        v-for="product in $store.state.products"
                        :key="product.name"
                        class="font-oswald uppercase text-2xl border-b"
                    >
                            <td class="py-10">{{ product.name }}</td>
                            <td class="text-right">RM {{ product.price }}</td>
                            <td class="text-center">{{ product.quantity }}</td>
                            <td class="text-right">RM {{ (product.price*product.quantity) }}</td>
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
            <button class="bg-red-500 text-white text-oswald text-2xl text-center px-8 py-3 rounded my-12 grid grid-cols-1 ml-48 item-center">
                <NuxtLink to="/makerspacejb/checkout">Proceed to Checkout</NuxtLink>
            </button>
        </div>
    </div>
</template>
