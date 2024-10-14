<template>
  <div v-if="error.statusCode === 404">
    <NuxtLayout>
      <div class="my-5 text-center py-5">
        <h1>Page Not Found</h1>
        <p class="fw-bold">
          Sorry, the page you are looking for does not exist.
        </p>
        <NuxtLink class="button text-center text-white" to="/"
          >Return to Homepage</NuxtLink
        >
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// Nuxt 3 composition API
const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 500, message: "An error occurred" }),
  },
});

// Define error title based on status code
const title = computed(() => {
  if (props.error.statusCode === 404) return "Page Not Found";
  if (props.error.statusCode === 500) return "Server Error";
  return "Oops!";
});
</script>
