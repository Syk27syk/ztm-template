<template>
    <div>
        <div>
            <p>Estimated delivery time</p>
            <p class="text-3xl">{{ time }} min</p>
            <img src="" alt="" />
            <p>progress bar</p>
            <p>progress description</p>
        </div>
        <div>
            <p>Contact delivery rider</p>
        </div>
        <div>
            <h3>Order Details</h3>
            <table>
                <tr>
                    <td>Order number</td>
                    <td>{{ ordernumber }}</td>
                </tr>
                <tr>
                    <td>Your order from</td>
                    <td>{{ restaurant }}</td>
                </tr>
                <tr>
                    <td>Delivery Address</td>
                    <td>{{ address }}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{{ total }} </td>
                </tr>
                <tfoot>
                    <td>View Details ({{ }} items)</td>
                    <td><button> v </button></td>
                </tfoot>
            </table>
        </div>
        <div>
            <h3>Need Support</h3>
            <p>Questions regarding your order? Reach out to us.</p>
            <button> Help Center </button>
        </div>
    </div>
</template>
