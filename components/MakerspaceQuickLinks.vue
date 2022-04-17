<template>
    <div class="bg-white bg-opacity-20 rounded-full border border-gray-500 text-white p-5 absolute right-0 top-0 m-5">
        <h3 class="text-xl font-extrabold font-roboto text-gray-500 py-2">Quick<br>Links</h3>
        <div class="flex flex-col">
            <button class="rounded-full bg-blue-100 border-2 border-black h-10 w-10 p-2 my-2 mx-1">
                <NuxtLink to="/makerspacejb/cart"><img src="/makerspaceJB/cart.png" alt="account"></NuxtLink>
            </button>
            <button class="rounded-full bg-blue-100 border-2 border-black h-10 w-10 p-2 my-2 mx-1">
                <NuxtLink to="/makerspacejb/booking"><img src="/makerspaceJB/booking.png" alt="Booking"></NuxtLink>
            </button>
            <button class="rounded-full bg-blue-100 border-2 border-black h-10 w-10 p-2 my-2 mx-1">
                <NuxtLink to="/makerspacejb/workshops"><img src="/makerspaceJB/workshops.png" alt="Workshops"></NuxtLink>
            </button>
            <button class="rounded-full bg-blue-100 border-2 border-black h-10 w-10 p-2 my-2 mx-1">
                <NuxtLink to="/makerspacejb/projects"><img src="/makerspaceJB/projects.png" alt="Projects"></NuxtLink>
            </button>
        </div>
    </div>
</template>
