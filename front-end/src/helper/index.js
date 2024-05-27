export const formatCurrency = price => Number(price).toLocaleString('es-US',
    {
        style: 'currency', currency: 'USD'
    });

export const reload = () => window.location.reload();


export const fullPayment = () => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    const tips = parseFloat(localStorage.getItem('numberSelect'));

    const totalAmount = storedPayments.reduce((sum, payment) => sum + parseFloat(payment.amount), 0);

    if (totalAmount > tips) {
        alert('El monto es insuficiente');
        return;
    }
}