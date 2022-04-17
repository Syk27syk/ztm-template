<template>
    <div class="bg-white bg-opacity-20 rounded-full border border-gray-500 text-white p-10 absolute right-0 top-0 m-5">
        <button
            type="button"
            class="text-xl font-extrabold font-roboto text-gray-500 py-2 text-center flex flex-col relative z-10"
            @click="isOpen = !isOpen"
        >
            Quick<br>Links
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <button v-if="isOpen" class="fixed inset-0 h-full w-full text-transparent cursor-default tabindex=-1 z-0" @click="isOpen = false">text</button>
        <div v-if="isOpen" class="flex flex-col relative z-10">
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

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
/*
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('keydown', handleEscape)

    this.$once('hook:bfeforeDestroy', () => {
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.removeEventListener('keydown', handleEscape)
    })
  }
*/
}
</script>
