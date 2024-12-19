<template>
  <div class="position-fixed bottom-0 end-0 p-3">
    <!-- Toggle Button -->
    <button
      ref="toggleButton"
      class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#contactIcons"
      aria-expanded="false"
      aria-controls="contactIcons"
      style="width: 60px; height: 60px; z-index: 1050"
    >
      <span v-show="!isExpanded" class="chat-icon">💬</span>
      <span v-show="isExpanded" class="close-icon">✖</span>
    </button>

    <!-- Hidden Icons (Displayed Above) -->
    <div
      class="collapse mt-2"
      id="contactIcons"
      style="
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
      "
    >
      <div class="d-flex flex-column align-items-center gap-2">
        <!-- Icon 1 -->
        <button
          class="btn btn-light rounded-circle shadow-sm"
          style="width: 50px; height: 50px"
        >
          📞
        </button>
        <!-- Icon 2 -->
        <button
          class="btn btn-light rounded-circle shadow-sm"
          style="width: 50px; height: 50px"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State for tracking whether collapse is open
const isExpanded = ref(false);

// Refs for DOM manipulation
const toggleButton = ref(null);

onMounted(() => {
  if (process.client) {
    // Add an event listener to the button after mounting
    toggleButton.value.addEventListener("click", () => {
      const expanded =
        toggleButton.value.getAttribute("aria-expanded") === "true";
      isExpanded.value = expanded;
    });
  }
});
</script>

<style scoped>
/* Optional: Add a smooth transition effect */
.collapse {
  transition: all 0.3s ease-in-out;
}
</style>
