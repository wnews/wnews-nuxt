<template>
    <NuxtLink href="https://dashboard.presspatron.com/donations/new?frame=1&t=jdV8hSBbgGyRsqtsRyjBbatz"
        data-pp-page="checkout" 
        :data-pp-frequency="`${frequency}`" 
        :data-pp-amount="`${amount}`" 
        :data-pp-metadata="`donation-${frequency}-${amount}`"
        class="m-5 p-4 text-white bg-red-100 hover:bg-red-400"
    ><ContentSlot :use="$slots.default" unwrap="p" /></NuxtLink>
</template>
<script setup>
    defineProps(['frequency', 'amount'])
</script>
