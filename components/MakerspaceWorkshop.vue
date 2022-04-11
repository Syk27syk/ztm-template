<template>
    <div>
        <h3 class="text-3xl text-black text-oswald uppercase">
            Featured Workshops
        </h3>
        <div>
            <img :src="image" alt="bb8droid">
            <h4 class="text-2xl text-black text-oswald uppercase">{{ name }}</h4>
            <p id="description">
                {{ description }}
            </p>
            <p id="duration">
                {{ duration }}
            </p>
            <button><NuxtLink :to="link">See Course Page</NuxtLink></button>
            <button @click="bookItem">Book Now</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'name', 'description', 'duration', 'link'],
};
</script>
