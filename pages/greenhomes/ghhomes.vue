<template>
  <div class="flex h-screen bg-green-300 h-[100vh] align-middle text-white text-center">
    <div class="m-auto">
      <p class="mt-5"><img src="https://tinyurl.com/359282x2" alt="greenhomeslogo" width="400" height="400" /></p>
    </div>
    <div class="m-auto">
      <h1 class="text-5xl">Green Homes</h1>
      <p class="mt-5">Affordable Solutions for Environmentally Friendly Abodes</p>
      <p class="mt-5"><strong>Navigation Bar</strong></p>
      <nav>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="meetourteam.html">Meet Our Team</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </nav>
    </div>
    <div>
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
      <div>
        <p> Sign up to our weekly newsletter! </p>
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
        <audio controls loop autoplay><source src="https://soundcloud.com/audio-mentor/on-good-terms" type="audio/mpeg"> Sorry, your browser doesn't support this audio. </audio>
    </footer>
  </div>
</template>
