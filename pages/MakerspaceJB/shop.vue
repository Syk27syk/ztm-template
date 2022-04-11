<template>
    <div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="p-32 bg-[url('/makerclass/robot-shopping.jpg')] bg-center bg-cover min-h-96">
                <h1 class="text-white text-6xl font-oswald uppercase text-center">
                    shop
                </h1>
            </div>
        </div>
        <div id="gifts">
            <h3 class="text-3xl text-black text-oswald font-black uppercase bg-blue-300 py-3 text-center mx-auto">
                Gifts
            </h3>
            <div id="products" class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="galileo-therometer" class="flex flex-col border border-gray-500 rounded-md p-5">
                    <img src="/makerclass/galileo-thermometer.png" alt="galileo-thermometer" class="">
                    <h4 class="text-2xl text-black font-black font-oswald uppercase py-3">Galileo Thermometer</h4>
                    <p id="description" class="text-oswald text-xl">
                        Made of a sealed glass cylinder containing a clear liquid and several glass vessels of varying density, the individual floats rise or fall due to density changes as the temperature changes.
                    </p>
                    <span class="text-blue-500 text-lg text-left py-2"><NuxtLink to=""><i>See Product Description</i></NuxtLink></span>
                    <span id="price" class="text-xl font-oswald py-2"> RM 49.99 </span>
                    <button class="text-black font-bold font-oswald text-2xl bg-red-300 rounded px-8 py-3 border" @click="addCart">Add to Cart</button>
                </div>
                <div id="beetle-bot" class="flex flex-col border border-gray-500 rounded-md p-5">
                    <img src="/makerclass/beetle-bot.jpeg" alt="beetle-bot" class="">
                    <h4 class="text-2xl text-black font-black font-oswald uppercase py-3">Beetle Bot</h4>
                    <p id="description" class="text-oswald text-xl">
                        Robotic beetle that moves in response to touch and sound.
                    </p>
                    <span class="text-blue-500 text-lg text-left py-2"><NuxtLink to=""><i>See Product Description</i></NuxtLink></span>
                    <span id="price" class="text-xl font-oswald py-2"> RM 14.85 </span>
                    <button class="text-black font-bold font-oswald text-2xl bg-red-300 rounded px-8 py-3 border" @click="addCart">Add to Cart</button>
                </div>
                <div id="crookes-radiometer" class="flex flex-col border border-gray-500 rounded-md p-5">
                    <img src="/makerclass/crookes-radiometer.png" alt="crookes-radiometer" class="">
                    <h4 class="text-2xl text-black font-black font-oswald uppercase py-3">Crookes Radiometer</h4>
                    <p id="description" class="text-oswald text-xl">
                        Invented in 1873 by chemist Sir William Crookes, this device rotates faster when exposed to light, providing a quantitative measurement of electromagnetic radiation intensity.
                    </p>
                    <span class="text-blue-500 text-lg text-left py-2"><NuxtLink to=""><i>See Product Description</i></NuxtLink></span>
                    <span id="price" class="text-xl font-oswald py-2"> RM 319.75 </span>
                    <button class="text-black font-bold font-oswald text-2xl bg-red-300 rounded px-8 py-3 border" @click="addCart">Add to Cart</button>
                </div>
            </div>
        </div>
        <div id="Merchandise">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Merchandise
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="items">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
        <div id="makertools">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Makertools
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="items">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
        <div id="makertools">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Makertools
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="items">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    </div>
</template>
