<template>
 <div>
  <div id="header" class="bg-[url('/menu-page.jpg')] bg-center relative">
   <div id="menu" class="grid grid-cols-4 px-20 py-5">
    <div id="menu-left">
     <img src="logo.png" class="w-[150px]" alt="" />
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
    <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20">
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
  <div id="items" class="grid grid-cols-3 px-32 gap-5 m-5">
   <MenuItem />
   <MenuItem />
   <MenuItem />
  </div>
 </div>
</template>
