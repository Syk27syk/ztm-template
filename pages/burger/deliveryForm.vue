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
                    <v-radio>
                        Credit/Debit Card
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </v-radio>
                    <v-radio>
                        Cash on Delivery
                        <img src="" alt="" />
                        <h5>Pay by cash on delivery </h5>
                        <p>Simply pay the driver, when he delivers the food to your doorstep.</p>
                    </v-radio>
                    <v-radio>
                        FPX Online Banking
                        <img src="" alt="" />
                    </v-radio>
                    <v-radio>
                        Boost
                        <img src="" alt="" />
                    </v-radio>
                </div>
                <div id="voucher">
                    <p><NuxtLink to="">Do you have a voucher?</NuxtLink></p>
                </div>
                <div id="placeorder">
                    <p> By making this purchase you agree to our <NuxtLink to="">Terms and Conditions</NuxtLink></p>
                    <button>Place order</button>
                    <p>I agree and I demand that you execute the ordered service before the end of the revocation period. I am aware that after complete fulfillment of the service I lose my right of recission.</p>
                </div>
            </div>
            <div id="order summary">
                <h3>Your order from Nando's (AEON Tebrau City)</h3>
                <table>
                    <tr>
                        <td>{{ quantity }}</td>
                        <td>{{ items }}</td>
                        <td>{{ price}}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{{ currency }} {{ price }}</td>
                    </tr>
                    <tr>
                        <td>Delivery fee</td>
                        <td>{{ currency }} {{ price }}</td>
                    </tr>
                    <tr>
                        <td>Including Service Tax</td>
                        <td>{{ currency }} {{ price }}</td>
                    </tr>
                    <tfoot>
                        <td>Total (Incl. Service Tax)</td>
                        <td>{{ currency }} {{ price }}</td>
                    </tfoot>
                </table>
            </div>
        </div>
        <footer>
            <p>(C) 2022 Testo Burgers</p>
            <p>No. 1, Persiaran Bandar Utama,47800 Petaling Jaya, Selangor, Malaysia.</p>
            <p>
                Press | Help Center | Terms and Conditions | Privacy Policy | Security | Partner With Us <br>
                Download Testo's Mobile App | Careers | Testos International | Testos Malaysia <br>
                Testo Burger Vouchers | Testo Locations | Recipes | Blog |
            </p>
        </footer>
    </div>
</template>
