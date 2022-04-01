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
            <ul class="grid grid-cols-4 text-lg font-oswald text-white uppercase pt-5">
              <li><a href="">About Us</a></li>
              <li><a href="">Our Menu</a></li>
              <li><a href="">Locations</a></li>
              <li><a href="">Contacts</a></li>
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
          <a href="">Explore Full Menu</a>
        </button>
      </div>
      <div id="mustardyellow" class="grid grid-cols-3">
        <div>
          <h5 class="uppercase">
            Original Recipes
          </h5>
          <p>
            We use our secret recipes with only the best ingredients to make our burgers. Starting from patties, sauces, and even buns.
          </p>
        </div>
        <div>
          <h5 class="uppercase">
            Quality Foods
          </h5>
          <p>
            We purchase our ingredients from the best suppliers daily, to ensure the freshest quality of our burgers.
          </p>
        </div>
        <div>
          <h5 class="uppercase">
            Fastest Delivery
          </h5>
          <p>
            Burgers are best served while it's hot. We deliver to your door with our speedy delivery partners from the nearest outlet.
          </p>
        </div>
      </div>
      <div>
        <h2 id="crazyburgers" class="uppercase">
          Our Crazy Burgers
        </h2>
        <p>
          Whether you are looking for the classics, our specialties, or just wraps, salads, and fries, we have it all. We always have something that rewards your tastebud.
        </p>
        <div class="grid grid-cols-4">
          <div>
            <img src="crispy-chicken.jpg" alt="">
            <h4> Crispy Chicken </h4>
            <p>
              Chicken breast, chilli sauce, tomatoes, pickles, coleslaw
            </p>
            <button>
              RM 11.99
            </button>
          </div>
          <div>
            <img src="ultimate-bacon.jpg" alt="">
            <h4> Ultimate Bacon</h4>
            <p>
              House beef patty, cheddar cheese, bacon, onion, mustard
            </p>
            <button>
              RM 14.99
            </button>
          </div>
          <div>
            <img src="baa-baa.jpg" alt="">
            <h4> Baa-Baa Black Sheep</h4>
            <p>
              American cheese, tomato relish, avocado, lettuce, red onion
            </p>
            <button>
              RM 15.75
            </button>
          </div>
            <img src="double-burger.jpg" alt="">
            <h4> Double Burger </h4>
            <p>
              2 beef patties, cheddar cheese, mustard, pickles, tomatoes
            </p>
            <button>
              RM 15.35
            </button>
          </div>
        </div>
      </div>
      <div id="unevencolumns" class="grid grid-cols-2">
        <div class="bg-[url('/fries-bg-1.jpg')]>
          <h4 uppercase">
            Get Your Free Cheese Fries
          </h4>
          <button>
            Claim Now
          </button>
        </div>
        <div class="bg-[url('/burger-bg-1.jpg')]>
          <h4 jpguppercase">
            Cripsy Chicken Burger is Back!
          </h4>
          <button class="uppercase">
            Claim Now
          </button>
        </div>
      </div>
      <div id="threecolumns" class="grid grid-cols-3">
        <div>
          <a href=""><img src="offer-1.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="offer-2.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="offer-3.jpg" alt="" /></a>
        </div>
        <div id="photos" class="grid grid-cols-2">
          <img src="about.png" alt="" />
          <div>
            <h3>
              Nothing Brings People Together Like a Good Burger
            </h3>
            <p>
              That's the philosophy that we always believe in. We're a family-owned and operated business, and we're proud to be part of the community. We do our best to make sure that everyone's happy and having a good time.
            </p>
            <p>
              Burgers are what brought us together and what keeps us together. It's something that you can't put a price tag on. Most importantly, we are interested in people. It's not just about the food.
            </p>
          </div>
        </div>
      </div>
      <div id="downloadapp" class="grid grid-cols-2">
        <div>
          <h4 class="uppercase">
            Download mobile app and
          </h4>
          <h3 class="uppercase">
            Save up to 20%
          </h3>
          <p>
            Bye bye long queues. Order before and your food will be ready in a flash. Enjoy the convenience of ordering food online at any time and from any location.
          </p>
          <div grid="grid-cols-2">
            <button class="bg-[url('/appstore.png')]">
              Apple App Store
            </button>
            <button class="bg-[url('/googleplay.png')]">
              Google Play
            </button>
          </div>
        </div>
        <img src="eshop.png" alt="">
      </div>
      <div id="logos" class="grid grid-cols-6">
        <div>
          <img src="brand-1.png" alt="" />
        </div>
        <div>
          <img src="brand-2.png" alt="" />
        </div>
        <div>
          <img src="brand-3.png" alt="" />
        </div>
        <div>
          <img src="brand-4.png" alt="" />
        </div>
        <div>
          <img src="brand-5.png" alt="" />
        </div>
        <div>
          <img src="brand-6.png" alt="" />
        </div>
      </div>
      <div id="wideselections">
        <h3 class="uppercase">
          Wide Selections
        </h3>
        <p>
          Besides burgers, we also have a large range of item sincluding sandwiches, wraps, panini, soups, salads and more.
        </p>
        <div class="grid grid-cols-4">
          <img src="img-01.jpg" alt="" />
          <img src="img-02.jpg" alt="" />
          <img src="img-03.jpg" alt="" />
          <img src="img-04.jpg" alt="" />
        </div>
        <div class="grid grid-cols-4">
          <img src="img-05.jpg" alt="" />
          <img src="img-06.jpg" alt="" />
          <img src="img-07.jpg" alt="" />
          <img src="img-08.jpg" alt="" />
        </div>
      </div>
      <div class="bg-[url('/banner.jpg')] text-center">
        <h5 class="uppercase">
          We Guarantee
        </h5>
        <h3 class="uppercase">
          30 Minutes Delivery
        </h3>
        <p>
          Free delivery for all orders above RM30. We are committed to deliver the freshest and warmest food to all our customers. If your order is not delivered within 30 minutes, your next meal is on us!
        </p>
        <button class="text-white">
          Call: 03-2282 6400
        </button>
      </div>
      <div class="grid grid-cols-4">
        <div>
          <h5 class="uppercase">
            Location
          </h5>
          <p>
            No. 1, Persiaran Bandar Utama, 47800 Petaling Jaya, Selangor, Malaysia.
          </p>
        </div>
        <div>
          <h5 class="uppercase">
            Opening Hours
          </h5>
          <ul>
            <li> Mon-Fri: 9:00AM - 10:00PM </li>
            <li> Saturday: 10:00AM - 8:30PM </li>
            <li> Sunday: 12:00PM - 5:00PM </li>
          </ul>
        </div>
        <div>
          <h5 class="uppercase">
            Order Now
          </h5>
          <p>
            Call our hotline at 03-2282 6400
          </p>
        </div>
        <div>
          <h5 class="uppercase">
            Follow Us
          </h5>
          <p>
            For the latest updates!
          </p>
          <div class="grid grid-cols-3">
            <a href=""><img src="facebook.png" alt="" /></a>
            <a href=""><img src="instagram.png" alt="" /></a>
            <a href=""><img src="youtube.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div id="footer">
        <p>
          @ 2022 Testo Burgers. All Rights Reserved | <a href="">About Us</a> | <a href="">Gift Cards</a> | <a href="">Terms Of Use</a> | <a href="">Privacy Policy</a>
        </p>
      </div>
    </div>
  </div>
</template>
