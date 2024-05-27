<script setup>
// Import icons arrow uturn left
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <header class="px-10 border-b border-black">
        <section class="flex items-center justify-between">
            <div class="flex items-center text-numbers gap-3">
                <ArrowUturnLeftIcon class="w-6 h-6" />
                <span>Atrás</span>

                <div>
                    <h1 class="font-bold text-3xl py-10 px-10 text-title">Pago de propinas</h1>
                </div>
            </div>

            <div>
                <span class="text-numbers font-bold text-sm text-right block">Efectivo en caja</span>
                <div class="bg-primary py-3 w-48 rounded-md">
                    <p class="text-center font-bold text-4xl text-numbers">$5,500.00</p>
                </div>
            </div>
        </section>
    </header>
</template>