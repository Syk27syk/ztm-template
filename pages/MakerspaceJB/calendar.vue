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
        <div id="section1" class="px-24 bg-[url('/makerspacejb/calendar-bg.png')] w-full">
            <h3 class="text-4xl text-gray-200 text-oswald text-center py-60">
                MakerspaceJB calendar of events
            </h3>
        </div>
        <div id="event-calendar" class="flex-col m-24">
            <p class="text-4xl text-oswald text-black text-left py-5">Event Calendar</p>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=sanv31l34ap083oo9lrqb57mhs%40group.calendar.google.com&ctz=Europe%2FLondon"
                style="border: 0"
                width="1200"
                height="900"
                frameborder="0"
                scrolling="no"
                class="border py-5"
            >
            calendar
            </iframe>
        </div>
        <div id="booking-calendar" class="flex-col m-24">
            <p class="text-4xl text-oswald text-black text-left py-5">Bookings for equipment and venue</p>
            <div class="p-5">
                <p class="text-2xl">Read these first</p>
                <p class="text-black text-left">
                    <ul>
                        <li class="text-xl"><a href="">Equipment</a></li>
                        <li class="text-xl"><a href="">Venues</a></li>
                        <li class="text-xl"><a href="">Booking procedures</a></li>
                    </ul>
                </p>
            </div>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=sanv31l34ap083oo9lrqb57mhs%40group.calendar.google.com&ctz=Europe%2FLondon"
                style="border: 0"
                width="1200"
                height="900"
                frameborder="0"
                scrolling="no"
                class="border py-5"
            >
            calendar
            </iframe>
        </div>
        <div id="bottom">
            <MakerspaceBottom />
        </div>
    </div>
</template>
