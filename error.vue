<template>
  <div>
  <NuxtLayout>
    <div class="my-5 text-center py-3">
    <h1>404 - Page Not Found</h1>
    <p class="fw-bold">Sorry, the page you are looking for does not exist.</p>
    <NuxtLink  class="button text-center text-white" to="/">Return to Homepage</NuxtLink>
  </div>
</NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Page Not Found',
})
defineProps(['error'])
</script>

<style>

</style>