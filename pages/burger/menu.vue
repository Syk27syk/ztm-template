<template>
 <div>
  <div id="header" class="relative bg-left bg-[url('/menu-light.png')] dark:bg-[url('/menu-page.jpg')]">
   <div id="menu" class="grid grid-cols-4 px-20 py-5">
    <div id="menu-left">
     <img src="/logo.png" class="w-[150px]" alt="" />
    </div>
    <div id="menu-right" class="col-start-2 col-end-4 justify-end">
     <ul class="flex flex-row flex-wrap space-x-10 text-lg font-oswald text-white uppercase pt-5 flex-auto min-w-lg">
      <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
       <a href="">About Us</a>
      </li>
      <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
       <a href="">Our Menu</a>
      </li>
      <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
       <a href="">Locations</a>
      </li>
      <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
       <a href="">Contacts</a>
      </li>
     </ul>
    </div>
   </div>
   <div>
    <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-black dark:text-white">
     Our Menu
    </h1>
    <!--
    <div class="z-10 absolute -bottom-48 -right-48">
     <img src="garlic_round.png" class="w-4xl" alt="" />
    </div>
    <div class="relative items-center justify-center h-screen">
    <video autoplay loop class="absolute flex min-w-screen min-h-screen z-0"><source src="menucutlerydarkbg.mp4" type="video/mp4"></video>
    </video>
    -->
  </div>
  </div>
  <div id="items" class="grid grid-cols-3 pt-10 px-20 gap-5 bg-gray-100 dark:bg-black">
   <MenuItem
   v-for="b in items"
   :key="b.name"
   :item="b" />
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then(
      (response) => {
        this.items = response.data.burgers;
      });
  },
};
</script>
