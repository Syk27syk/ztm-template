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
                <thead>
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
                            <td class="text-right">RM {{ order.price }}</td>
                            <td class="text-center">{{ order.quantity }}</td>
                            <td class="text-right">RM {{ order.price * order.quantity }}</td>
                            <td class="text-center"><button>✖️</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
