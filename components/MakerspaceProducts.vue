<template>
    <div>
        <div id="droid" class="flex flex-col border border-gray-500 rounded-md p-5">
            <img :src="image" alt="bb8droid" class="">
            <h4 class="text-2xl text-black font-black font-oswald uppercase py-3">{{ name }}</h4>
            <p id="description" class="text-oswald text-xl">
                {{ description }}
            </p>
            <p id="price" class="text-xl font-oswald py-2">
                {{ price }}
            </p>
            <span class="text-blue-500 text-lg text-left py-2"><NuxtLink :to="link"><i>See Product Description</i></NuxtLink></span>
            <button class="text-black font-bold font-oswald text-2xl bg-red-300 rounded px-8 py-3 border" @click="addCart">AddtoCart</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'name', 'description', 'price', 'link'],
};
</script>
