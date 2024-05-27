<script setup>
import { ref } from 'vue';
import { PencilIcon, WalletIcon, BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/solid'; '@heroicons/vue/24/solid'
import { formatCurrency } from '@/helper';
import { usePaymentStore } from '@/stores/payments'

const typeSelect = usePaymentStore();

defineProps({
    handleFocusedInput: Function
});
</script>

<template>
    <section>
        <!-- Tips total -->
        <div class="pl-0 md:pl-32 xl:pl-60 flex items-center space-x-5">
            <div>
                <span class="text-numbers font-bold text-sm block">Total de Propinas</span>
                <input type="text"
                    class="bg-primary py-3 w-48 rounded-md text-center font-bold text-4xl text-numbers focus:outline-none"
                    v-model="typeSelect.numberSelect" @click="handleFocusedInput">
                </input>
            </div>
            <PencilIcon class="h-8 text-title" />
        </div>
        <!-- Slip tips  -->
        <div class="py-10 md:space-y-3 xl:space-y-6">
            <p class="font-bold text-title md:text-2xl md:pr-10 xl:px-10 xl:text-3xl">¿Entre cuántos quieres
                dividir
                las
                Propinas?
            </p>
            <div class="flex gap-5 items-center justify-between md:px-10">
                <input type="text" class="rounded-2xl md:py-2 xl:py-3 px-4 border border-title w-32 focus:outline-none"
                    v-model="typeSelect.tilTips" @click="handleFocusedInput">
                <span class="text-numbers font-bold px-16 md:text-lg xl:text-2xl">$0.00 x Persona</span>
            </div>
        </div>
        <!-- Select type payment -->
        <div class="md:space-y-6 xl:space-y-2 px-0 xl:px-10">
            <div class="flex items-center gap-3">
                <WalletIcon class="h-10 text-title" />
                <span class="capitalize text-title font-bold md:text-lg xl:text-2xl">Elige tu método de pago</span>
            </div>

            <section class="flex flex-wrap gap-3 items-center">
                <div v-for=" payment  in   typeSelect.payments " :key="payment"
                    class="shadow-lg py-10 px-5 md:w-48 xl:w-64 rounded-2xl border border-btn cursor-pointer font-bold text-title text-md text-center">

                    <BanknotesIcon class="h-10 mx-auto" v-if="payment.name === 'Efectivo'" />
                    <CreditCardIcon class="h-10 mx-auto" v-else />
                    {{ payment.name }}
                </div>
            </section>
        </div>
    </section>
</template>