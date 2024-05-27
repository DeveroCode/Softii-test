<script setup>
import { ref, onMounted, computed } from 'vue';
import { formatCurrency } from '@/helper';
const paymentAmount = ref([]);

const money = parseFloat(localStorage.getItem('numberSelect'));

onMounted(() => {
    const storedPayments = localStorage.getItem('payments');
    if (storedPayments) {
        paymentAmount.value = JSON.parse(storedPayments);
    }
});

const totalPaid = computed(() => {
    return paymentAmount.value.reduce((total, payment) => {
        return total + parseFloat(payment.amount);
    }, 0);
});

const rePayable = computed(() => {
    let total = money - totalPaid.value;
    return total > 0 ? total : 0;
});
</script>

<template>
    <footer class="px-24 py-0 xl:py-8 flex justify-between">
        <section class="w-2/3">
            <h1 class="text-2xl font-bold text-numbers"> Total Pagado <span>{{
                formatCurrency(totalPaid) }}</span>
            </h1>
            <h2 class="text-2xl font-bold text-title">Restante por Pagar <span>{{
                formatCurrency(rePayable) }}</span></h2>
        </section>

        <button type="button" class="w-1/2 border  font-bold text-2xl rounded-full"
            :class="rePayable === 0 ? 'bg-numbers border-none text-white' : 'border-btn text-btn'">Pagar
            <span>{{ formatCurrency(totalPaid)}}</span> En
            Propinas</button>
    </footer>
</template>