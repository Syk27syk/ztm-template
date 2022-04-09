<template>
    <div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="m-32">
                <img src="/makerspacejb//makerspacejb-banner.png" alt="">
            </div>
        </div>
        <div id="construction">
          <MakerspaceCon />
        </div>
        <div id="map" class="w-1200 h-1200 mx-24">
            <h4 class="text-3xl text-black text-oswald px-5">
                MakerspaceJB is at <a href="">DreamVille</a>
            </h4>
            <p class="text-xl text-black text-oswald px-5 py-5">
                <a href="">196-9B Elysium Boulevard, Dreamville ZTD20012 Arabia Terra</a>
            </p>
            <div id="googlemap" class="px-5 py-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12084.508448632923!2d-73.97524709986573!3d40.781219570809085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2smy!4v1649466431352!5m2!1sen!2smy"
                    width="800"
                    height="800"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
            <p class="px-5 text-2xl text-blue-400"><a href="">Google Street View</a></p>
            <p class="px-5 text-xl">Please proceed up to the 2nd floor</p>
        </div>
        <div id="see-also" class="mx-24 pb-16 py-10">
            <h4 class="text-3xl text-black text-oswald px-5 py-5">
                See also
            </h4>
            <p class="px-5 text-xl">
                <a href="" class="text-blue-400">Around The Area</a> on our <a href="" class="text-blue-400">MakerspaceJB Handbook</a>
            </p>
        </div>
        <div id="bottom">
            <MakerspaceBottom />
        </div>
    </div>
</template>
