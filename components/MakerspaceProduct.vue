<template>
    <div>
        <div id="" class="flex flex-col border border-gray-500 rounded-md p-5 bg-white hover:ring-8 hover:ring-yellow-200 relative">
            <img :src="image" alt="" class="w-full hover:scale-150 hover:bg-white hover:border-2 z-50">
            <h4 class="text-2xl text-black font-black font-oswald uppercase text-center py-3 h-20">{{ name }}</h4>
            <p id="description" class="text-oswald text-xl h-48">
                {{ description }}
            </p>
            <span class="text-blue-500 text-lg text-left py-2"><NuxtLink :to="link"><i>See Product Description</i></NuxtLink></span>
            <span id="price" class="text-2xl font-oswald py-2">RM {{ price }}</span>
            <button
                class="text-white font-bold font-lilita text-2xl bg-red-500 rounded px-8 py-3 border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                @click="addCart">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'name', 'description', 'price', 'link'],
};
</script>
