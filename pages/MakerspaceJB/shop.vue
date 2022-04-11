<template>
    <div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="p-32 bg-[url('/makerclass/robot-shopping.jpg')] bg-center bg-cover min-h-96">
                <h1 class="text-white text-6xl font-oswald uppercase text-center">
                    workshops
                </h1>
            </div>
        </div>
        <div id="gifts">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Gifts
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="items">
                    <Product
                    />
                    <Product
                    />
                    <Product
                    />
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
                    <Product
                    />
                    <Product
                    />
                    <Product
                    />
                </div>
            </div>
        </div>
        <div id="makertools">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Makertools
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div id="items">
                    <Product
                    />
                    <Product
                    />
                    <Product
                    />
                </div>
            </div>
        </div>
    </div>
</template>
