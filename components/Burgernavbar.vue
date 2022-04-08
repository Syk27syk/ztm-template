<template>
    <div>
        <div id="menu" class="grid grid-cols-4 py-5">
          <div id="menu-left">
            <a href="/burger/burgerhome"><img src="logo.png" class="w-[150px]" alt="" /></a>
          </div>
          <div id="menu-right" class="col-start-2 col-end-4 justify-end">
            <ul class="flex flex-row flex-wrap space-x-10 text-lg font-oswald text-white uppercase pt-5 flex-auto min-w-lg">
              <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
                <a href="/burger/about">About Us</a>
              </li>
              <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
                <a href="/burger/menu">Our Menu</a>
              </li>
              <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
                <a href="/burger/locations">Locations</a>
              </li>
              <li class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3">
                <a href="/burger/contacts">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>
