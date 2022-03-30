<!--BURGER ZTM DAY3
<template>
      <div id='header' class="bg-[/hero.bg.jpg]" px-20>
        <div>
          <div>='menu' class="grid grid-cols-2" py-5>
            <div id="'menu-left">
                <img src="logo.png" class="w-[150px]" alt=""/>
            </div>
          </div>
          <div id="menu-right">
              <ul class="grid grid-cols-4" text-lg font-oswald text-white uppercase>
                <li>About Us</li>
                <li>Our Menu</li>
                <li>Locations</li>
                <li>Contacts</li>
              </ul>
          </div>
        </div>
      </div>
-->
<!--
      <div id='header' class="bg-[/hero.bg.jpg]" px-20>
        <div>
          <div>='menu' class="grid grid-cols-2" py-5>
            <div id="'menu-left">
                <img src="logo.png" class="w-[150px]" alt=""/>
            </div>
          </div>
          <div id="menu-right">
              <ul class="grid grid-cols-4" text-lg font-oswald text-white uppercase>
                <li> <a href=""> About Us </a> </li>
                <li> <a href=""> Our Menu </a> </li>
                <li> <a href=""> Locations </a> </li>
                <li> <a href=""> Contacts </a> </li>
              </ul>
          </div>
        </div>
      </div>
-->
<!--
      <div id="body" class="bg-[/hero.bg.jpg]" class="grid grid-cols-2">
        <div>
          <img src="burger.png" class="w-[1500px] h-[1500px]" alt=""/>
        </div>
        <div class="flex h-screen bg-slate-600 h-[100vh] align-middle text-white text-center">
        <div class="m-auto">
          <h1 class="text-5xl"> CLASSIC BURGER WITH ONION </h1>
          <p class="mt-5"> Our signature burger now comes with onion and cheese. You can customize it to your likings. Freshly made to order, all in a Brioche style bun. </p>
        </div>
      </div>
    </div>
</template>
-->
<!--GREENHOMES - COMPANY WEBSITE+ECOMMERCE+CHECKOUT+BACKEND DATA COLLECTION-->
<!--
<template>
    <div class="flex auto bg-green-300 h-[100vh]">
      <div id="logo" class="">
        <p class="object-center"><img src="https://tinyurl.com/359282x2" alt="greenhomeslogo" width="300" height="300" align-center></p>
      </div>
      <div id="title" class="align-middle">
        <h1 class="text-5xl font-sans text-green text-lg">Green Homes</h1>
        <p class="mt-5" font-sans text-green text-lg>Affordable Solutions for Environmentally Friendly Abodes</p>
        <p class="mt-100"><strong>Navigation Bar</strong></p>
        <nav id="navigation_bar" px-20>
          <ul class="grid grid-cols-4" px-20>
            <li><a href="about.html">About</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="meetourteam.html">Meet Our Team</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </nav>
      </div>
      <div id="log_in" class="m-auto">
        <p> Log in </p>
          <form action="user_account.html" method="get">
            <label for="username"> Username </label>
              <input id="username" username="username">username</input>
            <label for="password"> Password </label>
              <input id="password" password="password">password</input>
          </form>
      </div>
      <div class="m-auto">
        <h2><strong>Welcome Video</strong></h2>
        <p class="mt-5"><iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/XP6xRZCFDYU"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen/>
                        <iframe/>
        </p>
        <p class="mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        Excepteur sint occaecat cupidatat, ut enim ad minim veniam.</p>
      </div>
      <div class="m-auto">
        <h2><strong><em>Products Overview</em></strong></h2>
        <p>
          <table border="1">
            <tr>
              <th> Package name </th>
              <th> Arborvitae package/Axlewood package </th>
              <th> Bloodwood package/Boobialla package/Bottletree package</th>
              <th> Coralberry package </th>
            </tr>
            <tr>
              <td> Image </td>
              <td><img src="img_1.jpg"></td>
              <td><img src="img_2.jpg"></td>
              <td><img src="img_3.jpg"></td>
            </tr>
            <tr>
              <td> Features </td>
              <td> dolor </td>
              <td> calor </td>
              <td> tumor </td>
            </tr>
              <tr>
              <td> Price </td>
              <td> $10.00 per unit, promotion 5% until 31st March 2022 <a href="arborvitae.html"> Order now </a> </td>
              <td> $20.00 per unit, promotion 10% until 31st March 2022 <a href="bloodwood.html"> Order now </a> </td>
              <td> $30.00 per unit, promotion 15% until 31st March 2022. <a href="coralberry.html"> Order now </a> </td>
            </tr>
          </table>
        </p>
        <div id="newsletter_signup" class="">
          <p><strong>Sign up to our weekly newsletter!</strong></p>
            <form action=”response_page.html” method=”get”>
              <label for=”name”> Name </label>
                <input id=”name” name=”name” type=”text” value=”Studentztm”></input>
              <label for=”email”> Email </label>
                <input id=”email” email=”email_address” type=”email” required placeholder=me@example.com></input>
              <label for=”phone”> Phone number </label>
                <input id=”phone” phone =”phone_number” type=”tel” required>Phone</input>
              <button type=”submit”> Sign up </button>
            </form>
        </div>
        <p><a href="survey.html">Click to take a survey</a></p>
      </div>
      <footer>
        <p>Contact</p>
        <p>Email</p>
        <p>Phone</p>
          <ul>
            <li><a href="https://green_homes.facebook.com">Facebook</a></li>
            <li><a href="https://green_homes.twitter.com">Twitter</a></li>
            <li><a href="https://green_homes.instagram.com">Instagram</a></li>
          </ul>
          <audio controls loop autoplay><source src="/Users/shiyunkhoo/Desktop/Computer Science/Web Development/Web Development/TheLEAD Zero to Market in 30 Days - Full Stack Web Development/Day 1 /ztm-template/static/on_good_terms.mp3" type="audio/mp3"> Sorry, your browser doesn't support this audio. </audio>
      </footer>
    </div>
