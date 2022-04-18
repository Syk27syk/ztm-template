<template>
    <div>
        <div id="header">
            <BurgerNavBar />
        </div>
        <div id="create account form">
            <h3> Create Account Form </h3>
            <p>
                Complete your profile by filling in this account creation form
            </p>
            <h5 class="my-5">
                First Name
            </h5>
            <input
                id="firstname"
                type="text"
                placeholder="First Name"
                class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
            />
            <h5 class="my-5">
                Last Name
            </h5>
            <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
            />
            <h5 class="my-5">
                Your Email
            </h5>
            <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
            />
            <h5 class="my-5">
                Password
            </h5>
            <input
                id="password"
                type="password"
                placeholder=""
                class="w-full border border-gray-300 rounded-md active:border-4 active:border-blue-500 text-xl m-5 p-5"
            />
            <h5 class="my-5">
                Confirm Password
            </h5>
            <input
                id="confirm password"
                type="password"
                placeholder="Please enter your email"
                class="w-full border border-gray-300 text-xl mt-5 py-3 px-2"
            />
        </div>
    </div>
</template>
