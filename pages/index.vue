<!--BURGER-->
<template>
  <div>
    <div>
      <div id="header" class="bg-[url('/hero-bg.jpg')] px-20">
        <div>
         <BurgerNavBar />
        </div>
        <div class="flex flex-row justify-center gap-32 pb-20 pt-10">
          <div class="relative">
            <img src="/hero-burger.png" class="pr-8 mt-10 max-w-xl hover:animate-spin" alt="" />
            <img src="/play_with_me.png" class="absolute -top-20 -right-20 h-48 w-48" />
          </div>
          <div id="hero-text" class="max-w-2xl">
            <h1 class="text-8xl text-white text-center min-w-lg font-lilita uppercase">
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
      <div id="section-1" class="text-center bg-[url('/about.jpg')] bg-center pb-60 bg-cover min-w-full min-h-96">
        <h1 class="text-6xl uppercase font-oswald pt-20 text-center px-32">
          The burger tastes better when you eat it with family.
        </h1>
        <p class="font-roboto font-light text-gray-900 text-lg py-6 px-28 text-center">
            Spend quality time with your family and eat an affordable, nutritious and delicious meal together. Not all burgers are fast foods. All our burgers are handmade to order for you and your family members to enjoy.
        </p>
        <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8 animate-pulse">
          <NuxtLink to="/menutest">Explore Full Menu</NuxtLink>
        </button>
      </div>
      <div id="sellingpoints" class="bg-yellow-500 gap-5 grid grid-cols-3 px-20 py-5 text-center">
        <div class="relative">
          <div class="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h5 class="font-oswald font-medium text-2xl uppercase p-5">
            <strong>Original Recipes</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            We use our secret recipes with only the best ingredients to make our burgers. Starting from patties, sauces, and even buns.
          </p>
        </div>
        <div>
          <div class="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          </div>
          <h5 class="font-oswald font-medium text-2xl uppercase p-5">
            <strong>Quality Foods</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            We purchase our ingredients from the best suppliers daily, to ensure the freshest quality of our burgers.
          </p>
        </div>
        <div>
          <div class="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h5 class="font-oswald font-medium text-2xl uppercase p-5">
            <strong>Fastest Delivery</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            Burgers are best served while it's hot. We deliver to your door with our speedy delivery partners from the nearest outlet.
          </p>
        </div>
      </div>
      <div id="featured-burgers" class="text-center bg-gray-100">
        <h2 class="text-6xl font-oswald text-red-500 uppercase font-medium text-center pt-20 pb-3">
          Our Crazy Burgers
        </h2>
        <p class="text-gray-500 font-light my-10 px-20">
          Whether you are looking for the classics, our specialties, or just wraps, salads, and fries, we have it all. We always have something that rewards your tastebud.
        </p>
        <div class="flex flex-row flex-wrap justify-center gap-5 px-40">
          <div class="grid grid-cols-2 gap-5 max-w-3xl">
            <div>
              <Items
                image="/crispy-chicken.jpg"
                title="Crispy Chicken"
                description="Chicken breast, chili sauce, tomatoes, pickles, coleslaw"
                price="11.99"
              />
            </div>
            <div>
              <Items
                image="/ultimate-bacon.jpg"
                title="Ultimate Bacon"
                description="House beef patty, cheddar cheese, smokey bacon, onion, mustard"
                price="14.99"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 max-w-3xl">
            <div>
              <Items
                image="/baa-baa.jpg"
                title="Baa-Baa Black Sheep"
                description="American cheese, tomato relish, avocado, juicy lamb patty"
                price="15.75"
              />
            </div>
            <div>
              <Items
                image="/double-burger.jpg"
                title="Double Burger"
                description="2 x beef patties, cheddar cheese, mustard, pickles, tomatoes"
                price="15.35"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="promotions-1" class="grid grid-cols-12 h-48 max-h-72 gap-x-3 my-10 animate-bounce sticky bottom-0 bg-gray-100">
        <div class="bg-[url('/fries-bg-1.jpg')] bg-cover bg-left col-span-5 grid grid-cols-2 relative">
          <p class="invisible"> text </p>
          <div class="absolute bottom-2 right-2">
            <h4 class="pt-10 pr-16 text-2xl text-yellow-700 text-center uppercase">
              <strong>Get Your Free<br>Cheese Fries</strong>
            </h4>
            <button class="bg-red-500 py-3 px-8 text-white tracking-tight uppercase m-5 animate-pulse">
              Claim Now
            </button>
          </div>
        </div>
        <div class="bg-[url('/burger-bg-1.jpg')] bg-cover bg-left col-span-7 relative">
          <h4 class="text-right pt-10 pr-8 text-2xl text-yellow-700 uppercase">
            <strong>Crispy Chicken<br>Burger is Back!</strong>
          </h4>
          <button class="text-right bg-red-500 py-3 px-8 text-white tracking-tight uppercase m-5 absolute bottom-2 right-2 animate-pulse">
            Claim Now
          </button>
        </div>
      </div>
      <div id="promotions-2" class="grid grid-cols-3 gap-x-3 px-20">
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <NuxtLink to=""><img src="/offer-1.jpg" alt="" /></NuxtLink>
        </div>
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <NuxtLink to=""><img src="/offer-2.jpg" alt="" /></NuxtLink>
        </div>
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <NuxtLink to=""><img src="/offer-3.jpg" alt="" /></NuxtLink>
        </div>
      </div>
      <div id="bringing-people-together" class="flex flex-col bg-gray-100 p-20 overflow-y-scroll justify-center">
        <div class="grid grid-cols-2 gap-x-16 pb-5 px-32">
          <img src="/about.png" alt="" class="h-[500px] object-cover max-h-96 mx-auto" />
          <h3 class="text-5xl text-gray-900 font-oswald uppercase pt-10 leading-snug max-w-xl">
              Nothing Brings People Together Like a Good Burger
          </h3>
        </div>
        <div class="w-4/5 mx-auto text-left pt-5 px-20">
          <p class="text-lg text-gray-500 pb-5">
            That's the philosophy that we always believe in. We're a family-owned and operated business, and we're proud to be part of the community. We do our best to make sure that everyone's happy and having a good time.
          </p>
          <p class="text-lg text-gray-500 pt-5 pb-10">
            Burgers are what brought us together and what keeps us together. It's something that you can't put a price tag on. Most importantly, we are interested in people. It's not just about the food.
          </p>
        </div>
      </div>
      <div id="download-app" class="grid grid-cols-5 bg-yellow-400 bg-cover">
        <div class="col-span-3 text-amber-900 px-16 flex-auto flex-shrink-0">
          <h4 class="uppercase font-oswald text-5xl pl-20 pt-20">
            Download mobile app
          </h4>
          <h3 class="uppercase font-oswald text-6xl pl-20">
            Save up to 20%
          </h3>
          <p class="text-lg leading-relaxed tracking-tight my-7 pl-20">
            Bye bye long queues. Order before and your food will be ready in a flash. Enjoy the convenience of ordering food online at any time and from any location.
          </p>
          <div class="flex flex-row space-x-3 px-20 pb-20">
            <button class="h-[45px] max-h-10"><img src="/appstore.png"></button>
            <button class="h-[45px] max-h-10"><img src="/googleplay.png"></button>
          </div>
        </div>
        <img src="/eshop.png" alt="" class="col-span-2 -m-12 h-[500px] object-cover max-w-lg">
      </div>
      <div id="logos" class="flex flex-row justify-center py-10 bg-gray-200 bg-repeat">
        <div class="h-28 w-28 p-2">
          <img src="/brand-1.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="/brand-2.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="/brand-3.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="/brand-4.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="/brand-5.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="/brand-6.png" alt="" />
        </div>
      </div>
      <!--
      <div class="bg-[url('/i-like-food.svg')]">
        <p class="text-transparent p-20"> burger </p>
      </div>
      -->
      <div id="menu-feature" class="pb-5 bg-gray-100">
        <h3 class="uppercase text-5xl font-oswald font-semibold text-red-500 text-center pt-20 pb-2">
          <NuxtLink to="/menutest">Wide Selections</NuxtLink>
        </h3>
        <p class="text-gray-000 text-opacity-80 font-light text-center text-lg tracking-snug pt-3 pb-2">
          Besides burgers, we also have a large range of item sincluding sandwiches, wraps, panini, soups, salads and more.
        </p>
        <div class="flex flex-row flex-wrap gap-5 mx-32 my-16 justify-center">
          <div class="grid grid-cols-2 gap-5 max-w-2xl">
            <NuxtLink to=""><img src="/img-01.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
            <NuxtLink to=""><img src="/img-02.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-5 max-w-2xl">
            <NuxtLink to=""><img src="/img-03.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
            <NuxtLink to=""><img src="/img-04.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-5 max-w-2xl">
           <NuxtLink to=""><img src="/img-05.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
           <NuxtLink to=""><img src="/img-06.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-5 max-w-2xl">
            <NuxtLink to=""><img src="/img-07.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
            <NuxtLink to=""><img src="/img-08.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20" /></NuxtLink>
          </div>
        </div>
      </div>
      <div id="30-min-delivery" class="bg-[url('/banner.jpg')] bg-cover h-250 text-gray-700 text-center px-300">
        <h5 class="text-2xl tracking-tight text-bold uppercase pt-10">
          We Guarantee
        </h5>
        <h3 class="text-4xl tracking-tight text-bold uppercase p-3">
          30 Minutes Delivery
        </h3>
        <p class="text-sm text-light text-gray-600 px-36">
          Free delivery for all orders above RM30. We are committed to deliver the freshest and warmest food to all our customers. If your order is not delivered within 30 minutes, your next meal is on us!
        </p>
        <button class="bg-red-500 text-white px-8 py-2 mt-3 mb-12 animate-pulse">
          Call: 03-2282 6400
        </button>
      </div>
    </div>
    <div>
      <BurgerBottom />
    </div>
  </div>
</template>