</template>
-->
<!--GREENHOMES As published to Netlify-->
<template>
  <div class="flex-auto h-screen bg-green-300 h-[100vh] align-middle text-green font-oswald text-center">
    <div id="header" class="bg-green-800 grid grid-cols-2" px-50 px-10>
      <div id="logo" class="m-auto" px-5 py-5>
        <p class="mt-5"><img src="https://tinyurl.com/2p9359u3" alt="greenhomeslogo" width="100" height="100" px-30></p>
      </div>
      <div id="navigation bar" class="text-white font-cambria uppercase">
        <p class="mt-5"><strong>Navigation Bar</strong></p>
        <nav>
            <ul class="grid grid-cols-4">
              <li><a href="about.html">About</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="meetourteam.html">Meet Our Team</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
        </nav>
      </div>
    </div>
    <div id="hero" class="m-auto grid=grid-cols-2">
      <div id="eye_catching_image">
        <img src="https://tinyurl.com/86bkw52z" widht="500" height="500">
      </div>
      <div id="title">
        <h1 class="text-5xl">Green Homes</h1>
        <p class="mt-5">Affordable Solutions for Environmentally Friendly Abodes</p>
      </div>
    </div>
    <div id="log_in" class="">
      <p><strong> Log in </strong></p>
        <form action="user_account.html" method="get">
          <label for="username"> Username </label>
            <input id="username" username="username"></input>
          <label for="password"> Password </label>
            <input id="password" password="password"></input>
        </form>
    </div>
    <span>
      <p> text here </p>
    </span>
    <div id="welcome_video" class="m-auto align-middle" text-lg px-100>
      <h2><strong>Welcome! 欢迎！Bienvenue! Wilkommen! ¡Bienvenido! Benvenuto! Välkommen! </strong></h2>
      <p class="mt-5 align-middle px-100"><iframe width="560"
                              height="315"
                              src="https://www.youtube.com/embed/XP6xRZCFDYU"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen/>
                      <iframe/>
      </p>
      <p class="mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
      Excepteur sint occaecat cupidatat, ut enim ad minim veniam.</p>
    </div>
    <div id="products_overview" class="m-auto">
      <h2><strong><em>Products Overview</em></strong></h2>
      <p>
        <table border="1">
          <tr>
            <th> Package name </th>
            <th> Arborvitae package/Axlewood package </th>
            <th> Bloodwood package/Boobialla package/Bottletree package</th>
            <th> Coralberry package </th>
          </tr>
          <tr>
            <td> Image </td>
            <td><img src="https://tinyurl.com/yc8ktkf9" width="250" height="250"></td>
            <td><img src="https://tinyurl.com/2p8bkb98" width="250" height="250"></td>
            <td><img src="https://tinyurl.com/3mrj7pr9" width="250" height="250"></td>
          </tr>
          <tr>
            <td> Features </td>
            <td> dolor </td>
            <td> calor </td>
            <td> tumor </td>
          </tr>
            <tr>
            <td> Price </td>
            <td> $10.00 per unit, promotion 5% until 31st March 2022. <a href="arborvitae.html"><em>Order now!</em></a> </td>
            <td> $20.00 per unit, promotion 10% until 31st March 2022. <a href="bloodwood.html"><em>Order now!</em></a> </td>
            <td> $30.00 per unit, promotion 15% until 31st March 2022. <a href="coralberry.html"><em>Order now!</em></a> </td>
          </tr>
        </table>
      </p>
      <div id="newsletter_signup" class="">
        <p><strong>Sign up to our weekly newsletter!</strong></p>
          <form action=”response_page.html” method=”get”>
            <label for=”name”> Name </label>
              <input id=”name” name=”name” type=”text” value=e.g.student@ztm></input>
            <label for=”email”> Email </label>
              <input id=”email” email=”email_address” type=”email” required placeholder=me@example.com></input>
            <label for=”phone”> Phone number </label>
              <input id=”phone” phone =”phone_number” type=”tel” required></input>
            <button type=”submit”> Sign up </button>
          </form>
      </div>
      <p id="survey"><a href="survey.html"><em>Click here to take a survey!</em></a></p>
    </div>
    <footer id="contact"><small>
      <p><strong>Contact</strong></p>
      <p>Email</p>
      <p>Phone</p>
        <ul>
          <li><a href="https://green_homes.facebook.com">Facebook</a></li>
          <li><a href="https://green_homes.twitter.com">Twitter</a></li>
          <li><a href="https://green_homes.instagram.com">Instagram</a></li>
        </ul>
      <!--embed map from google maps-->
        <audio controls loop autoplay><source src="https://soundcloud.com/audio-mentor/on-good-terms" type="audio/mpeg"> Sorry, your browser doesn't support this audio. </audio>
        </small>
    </footer>
  </div>
