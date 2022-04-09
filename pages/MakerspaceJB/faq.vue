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
        <div id="faq">
            <h2 class="text-6xl text-black text-oswald py-16 px-32">
                Frequently Asked Questions
            </h2>
            <div>
                <MakerFaqs
                    question="I want to learn more about MakerspaceJB. How?"
                />
                <MakerFaqs
                    question="I'd like to visit Makerspace. Do I need to make an appointment?"
                />
                <MakerFaqs
                    question="I'm looking for a co-working office for my non-tech business. Should I take a desk at MSJB?"
                />
            </div>
        </div>
        <div id="organisation-partnering-enquiries">
            <h2 class="text-6xl text-black text-oswald py-16 px-32">
                Organisational/Partnering Enquiries
            </h2>
            <div>
                <p>
                    We get a variety of enquiries from organisations who are looking to partner with us on various things. This is generally not feasible because MakerspaceJB has a rather unusual structure: we have no employees. Really none, not even a general manager. Almost everything that happens in MakerspaceJB happens at the personal initiative of one or more members, rather than of MakerspaceJB's non-existent management. (As a private limited company we do have directors of course, however they are all rather busy with other things.)
                </p>
                <p>
                    This means that the opportunity for organisations seeking to reach MakerspaceJB's community is not to first have a discussion with MakerspaceJB people in order to establish a joint project - we don't even have people paid to have that discussion with you, let alone execute a project - but instead to reach out to MakerspaceJB's community directly. We know this is a little bit disorienting for people who are accustomed to having permission from as many people as possible before actually doing something in public, however, in addition to not doing kiasu we don't do permission. What we can do is provide some pointers to help you on your way:
                </p>
                <ul>
                   <li>
                       The two primary communication channels are the <a href="" class="text-blue-400">>Google Group</a> and <a href="" class="text-blue-400">Facebook Group</a>. There is generally no particular reason for favouring one over the other, it is probably sensible to use both.
                    </li>
                    <li>
                        We don't grant or deny permission to communicate on these channels, but you can be reasonably confident that if you offend members of our community then robust abuse reports will make their way to Google and/or Facebook. This may or may not affect your future ability to use those services.
                    </li>
                    <li>
                        What is of interest to MakerspaceJB's community is technology. If you are promoting something that's specifically of interest to technologists in Singapore, then it's generally within reason to promote it directly to MakerspaceJB's community.
                    </li>
                    <li>
                        General interest items with a technological slant are probably not appropriate. It's easy to tell the difference: is your thing likely to be of interest to a non-technical audience too? If so, then it's probably too general for the MakerspaceJB community.
                    </li>
                    <li>
                        We're not in the technology incubator mould that many hackerspaces and co-working spaces follow, even though several startups, one accelerator and at least one VC fund have bootstrapped out of MakerspaceJB. Startup-related technical items are OK, but only if they're specifically of interest to technologists. If what you're promoting is also interesting to, say, non-technical co-founders then it's probably too general for the MakerspaceJB community.
                    </li>
                    <li>
                        Repetition is generally not appreciated. If you post your thing one time each to the Google and Facebook Groups and no-one responds, then no-one's interested. Move on.
                    </li>
                </ul>
            </div>
            <div>
                <p>Typical enquiries include:</p>
                <MakerFaqs
                    question="I'd like to talk to you about helping me reach out to your community about promoting my awesome event/service/product/thing or recruiting people for my awesome business/thing."
                />
                <MakerFaqs
                    question="Id like to talk to you about helping me reach out to your community about promoting my awesome event/service/product/thing or recruiting people for my awesome business/thing and Im willing to become a sponsor at $2,048/month."
                />
                <MakerFaqs
                    questions="I am creating a product/service/thing for co-working spaces like yours and for some reason I need to talk to someone at your organisation about this."
                />
                <MakerFaqs
                    questions="I can help you improve your website, perform SEO, make awesome flash, etc."
                />
                <MakerFaqs
                    questions="I am a journalist/prominent blogger and wish to interview/photograph MakerspaceJB people for an upcoming publication."
                />
            </div>
        </div>
        <div id="bottom">
            <MakerspaceBottom />
        </div>
    </div>
</template>
