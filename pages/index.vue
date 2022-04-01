<!--BURGER-->
<template>
  <div>
    <div id="header" class="bg-[url('/hero-bg.jpg')] px-20">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="logo.png" class="w-[150px]" alt="" />
        </div>
        <div id="menu-right">
          <ul class="grid grid-cols-4 text-lg font-oswald text-white uppercase pt-5">
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Locations</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-2 pb-20 pt-10">
        <img src="hero-burger.png" class="pr-8 mt-10" alt="" />
        <div>
          <h1 class="text-8xl text-white text-center font-lilita uppercase">
            Classic Burger
          </h1>
          <h2 class="text-6xl text-white text-center font-lilita uppercase mt-5 mb-5">
            With onion
          </h2>
          <p class="text-white font-roboto font-light text-center">
            Our signature burger now comes with onion and cheese. You can customize it to your liking. Freshly made to order, all in a Brioche style bun.
          </p>
        </div>
      </div>
    </div>
    <div id="section-1" class="text-center bg-[url('/about.jpg')] pb-60 bg-cover">
      <h1 class="text-6xl uppercase font-oswald pt-20 text-center">
        The burger tastes better when you eat it with family.
      </h1>
      <p class="font-roboto font-light text-gray-500 text-lg py-6 px-28 text-center">
          Spend quality time with your family and eat an affordable, nutritious and delicious meal together. Not all burgers are fast foods. All our burgers are handmade to order for you and your family members to enjoy.
      </p>
      <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8">
        Explore Full Menu
      </button>
    </div>
  </div>
</template>
