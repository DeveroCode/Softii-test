<script setup>
import { ref, onMounted } from 'vue';
import { formatCurrency, reload } from '@/helper';
import { BanknotesIcon, CreditCardIcon, XMarkIcon } from '@heroicons/vue/24/solid'; '@heroicons/vue/24/solid'
const paymentAmount = ref(null);

onMounted(() => {
    const storedPayments = localStorage.getItem('payments');
    if (storedPayments) {
        paymentAmount.value = JSON.parse(storedPayments);
    }
});

const removePayment = i => {
    if (paymentAmount.value && paymentAmount.value.length > i) {
        paymentAmount.value.splice(i, 1);
        localStorage.setItem('payments', JSON.stringify(paymentAmount.value));
        reload();
    }
}
</script>

<template>
    <h1 class="text-2xl text-title font-black">Pagos</h1>

    <div v-if="paymentAmount">
        <div class="bg-white border-btn mt-5 rounded-2xl py-5 px-5 shadow-md text-2xl text-title font-bold"
            v-for="(payment, i) in paymentAmount" :key="i">
            <div class="flex justify-between">
                <div class="flex gap-3 items-center">
                    <BanknotesIcon class="h-7 mt-2" v-if="payment.method === 'Efectivo'" />
                    <CreditCardIcon class="h-7 mt-2" v-else />
                    <h2>{{ payment.method }}</h2>
                </div>
                <div class="flex items-center space-x-4">
                    <h2>{{ formatCurrency(payment.amount) }}</h2>
                    <XMarkIcon class="h-6 text-numbers" @click="removePayment(i)" />
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white border-btn mt-5 rounded-2xl py-5 px-5 shadow-md text-2xl text-title font-bold" v-else>
        Sin pagos
    </div>
</template>