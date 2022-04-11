<template>
    <div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="px-32 py-36 bg-[url('/makerclass/robot-shopping.jpg')] bg-center bg-cover h-full">
                <h1 class="text-white text-8xl font-oswald uppercase text-center">
                    shop
                </h1>
            </div>
        </div>
        <div id="gifts" class="bg-black">
            <h3 class="text-3xl text-white font-lilita font-black uppercase bg-blue-900 py-3 text-center mx-auto">
                Gifts
            </h3>
            <div id="products" class="grid grid-cols-3 gap-5 pb-32 my-10 mx-24">
                <MakerspaceProduct
                    image="/makerclass/galileo-thermometer.png"
                    name="Galileo Thermometer"
                    description="Made of a sealed glass cylinder containing a clear liquid and several glass vessels of varying density, the individual floats rise or fall due to density changes as the temperature changes."
                    price="49.99"
                    link="/makerspaceJB/galileoThermometer"
                />
                <MakerspaceProduct
                    image="/makerclass/beetle-bot.jpeg"
                    name="Beetle Bot"
                    description="Robotic beetle that moves in response to touch and sound. Comes in various colors, for ages 5 and up."
                    price="14.85"
                    link="/makerspaceJB/beetleBot"
                />
                 <MakerspaceProduct
                    image="/makerclass/crookes-radiometer.png"
                    name="Crookes Radiometer"
                    description="Invented in 1873 by chemist Sir William Crookes, this device rotates faster when exposed to light, providing a quantitative measurement of electromagnetic radiation intensity."
                    price="319.75"
                    link="/makerspaceJB/crookesRadiometer"
                />
            </div>
        </div>
        <div id="gifts" class="bg-black">
            <h3 class="text-3xl text-white font-lilita font-black uppercase bg-blue-900 py-3 text-center mx-auto">
                Gifts
            </h3>
            <div id="products" class="grid grid-cols-3 gap-5 pb-32 my-10 mx-24">
                <MakerspaceProduct
                    image="/makerclass/galileo-thermometer.png"
                    name="Galileo Thermometer"
                    description="Made of a sealed glass cylinder containing a clear liquid and several glass vessels of varying density, the individual floats rise or fall due to density changes as the temperature changes."
                    price="49.99"
                    link="/makerspaceJB/galileoThermometer"
                />
                <MakerspaceProduct
                    image="/makerclass/beetle-bot.jpeg"
                    name="Beetle Bot"
                    description="Robotic beetle that moves in response to touch and sound. Comes in various colors, for ages 5 and up."
                    price="14.85"
                    link="/makerspaceJB/beetleBot"
                />
                 <MakerspaceProduct
                    image="/makerclass/crookes-radiometer.png"
                    name="Crookes Radiometer"
                    description="Invented in 1873 by chemist Sir William Crookes, this device rotates faster when exposed to light, providing a quantitative measurement of electromagnetic radiation intensity."
                    price="319.75"
                    link="/makerspaceJB/crookesRadiometer"
                />
            </div>
        </div>
        <div id="gifts" class="bg-black">
            <h3 class="text-3xl text-white font-lilita font-black uppercase bg-blue-900 py-3 text-center mx-auto">
                Gifts
            </h3>
            <div id="products" class="grid grid-cols-3 gap-5 pb-32 my-10 mx-24">
                <Product
                />
            </div>
        </div>
<!--
        <div id="Merchandise">
        </div>
        <div id="makertools">
        </div>
        <div id="courses">
        </div>
-->
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('producs.json').then(
      (response) => {
        this.items = response.data.products;
      });
  },
};
</script>
