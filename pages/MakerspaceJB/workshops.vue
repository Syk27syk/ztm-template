<template>
    <div>
        <div id="head">
            <div>
                <MakerspaceNavBar />
            </div>
            <div id="hero-banner" class="p-32 bg-[url('/makerclass/steampunk-bg.jpg')] bg-cover">
                <h1 class="text-white text-6xl font-oswald uppercase text-center">
                    workshops
                </h1>
                <img src="" alt="">
            </div>
        </div>
        <div id="construction">
          <MakerspaceCon />
        </div>
        <div id="featured-workshops">
            <h3 class="text-3xl text-black text-oswald uppercase bg-blue-300 py-3 text-center mx-auto">
                Featured Workshops
            </h3>
            <div class="grid grid-cols-3 gap-5 my-10 mx-24">
                <div>
                    <MakerspaceWorkshop
                        image="/makerclass/bb8.png"
                        name="Build a Robot"
                        description="Build your own droid to take home!"
                        duration="1 week"
                        link="/makerspacejb/bbbuildabotCoursePage"
                    />
                </div>
                <div>
                    <MakerspaceWorkshop
                        image="/makerclass/app.png"
                        name="Build an App"
                        description="Build your own mobile application"
                        duration="1 week"
                        link="/makerspacejb/appCoursePage"
                    />
                </div>
                <div>
                    <MakerspaceWorkshop
                        image="/makerclass/cubesat.png"
                        name="Build a satellite"
                        description="Build your own satellite!"
                        duration="3 weeks"
                        link="/makerspacejb/cubesatCoursePage"
                    />
                </div>
            </div>
        </div>
<!--
        <div id="coding-workshops">
            <div>
                <img src="" alt="">
                <h4>Coding for beginners</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>Data Science First Steps</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
        <div id="homefix-workshops">
            <div>
                <img src="" alt="">
                <h4>powertools</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>metalwork</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
        <div id="junior-workshops">
            <div>
                <img src="" alt="">
                <h4>bots and drones</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>draw and design</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>microprocessors</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
        <div id="for girls">
            <div>
                <img src="" alt="">
                <h4>wearables</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
        <div id="electronics">
            <div>
                <img src="" alt="">
                <h4>sensors</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
        <div id="3d">
            <div>
                <img src="" alt="">
                <h4>milling</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>3d printing</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
            <div>
                <img src="" alt="">
                <h4>3d design</h4>
                <p id="description">
                    description
                </p>
                <button>see course page</button>
                <button>checkout</button>
            </div>
        </div>
-->
        <div id="bottom">
            <MakerspaceBottom />
        </div>
    </div>
</template>
