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
        <div id="membership">
            <h4>Join us!</h4>
            <div id="membership-benefits">
                <h5 class="text-2xl text-black text-oswald">
                    Membership benefits
                </h5>
                <ul>
                    <li>24/7 access to the space</li>
                    <li>Keep your stuff in a locker or designated storage box (additional subscription applies)</li>
                    <li>Use the workbench and hardware tools</li>
                    <li>Host community meetups,workshops, and other events at the space</li>
                    <li>Borrow books from our library</li>
                </ul>
            </div>
            <div id="membership-tiers">
                <div id="dedicated-member">
                    <h4 class="text-4xl text-black text-oswald">
                        Dedicated Member - &#36;64 &#47;month
                    </h4>
                    <p>A dedicated desk for co-working. You can keep your stuff at your desk. We'll label a desk with your name, in honour of your contribution.</p>
                    <p><i>Great for: people who really want to support the space; people who have lots of stuff; people who like their multi-monitor setups.</i></p>
                </div>
                <div id="coworking-member">
                    <h4 class="text-4xl text-black text-oswald">
                        Co-working Member - &#36;256 &#47;month
                    </h4>
                    <p>Unlimited use of the space. You cannot keep your stuff at a desk when you leave for the day.</p>
                    <p><i>Great for: freelancers and small companies using the space daily during regular business hours.</i></p>
                </div>
                <div id="community-member">
                    <h4 class="text-4xl text-black text-oswald">
                        Community Member - &#36;128 &#47;month
                    </h4>
                    <p>Occasional use of the space (around 9 hours a week). You cannot keep your stuff at a desk when you leave for the day.</p>
                    <p><i>Great for: occasional co-workers; people who come in after work or school to hang out.</i></p>
                </div>
                <div id="concessionary-member">
                    <h4 class="text-4xl text-black text-oswald">
                        Concessionary Member - &#36;64 &#47;month
                    </h4>
                    <p>If you earn under &#36;2,500 &#47; month, all the benefits of Community membership, at a reduced rate. Occasional use of the space (around 9 hours a week). You cannot keep your stuff at a desk when you leave for the day.</p>
                    <p><i>Great for: full-time students, NSFs, underemployed, unemployed</i></p>
                </div>
                <div>
                    MakerspaceJB is primarily member-run. To promote member involvement and financial inclusivity, you may use the space for more than 9 hours/week if you contribute your time towards MakerspaceJB maintenance duties. Community members should pledge 0.5 hours for every 8 additional hours of space use, and Concessionary members should pledge 1 hour for every 8 additional hours of space use.
                </div>
                <div>
                    <img src="/makerspacejb/maker.png" alt="" />
                </div>
            </div>
        </div>
        <div id="sign-up">
            <h3 class="text-3xl text-black text-oswald">
                How do I sign up?
            </h3>
            <p>Drop by MakerspaceJB and get to know us. Hang out for a week or two, just so that we can know you better, and so that ou are sure that you really want to be part of the community.</p>
            <p>(Please refer to the <a href="" class="text-blue-400">best time to visit</a> below.)</p>
            <p>complete the <a href="" class="text-blue-400">>membership form</a> and pass it to any member. You need two members to support your application.</p>
            <p>We accept membership payments via direct bank transfer to the Makerspace Standard Chartered Bank Account:</p>
            <div class="m-3 p-3 flex-col text-black font-roboto font-thin bg-gray-200 border-2 rounded-md">
                <ul>
                    <li>Bank code: 1416</li>
                    <li>Branch code: 377</li>
                    <li>Account number: 2522794382</li>
                </ul>
            </div>
            <p>The account name is Makerspace.JB Pte. Ltd. and the bank code is acflmymyxxx (which is the SWIFT code). Once you have the right bank code the branch code of 377 should display on your internet banking interface.</p>
            <p>We accept PayNow for one-off payments.</p>
            <div id="QRpay" class="text-center mx-auto">
                <img src="/makerspacejb/qrpay.png" alt="" />
            </div>
            <p>Another painless way is to use PayPal to enter into a monthly subscription.</p>
            <div id="paypal" class="flex flex-col">
                <p>MakerspaceJB monthly membership</p>
                <p class="bg-red-300">(dropdown menu for membership types)</p>
                <button class="bg-yellow-300 px-5 py-3 rounded-full text-blue-600">
                    Subscribe
                </button>
                <div class="flex flex-row">
                    <img src="" alt="mastercard" class="w-5 h-5" />
                    <img src="" alt="visa" class="w-5 h-5" />
                    <img src="" alt="american express" class="w-5 h-5" />
                </div>
            </div>
            <p>We reserve the right to reject membership applications for any reason.</p>
        </div>
        <div id="topics">
            <div id="guests">
                <h4 class="text-3xl">
                    Guests
                </h4>
                <p>
                    MakerspaceJB welcomes infrequent visitors and foreign travellers. Guests are invited to drop by whenever members are present.
                </p>
                <h4 class="text-3xl">
                    Best times to visit
                </h4>
                <p>
                    Members are usually around in the space between 2pm to 6pm, and 9pm to midnight, on most days. Some members also go out semi-regularly for dinner between 8pm to 9pm on most days.
                </p>
                <p>
                    If you would like to visit MakerspaceJB but do not know a member, please let us know via <a href="">Facebook</a>, <a href="">IRC</a> (response might be slow), or the <a href="">mailing list</a>. Alternatively, come visit us at any of the public events listed on our <a href="/makerspacejb/calendar">calendar</a>.
                </p>
            </div>
            <div id="personal-belongings">
                <h4 class="text-3xl">
                    Personal Belongings
                </h4>
                <p>
                    Members are invited to leave their stuff at the Hackerspace, with the understanding that other members and guests may <a href="">use, handle, break and discard them</a>. This includes, but is not limited to: computers, keyboards, mice, chargers, furniture, and toys. Please label your items.
                </p>
                <p>
                    Please clear all personal belongings from your desk when you leave Makerspace for the day. (This doesn't apply to the desks and personal belongings of members who are subscribed to the Dedicated tier.) Please be considerate to fellow members and guests.
                </p>
            </div>
            <div id="membership-addons">
                <div id="lockers">
                    <h4 class="text-3xl">
                        Lockers
                    </h4>
                    <p>
                        HackerspaceSG offers three sizes of lockers for rental to members.
                    </p>
                    <p>
                        Big lockers (42cm) are $15 per month, small lockers (28cm) are $10 per month, and tiny lockers (21cm) are $7.50 per month.
                    </p>
                    <div id="paypal" class="flex flex-col">
                        <p>Locker subscription</p>
                        <p class="bg-red-300">(dropdown menu for locker types)</p>
                        <button class="bg-yellow-300 px-5 py-3 rounded-full text-blue-600">
                            Subscribe
                        </button>
                        <div class="flex flex-row">
                            <img src="" alt="mastercard" class="w-5 h-5" />
                            <img src="" alt="visa" class="w-5 h-5" />
                            <img src="" alt="american express" class="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div id="open-storage">
                    <h4 class="text-3xl">
                        Open Storage
                    </h4>
                    <p>
                        Members receive 22L of free storage for every $64 of monthly membership subscription, and can rent additional storage at $5 per 22L. For example, Community members paying $128 a month get 44L of free storage.
                    </p>
                    <p>
                        Please subscribe to additional storage whether you're using MakerspaceJB's supplied boxes, your own storage containers (e.g. suitcases), or storing large individual items (e.g. bicycles) at the premises. MakerspaceJB admin will be in touch if we believe that you should enter into a subscription.
                    </p>
                    <p>
                        For MakerspaceJB boxes, storage rental is billed whether the boxes are in MakerspaceJB or elsewhere. Boxes should be returned in reusable condition when you end your subscription term. If a box is damaged or missing, a replacement fee will be billed at $12 per 22L box, and $25 per 44L box. The replacement fee will be waived if you've paid 12 months of storage subscription for that box.
                    </p>
                    <p>
                        Members receive 22L of free storage for every $64 SGD of monthly membership subscription, and can rent additional storage at $5 SGD per 22L. For example, Community members paying $128 a month get 44L of free storage.
                    </p>
                    <div id="paypal" class="flex flex-col">
                        <p>Locker subscription</p>
                        <p class="bg-red-300">(dropdown menu for locker types)</p>
                        <button class="bg-yellow-300 px-5 py-3 rounded-full text-blue-600">
                            Subscribe
                        </button>
                        <div class="flex flex-row">
                            <img src="" alt="mastercard" class="w-5 h-5" />
                            <img src="" alt="visa" class="w-5 h-5" />
                            <img src="" alt="american express" class="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div id="mailing-address">
                    <h4 class="text-3xl">
                        Mailing Address for Businesses
                    </h4>
                    <p>
                        Businesses may use MakerspaceJB's address to receive physical/snail mail, as long as they are associated with a member.
                    </p>
                    <p>
                        Members at the Co-working ($256) tier and above may register one business to receive mail free.
                    </p>
                    <p>
                        Community and Concessionary members may register their businesses at $10 per business per month.
                    </p>
                    <div id="paypal" class="flex flex-col">
                        <p>Locker subscription</p>
                        <p class="bg-red-300">(dropdown menu for locker types)</p>
                        <button class="bg-yellow-300 px-5 py-3 rounded-full text-blue-600">
                            Subscribe
                        </button>
                        <div class="flex flex-row">
                            <img src="" alt="mastercard" class="w-5 h-5" />
                            <img src="" alt="visa" class="w-5 h-5" />
                            <img src="" alt="american express" class="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="disclaimer">
                <h5 class="text-3xl">
                    Disclaimer of Responsibility
                </h5>
                <p>
                    MakerspaceJB will not be held repsonsible for any loss or damage of personal belongings.
                </p>
            </div>
            <div id="old-hardware">
                <h5 class="text-3xl">
                    Dealing with Old Hardware
                </h5>
                <p>
                    MakerspaceJB implemenets the <a href="">Old Hardware Pattern</a>
                </p>
            </div>
        </div>
        <div id="organization">
            <h4 class="text-4xl">
                Organizational Form
            </h4>
            <p>
                MakerspaceJB intends to operate like a non-profit, but has incorporated as a Pte Ltd for convenience. There are presently two directors.
            </p>
            <p>
                All finances will be transparently disclosed to the membership.
            </p>
            <p>
                We intend to operate with a small profit margin.
            </p>
            <p>
                Any operating surplus will not be distributed to partners or members, but will be directed at activities approved by the MakerspaceJB board of directors.
            </p>
        </div>
        <div id="bottom">
            <MakerspaceBottom />
        </div>
    </div>
</template>
