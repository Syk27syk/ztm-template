<template>
    <div>
        <header>
            <div id="account navigation">
                <img src="" alt="" />
                <v-toggle>
                    English
                    Chinese
                    Malay
                </v-toggle>
                <div id="account dropdown menu">
                    <img src="" alt="" />
                    <h5> {{ username }} </h5>
                    <button> v </button>
                </div>
            </div>
        </header>
        <div class="grid grid-cols-2">
            <div>
                <div>
                    <span class="h-8 w-8 bg-red text-white text-center"> 1 </span>
                    <h4> Delivery details </h4>
                    <button> v </button>
                    <p> Delivery time:</p>
                    <p> drop down </p>
                    <p> Delivery address: </p>
                    <p> location search function </p>
                </div>
                <div>
                    <span class="h-8 w-8 bg-red text-white text-center"> 2 </span>
                    <h4> Personal details </h4>
                    <button> v </button>
                    <p> Email </p>
                    <input />
                    <p> First Name </p>
                    <input />
                    <p> Last Name </p>
                    <input />
                    <p> Mobile Number </p>
                    <input
                        id="mobile number"
                        type="tel"
                        placeholder="Mobile number"
                    />
                    <p> Birthday </p>
                    <p> drop down selection </p>
                </div>
                <div>
                    <span class="h-8 w-8 bg-red text-white text-center"> 3 </span>
                    <h4> Payment </h4>
                    <button> v </button>
                </div>
            </div>
            <div id="order summary">
                
            </div>
        </div>
        <footer>
            (C) 2022 Testo Burgers
            Damansara, Selangor, Malaysia
            <p>
                Press | Help Center | Terms and Conditions | Privacy Policy | Security | Partner With Us <br>
                Download Testo's Mobile App | Careers | Testos International | Testos Malaysia <br>
                Testo Burger Vouchers | Testo Locations | Recipes | Blog |
            </p>
        </footer>
    </div>
</template>
