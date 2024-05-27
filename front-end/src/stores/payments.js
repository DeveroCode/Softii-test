import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import ServicesAPI from '@/api/ServicesAPI'
import { formatCurrency, reload, fullPayment } from '@/helper';

export const usePaymentStore = defineStore('payments', () => {
    const payments = ref([]);
    const selectPayment = ref([]);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0, '✔️'];
    const numberAmount = ref('');

    const focused = ref(false)
    const field = ref('');

    const numberSelect = formatCurrency(localStorage.getItem('numberSelect')) || '0';
    const tilTips = localStorage.getItem('splittingTips') || '# 0';

    onMounted(async () => {
        try {
            const { data } = await ServicesAPI.all();
            payments.value = data;
        } catch (error) {
            console.log(error);
        }
    });

    const handleFocusedInput = (input, methodPayment) => {
        focused.value = true
        field.value = methodPayment ? methodPayment.value : input
    };

    const handleSelectedNumber = (number) => {
        // Push number in numberSelect
        if (number === '✔️') {
            if (field.value === 'numberSelect') {
                // Save the tips in local storage  
                localStorage.setItem('numberSelect', numberAmount.value);
                focused.value = false
                reload();
            } else if (field.value === 'splittingTips') {
                localStorage.setItem('splittingTips', numberAmount.value);
                focused.value = false
                reload();
            }
            saveMehtodPayment(numberAmount.value, field.value);

        } else if (numberAmount.value.length !== 9) {
            numberAmount.value += number;
        } else {
            alert('Limite de dígitos alcanzado');
        }
    };

    function onPaymentSelect(payment) {
        if (selectPayment.value.some(selectedPayment => selectedPayment._id === payment._id)) {
            selectPayment.value = selectPayment.value.filter(selectedPayment => selectedPayment._id !== payment._id);
            focused.value = !focused.value;
        } else {
            if (selectPayment.value.length >= 1) {
                alert('No puedes seleccionar dos servicios');
                return;
            }
            fullPayment();
            selectPayment.value.push(payment);
            handleFocusedInput(payment.name);
        }
    };

    function saveMehtodPayment(amount, method) {
        const paymentData = JSON.parse(localStorage.getItem('payments')) || [];
        paymentData.push({ amount, method });
        localStorage.setItem('payments', JSON.stringify(paymentData));
        reload();
    }

    const isPaymentSelectd = computed(() => {
        return id => selectPayment.value.some(service => service._id === id);
    });

    const splittingTips = computed(() => {
        return parseFloat(localStorage.getItem('numberSelect')) / parseFloat(tilTips);
    })

    return {
        payments,
        numberSelect,
        tilTips,
        focused,
        handleFocusedInput,
        numberAmount,
        numbers,
        handleSelectedNumber,
        onPaymentSelect,
        isPaymentSelectd,
        splittingTips
    }
});