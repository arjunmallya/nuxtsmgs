<script>
definePageMeta({
  middleware: "auth",
});
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const blog = reactive({
      title: "",
      content: "",
      author: "",
    });

    const route = useRoute();
    const router = useRouter();
    const loading = ref(false);
    const error = ref("");

    const fetchBlog = async () => {
      try {
        loading.value = true;
        const { data } = await axios.get(
          `http://localhost:8000/api/blogs/${route.params.id}`
        ); // Adjust if you use Axios
        blog.title = data.title;
        blog.content = data.content;
        blog.author = data.author;
      } catch (err) {
        error.value = "Error fetching blog data.";
      } finally {
        loading.value = false;
      }
    };

    const updateBlog = async () => {
      try {
        loading.value = true;
        await axios.put(`http://localhost:8000/api/blogs/${route.params.id}`, {
          blog,
        });
        router.push(`/blog/${route.params.id}`);
      } catch (err) {
        error.value = "Error updating blog.";
      } finally {
        loading.value = false;
      }
    };

    const cancelUpdate = () => {
      router.push("/blog");
    };

    onMounted(() => {
      fetchBlog();
    });

    return {
      blog,
      loading,
      error,
      updateBlog,
      cancelUpdate,
    };
  },
};
</script>

<template>
  <div class="blog-container">
    <h1 class="text-center">Update Blog</h1>

    <form @submit.prevent="updateBlog" class="blog-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="blog.title"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <textarea
          id="content"
          class="form-control"
          v-model="blog.content"
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
          v-model="blog.author"
          placeholder="Enter author name"
          required
        />
      </div>

      <div class="d-flex">
        <button type="submit" class="button px-2">Update Blog</button>
        <button type="button" class="button px-2" @click="cancelUpdate">
          Cancel
        </button>
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
</style>
