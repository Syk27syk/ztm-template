<!--BURGER-->
<template>
  <div>
    <div>
      <div id="header" class="bg-[url('/hero-bg.jpg')] px-20">
        <div id="menu" class="grid grid-cols-2 py-5">
          <div id="menu-left">
            <img src="logo.png" class="w-[150px]" alt="" />
          </div>
          <div id="menu-right">
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
        <div class="flex flex-row pb-20 pt-10">
          <img src="hero-burger.png" class="pr-8 mt-10 max-h-96 min-w-lg md:animate-spin lg:animate-none" alt="" />
          <div>
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
        <h1 class="text-6xl uppercase font-oswald pt-20 text-center">
          The burger tastes better when you eat it with family.
        </h1>
        <p class="font-roboto font-light text-gray-500 text-lg py-6 px-28 text-center">
            Spend quality time with your family and eat an affordable, nutritious and delicious meal together. Not all burgers are fast foods. All our burgers are handmade to order for you and your family members to enjoy.
        </p>
        <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8 animate-pulse">
          <a href="">Explore Full Menu</a>
        </button>
      </div>
      <div id="sellingpoints" class="bg-yellow-500 grid grid-cols-3 mx-50 text-center place-items-center">
        <div class="relative">
          <div class="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 justify-self-center"
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
          <h5 class="uppercase p-5">
            <strong>Original Recipes</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            We use our secret recipes with only the best ingredients to make our burgers. Starting from patties, sauces, and even buns.
          </p>
        </div>
        <div class="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 justify-self-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          <h5 class="uppercase p-5">
            <strong>Quality Foods</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            We purchase our ingredients from the best suppliers daily, to ensure the freshest quality of our burgers.
          </p>
        </div>
        <div class="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 justify-self-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h5 class="uppercase p-5">
            <strong>Fastest Delivery</strong>
          </h5>
          <p class="text-black-400 text-opacity-80 font-light pb-10">
            Burgers are best served while it's hot. We deliver to your door with our speedy delivery partners from the nearest outlet.
          </p>
        </div>
      </div>
      <div id="featuredburgers" class="text-center bg-gray-100">
        <h2 class="text-6xl font-oswald text-red-500 uppercase font-medium text-center pt-20 pb-3">
          Our Crazy Burgers
        </h2>
        <p class="text-gray-500 font-light my-10 px-20 px-20">
          Whether you are looking for the classics, our specialties, or just wraps, salads, and fries, we have it all. We always have something that rewards your tastebud.
        </p>
        <div class="flex flex-row flex-wrap gap-5 px-40">
          <div class="grid grid-cols-2 gap-5">
            <div class="border rounded-md border-gray-200 text-left pb-5 relative hover:border-8 hover:border-gray-200 hover:border-opacity-20">
              <img src="crispy-chicken.jpg" alt="">
            <h4 class="text-lg px-2 pt-2 uppercase text-gray-500">
              <a href=""><strong>Crispy Chicken</strong></a>
            </h4>
            <p class="text-gray-800 text-opacity-80 font-light text-sm p-2 pb-20">
              Chicken breast, chilli sauce, tomatoes, pickles, coleslaw
            </p>
            <button class="bg-red-900 text-yellow-500 font-semibold px-3 py-2 rounded-md m-3 absolute bottom-0 left-0" position:absolute>
              RM 11.99
            </button>
            </div>
            <div class="border rounded-md border-gray-200 text-left pb-5 relative hover:border-8 hover:border-gray-200 hover:border-opacity-20">
              <img src="ultimate-bacon.jpg" alt="">
              <h4 class="text-lg px-2 pt-2 uppercase text-gray-500">
                <a href=""><strong>Ultimate Bacon</strong></a>
              </h4>
              <p class="text-gray-800 text-opacity-80 font-light text-sm p-2 pb-20">
                House beef patty, cheddar cheese, bacon, onion, mustard
              </p>
              <button class="bg-red-900 text-yellow-500 font-semibold px-3 py-2 rounded-md m-3 object-left-bottom absolute bottom-0 left-0" position:absolute>
                RM 14.99
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="border rounded-md border-gray-200 text-left pb-5 relative hover:border-8 hover:border-gray-200 hover:border-opacity-20">
              <img src="baa-baa.jpg" alt="">
              <h4 class="text-lg px-2 pt-2 uppercase text-gray-500">
                <a href=""><strong>Baa-Baa Black Sheep</strong></a>
              </h4>
              <p class="text-gray-800 text-opacity-80 font-light text-sm p-2 pb-20">
                American cheese, tomato relish, avocado, lettuce, red onion
              </p>
              <button class="bg-red-900 text-yellow-500 font-semibold px-3 py-2 rounded-md m-3 object-left-bottom absolute bottom-0 left-0">
                RM 15.75
              </button>
            </div>
            <div class="border rounded-md border-gray-200 text-left pb-5 relative hover:border-8 hover:border-gray-200 hover:border-opacity-20">
              <img src="double-burger.jpg" alt="">
              <h4 class="text-lg px-2 pt-2 uppercase text-gray-500">
                <a href=""><strong>Double Burger</strong></a>
              </h4>
              <p class="text-gray-800 text-opacity-80 font-light text-sm p-2 pb-20">
                2 beef patties, cheddar cheese, mustard, pickles, tomatoes
              </p>
              <button class="bg-red-900 text-yellow-500 font-semibold px-3 py-2 rounded-md m-3 object-left-bottom absolute bottom-0 left-0">
                RM 15.35
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="promotions-1" class="grid grid-cols-5 h-48 max-h-72 gap-x-3 my-10 animate-bounce sticky bottom-0 bg-gray-100">
        <div class="bg-[url('/fries-bg-1.jpg')] bg-cover bg-left col-span-2 grid grid-cols-2 relative">
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
        <div class="bg-[url('/burger-bg-1.jpg')] bg-cover bg-left col-span-3 relative">
          <h4 class="text-right pt-10 pr-8 text-2xl text-yellow-700 uppercase">
            <strong>Crispy Chicken<br>Burger is Back!</strong>
          </h4>
          <button class="text-right bg-red-500 py-3 px-8 text-white tracking-tight uppercase m-5 absolute bottom-2 right-2 animate-pulse">
            Claim Now
          </button>
        </div>
      </div>
      <div id="promotions-2" class="grid grid-cols-3 gap-x-3">
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <a href=""><img src="offer-1.jpg" alt="" /></a>
        </div>
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <a href=""><img src="offer-2.jpg" alt="" /></a>
        </div>
        <div class="hover:border-8 hover:border-gray-200 hover:border-opacity-20">
          <a href=""><img src="offer-3.jpg" alt="" /></a>
        </div>
      </div>
      <div id="bringingpeopletogether" class="flex flex-row gap-x-20 p-20 overflow-y-scroll">
        <img src="about.png" alt="" class="bg-cover max-h-96"/>
        <div class="m-2">
          <h3 class="text-3xl text-gray-900 text-semibold uppercase pt-5 pb-10">
             Nothing Brings People Together Like a Good Burger
          </h3>
          <p class="text-sm text-light text-gray-700 pb-5">
            That's the philosophy that we always believe in. We're a family-owned and operated business, and we're proud to be part of the community. We do our best to make sure that everyone's happy and having a good time.
          </p>
          <p class="text-sm text-light text-gray-700 pt-5 pb-10">
            Burgers are what brought us together and what keeps us together. It's something that you can't put a price tag on. Most importantly, we are interested in people. It's not just about the food.
          </p>
        </div>
      </div>
      <div id="downloadapp" class="grid grid-cols-2 bg-yellow-400 bg-cover m-30 relative">
        <div class="text-red-900">
          <h4 class="uppercase text-2xl text-bold tracking-tight pl-20 pt-20">
            Download mobile app and
          </h4>
          <h3 class="uppercase text-4xl text-bold tracking-tight pl-20">
            Save up to 20%
          </h3>
          <p class="text-sm text-light leading-relaxed tracking-tight py-5 pl-20">
            Bye bye long queues. Order before and your food will be ready in a flash. Enjoy the convenience of ordering food online at any time and from any location.
          </p>
          <div class="flex flex-row space-x-3 pb-36">
            <button class="bg-[url('/appstore.png')] bg-cover h-9 ml-20 text-transparent"> Apple App Store </button>
            <button class="bg-[url('/googleplay.png')] bg-cover h-9 text-transparent"> Google Play </button>
          </div>
        </div>
        <img src="eshop.png" alt="" class="absolute -top-8 right-6 max-w-lg">
      </div>
      <div id="logos" class="flex flex-row justify-center py-10 bg-gray-200 bg-repeat">
        <div class="h-28 w-28 p-2">
          <img src="brand-1.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="brand-2.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="brand-3.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="brand-4.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="brand-5.png" alt="" />
        </div>
        <div class="h-28 w-28 p-2">
          <img src="brand-6.png" alt="" />
        </div>
      </div>