</template>
<!--EXTRAVAGANT HATS 1
<template>
  <div>
      <div id='header' class="bg-[background]" px->
        <div>
          <div>='menu' class="grid grid-cols-2" py->
            <div id="'menu-left">
                <img src="logo.png" class="w-[150px]" alt=""/>
            </div>
          </div>
          <div id="menu-right">
              <ul class="grid grid-cols-4" text-lg font-oswald text-white uppercase>
                <li>About Us</li>
                <li>Our Menu</li>
                <li>Locations</li>
                <li>Contacts</li>
              </ul>
          </div>
        </div>
      </div>
      <div id="body" class="bg-[/hero.bg.jpg]" class="grid grid-cols-2">
        <div>
          <img src="hat" class="w-[1500px] h-[1500px]" alt=""/>
        </div>
        <div class="flex h-screen bg-slate-600 h-[100vh] align-middle text-white text-center">
        <div class="m-auto">
          <h1 class="text-5xl"> CLASSIC BURGER WITH ONION </h1>
          <p class="mt-5"> Our signature burger now comes with onion and cheese. You can customize it to your likings. Freshly made to order, all in a Brioche style bun. </p>
        </div>
        <div>
        minimalist designs
        </div>
      </div>
  </div>
</template>
-->
<!--EXTRAVAGANT HATS 2

-->
<!--MAKER CLASS - DROIDS SATELLITES AND WEB APPS-->
<!--SPEED DATING SITE-->
<!--ROBOADVISORY-->
<!--VOICE SEARCH-->
<!--CLONE OF ELEMENT 14-->
<!--CLONE OF MASTERCLASS-->
<!--BOOKING PLATFORM-->
