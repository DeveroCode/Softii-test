<script setup>
import Header from '@/components/Header.vue'
import Calculator from '@/components/Calculator.vue'
import Payments from "@/components/Payments.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <Header />
  <main class="grid grid-cols-3 p-10">
    <div class="col-span-2">
      <Calculator />
    </div>
    <div class="col-span-1">
      <Payments />
    </div>
  </main>

  <Footer />
</template>