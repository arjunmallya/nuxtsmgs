<script setup>
definePageMeta({
  middleware: "auth",
});
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const title = ref();
const content = ref();
const author = ref();
const image = ref();

const submitBlog = async () => {
  try {
    await axios.post("http://localhost:8000/api/blogs", {
      title: title.value,
      content: content.value,
      author: author.value,
      image: image.value,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};
const cancelUpdate = () => {
  router.push("/blog");
};
</script>

<template>
  <div class="blog-container">
    <h1 class="text-center">Update Blog</h1>

    <form @submit.prevent="submitBlog" class="blog-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="title"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <textarea
          id="content"
          class="form-control"
          v-model="content"
          rows="5"
          placeholder="Enter blog content"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          class="form-control"
          v-model="author"
          placeholder="Enter author name"
          required
        />
      </div>
      <div class="d-flex">
        <button type="submit" class="button">Add Blog</button>
        <button class="button" @click="cancelUpdate">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.blog-container {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.blog-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
