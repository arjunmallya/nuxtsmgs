<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const blogs = ref([]);
const usertoken = ref();

const fetchBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/blogs");
    blogs.value = response.data;
    const token = localStorage.getItem("token");
    usertoken.value = token;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

const UpdateBlog = (blogId) => {
  router.push(`/blog/update/${blogId}`);
};

const AddBlog = (blogId) => {
  router.push(`/blog/update/${blogId}`);
};

const Logout = () => {
  try {
    localStorage.removeItem("token");
    router.push("/blog");
    window.location.reload();
  } catch (error) {
    console.log("Error logging out:", error);
  }
};

const deleteBlog = async (blogId) => {
  try {
    await axios.delete(`http://localhost:8000/api/blogs/${blogId}`);
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};
fetchBlogs();
</script>

<template>
  <div class="container my-2 py-5">
    <div class="d-flex">
      <h1 class="me-auto">Blog Posts</h1>
      <button v-if="usertoken" @click="AddBlog" class="button">
        Add <i class="fa-solid fa-plus"></i>
      </button>
      <button v-if="usertoken" @click="Logout" class="button">
        Logout <i class="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
    <div v-for="blog in blogs" :key="blog._id" class="card my-3 col-md-6">
      <div class="card-body">
        <h5 class="card-title">{{ blog.title }}</h5>
        <div class="d-flex">
          <p class="card-text">{{ blog.content.slice(0, 50) }}...</p>
          <NuxtLink :to="'/blog/' + blog._id" class="text-decoration-none">
            Read More</NuxtLink
          >
        </div>
      </div>
      <div class="d-flex mx-2 pb-3" v-if="usertoken">
        <button class="button" @click="UpdateBlog(blog._id)">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="button" @click="deleteBlog(blog._id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
