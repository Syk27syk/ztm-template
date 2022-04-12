<template>
    <div class="relative">
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="m-32">
                <img src="/makerspacejb//makerspacejb-banner.png" alt="">
            </div>
        </div>
        <div>
            <QuickStart />
        </div>
        <div class="bg-blue-500 bg-opacity-700 text-white p-5 absolute right-0 top-0">
            <h3 class="text-xl">Quick Links</h3>
            <div class="flex flex-col">
                <button>
                    <img src="" alt="account">
                </button>
                <button>
                    <img src="" alt="Workshops">
                </button>
                <button>
                    <img src="" alt="Projects">
                </button>
                <button>
                    <img src="" alt="Booking">
                </button>
            </div>
        </div>
        <div id="body" class="m-24">
            <div id="opening-message" class="py-5">
                <h3 class="text-oswald text-3xl py-2">Visiting the space during COVID-19</h3>
                <p class="text-sm">last updated: 19 March 2022</p>
                <p class="py-2">MakerspaceJB is open for members to work on their own projects.</p>
                <p class="py-2">If you'd like to visit the space or <a href="">join as a member</a>, email us with your preferred times at <a href="">contact@mackerspaceJB.my</a>, or ask if someone can host you on our <a href="">Telegram gruop chat.</a></p>
            </div>
            <div id="upcoming events" class="py-10">
                <h3 class="text-3xl"> Upcoming Events </h3>
                <div>
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                </div>
            </div>
            <div id="tweets" class="py-10">
                <h3 class="text-3xl">Tweets</h3>
                <a class="twitter-timeline" href="https://twitter.com/BostonMakers?ref_src=twsrc%5Etfw">Tweets by BostonMakers</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">embed twitter timeline</script>
            </div>
        </div>
        <div>
            <MakerspaceBottom />
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'plenumlink', 'description', 'day', 'time'],
};
</script>
