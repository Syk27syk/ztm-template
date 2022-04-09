<template>
    <div>
        <h4 class="text-3xl text-black text-oswald">
            {{ question }}
        </h4>
        <div class="text-lg text-black text-roboto">
            {{ answer }}
        </div>
    </div>
</template>

<script>
export default {
  props: ['question', 'answer'],
};
</script>
