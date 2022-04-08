<template>
    <div class="relative">
        <div id="head">
            <div id="nav-bar flex flex-row">
                <div id="logo">
                    <img src="" alt="" class="w-32 h-32">
                </div>
                <div class="flex flex-row bg-black text-white text-xl text-semibold px-24">
                    <span class="px-5 py-2"><a href="MakerspaceJB">Home</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/calendar">Calendar</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/location">Location</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/membership">Membership</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/about">About</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/faq">FAQ</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/connect">Connect</a></span>
                    <span class="px-5 py-2"><a href="MakerspaceJB/docs">Docs</a></span>
                </div>
            </div>
            <div id="hero-banner" class="m-32">
                <img src="" alt="">
                <h1 class="text-oswald text-6xl">MakerspaceJB</h1>
            </div>
        </div>
        <div class="bg-blue-500 bg-transparent-500 text-white p-5 absolute right-0 top-0">
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
            </div>
        </div>
        <div id="body" class="m-24">
            <div id="opening-message" class="py-5">
                <h3 class="text-oswald text-3xl py-2">Visiting the space during COVID-19</h3>
                <p class="text-sm">last updated: 19 March 2022</p>
                <p class="py-2">MakerspaceJB is open for members to work on their own projects.</p>
                <p class="py-2">If you'd like to visit the space or <a href="">join as a member</a>, email us with your preferred times at <a href="">contact@mackerspaceJB.my</a>, or ask if someone can host you on our <a href="">Telegram gruop chat.</a></p>
            </div>
            <div id="upcoming events">
                <h3 class="text-3xl"> Upcoming Events </h3>
                <div>
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                    <MakerspacePlenum />
                </div>
            </div>
            <div id="tweets">
                <h3 class="text-3xl">Tweets</h3>
                <a class="twitter-timeline" href="https://twitter.com/BostonMakers?ref_src=twsrc%5Etfw">Tweets by BostonMakers</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">embed twitter timeline</script>
            </div>
        </div>
        <div id="information" class="grid grid-cols-3 p-32 bg-black text-white text-center">
            <div id="contribute">
                <h4 class="text-xl text-oswald text-bold">Contribute</h4>
                <ul>
                    <li><a href="">Open Collective</a></li>
                    <li><a href="">GitHub Sponsors</a></li>
                </ul>
            </div>
            <div id="Interact">
                <h4 class="text-xl text-oswald text-bold">Interact</h4>
                <ul>
                    <li><a href="">Telegram Chat</a></li>
                    <li><a href="">Google Group</a></li>
                    <li><a href="">Facebook Group</a></li>
                    <li><a href="">GitHub</a></li>
                </ul>
            </div>
            <div id="Follow">
                <h4 class="text-xl text-oswald text-bold">Follow</h4>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li>... and more!</li>
                </ul>
            </div>
        </div>
        <div id="footer" class="bg-black text-white text-center py-5 px-32">
            <p>Copyright (C) 2009-2022 Hackerspace.SG Pte Ltd and contributors.</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'plenumlink', 'day', 'time'],
};
</script>