<!--
      <div class="bg-[url('/i-like-food.svg')]">
        <p class="text-transparent p-20"> burger </p>
      </div>
-->
      <div id="menufeature" class="pb-5 bg-gray-100">
        <h3 class="uppercase text-5xl font-roboto text-red-500 font-medium text-center tracking-tighter pt-20">
          <a href="">Wide Selections</a>
        </h3>
        <p class="text-gray-800 text-opacity-80 font-light text-center text-sm tracking-snug pt-3 pb-2">
          Besides burgers, we also have a large range of item sincluding sandwiches, wraps, panini, soups, salads and more.
        </p>
        <div class="grid grid-cols-4 gap-2 m-5">
          <a href=""><img src="img-01.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-02.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-03.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-04.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-05.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-06.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-07.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
          <a href=""><img src="img-08.jpg" alt="" class="hover:border-8 hover:border-gray-200 hover:border-opacity-20"/></a>
        </div>
      </div>
      <div id="30mindelivery" class="bg-[url('/banner.jpg')] bg-cover h-250 text-gray-700 text-center px-300">
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
      <div id="information" class="grid grid-cols-4 gap-x-14 text-center text-gray-900 mx-28 py-5 bg-gray-100 bg-cover">
        <div>
          <h5 class="text-bold uppercase p-2">
            <strong>Location</strong>
          </h5>
          <p class="text-gray-800 text-light text-sm">
            No. 1, Persiaran Bandar Utama,<br>47800 Petaling Jaya,<br>Selangor, Malaysia.
          </p>
        </div>
        <div>
          <h5 class="text-bold uppercase p-2">
            <strong>Opening Hours</strong>
          </h5>
          <ul class="text-gray-800 text-light text-sm">
            <li> Mon-Fri: 9:00AM - 10:00PM </li>
            <li> Saturday: 10:00AM - 8:30PM </li>
            <li> Sunday: 12:00PM - 5:00PM </li>
          </ul>
        </div>
        <div>
          <h5 class="text-semibold uppercase p-2">
            <strong>Order Now</strong>
          </h5>
          <p class="text-gray-800 text-light text-sm">
            Call our hotline at<br>03-2282 6400
          </p>
        </div>
        <div>
          <h5 class="text-semibold uppercase p-2">
            <strong>Follow Us</strong>
          </h5>
          <p class="text-gray-800 text-light text-sm">
            For the latest updates!
          </p>
          <div class="grid grid-cols-3 justify-items-center p-3">
            <a href=""><img src="facebook.png" alt="" class="h-5 w-5"/></a>
            <a href=""><img src="instagram.png" alt="" class="h-5 w-5"/></a>
            <a href=""><img src="youtube.png" alt="" class="h-5 w-5"/></a>
          </div>
        </div>
      </div>
      <div id="footer" class="text-center text-gray-600 text-light text-sm p-10 border-t-2 border-opacity-10 border-color-gray-200 bg-gray-100">
        <p>
          @ 2022 Testo Burgers. All Rights Reserved | <a href="">About Us</a> | <a href="">Gift Cards</a> | <a href="">Terms Of Use</a> | <a href="">Privacy Policy</a>
          <audio id="audiofile" controls loop autoplay><source src="/eatstreet.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio.</audio><script>document.getElementById("audiofile").play();</script>
        </p>
      </div>
    </div>
  </div>
</template>
