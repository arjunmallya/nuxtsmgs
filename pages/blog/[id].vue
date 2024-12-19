<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const blog = ref();
const route = useRoute();
// Date formatting function
const formatDate = (date) => {
  if (!date) return "N/A"; // Handle undefined dates
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const fetchBlog = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/blogs/${route.params.id}`
    );
    blog.value = data;
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

await fetchBlog();
</script>

<template>
  <div class="container py-5">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <img :src="blog.image" style="width: 800px" alt="Profile Image" />

    <p class="text-muted">Author: {{ blog.author }}</p>
    {{ formatDate(blog.createdAt) }}
  </div>
</template>
