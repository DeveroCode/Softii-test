<script setup>
import { PencilIcon, WalletIcon, BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/solid'; '@heroicons/vue/24/solid'
import { usePaymentStore } from '@/stores/payments'
import { formatCurrency, fullPayment } from '@/helper/index.js'



const useStore = usePaymentStore();
</script>

<template>
    <div class="flex flex-row justify-between px-12 items-center">
        <!-- Select type payment -->
        <section>
            <!-- Tips total -->
            <div class="pl-0 md:pl-32 xl:pl-60 flex items-center space-x-5">
                <div>
                    <span class="text-numbers font-bold text-sm block">Total de Propinas</span>
                    <input type="text"
                        class="bg-primary py-3 w-48 rounded-md text-center font-bold text-4xl text-numbers focus:outline-none"
                        v-model="useStore.numberSelect" @click="() => useStore.handleFocusedInput('numberSelect')">
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
                    <input type="text"
                        class="rounded-2xl md:py-2 xl:py-3 px-4 border border-title w-32 focus:outline-none"
                        v-model="useStore.tilTips" @click="() => useStore.handleFocusedInput('splittingTips')">
                    <span class="text-numbers font-bold px-16 md:text-lg xl:text-2xl">{{
                            formatCurrency(useStore.splittingTips) }} x
                        Persona</span>
                </div>
            </div>
            <!-- Select type payment -->
            <div class="md:space-y-6 xl:space-y-2 px-0 xl:px-10">
                <div class="flex items-center gap-3">
                    <WalletIcon class="h-10 text-title" />
                    <span class="capitalize text-title font-bold md:text-lg xl:text-2xl">Elige tu método de pago</span>
                </div>

                <section class="flex flex-wrap gap-3 items-center">
                    <div v-for=" payment  in   useStore.payments " :key="payment._id"
                        class="shadow-lg py-10 px-5 md:w-48 xl:w-64 rounded-2xl border border-btn cursor-pointer font-bold text-title text-md text-center"
                        :class="useStore.isPaymentSelectd(payment._id) ? 'bg-numbers text-white border-none' : 'bg-white'"
                        @click="() => useStore.onPaymentSelect(payment)">

                        <BanknotesIcon class=" h-10 mx-auto" v-if="payment.name === 'Efectivo'" />
                        <CreditCardIcon class="h-10 mx-auto" v-else />
                        {{ payment.name }}
                    </div>
                </section>
            </div>
        </section>
        <!-- Calculator -->
        <div>
            <div class="h-[440px] rounded-2xl w-80 mx-auto p-4 "
                :class="useStore.focused ? 'border border-numbers bg-transparent' : 'bg-secondary'">
                <!-- Input Field -->
                <section class="py-2">
                    <input type="text"
                        class="w-full border-b border-black bg-transparent focus:outline-none text-2xl font-bold text-title"
                        :value="useStore.numberAmount ? formatCurrency(useStore.numberAmount) : '0'" />
                </section>
                <!-- Number Buttons -->
                <section class="grid grid-cols-3 gap-2 mt-4">
                    <button v-for="number in useStore.numbers" :key="number"
                        @click="useStore.handleSelectedNumber(number)"
                        class="border border-gray-400 rounded-lg p-4 bg-white text-2xl flex justify-center items-center">
                        {{ number }}
                    </button>
                </section>
            </div>
        </div>
    </div>
</template>
