<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const email = ref("");
const password = ref("");
const Error = ref("");
const router = useRouter();
// Reactive state to track visibility
const showPassword = ref(false);

// Method to toggle visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
const handleLogin = async () => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/auth/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", data.token);
    router.push("/blog");
  } catch (error) {
    Error.value = err.response?.data?.message || "An error occurred";
  }
};
useHead({
  title: "Login",
});
</script>
<template>
  <div>
    <section class="h-100 gradient-form" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="card-body p-md-5 mx-md-4">
                <div class="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style="width: 185px"
                    alt="logo"
                  />
                  <h4 class="mt-1 mb-5 pb-1">Please login to your account</h4>
                </div>

                <form @submit.prevent="handleLogin">
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Enter email"
                      v-model="email"
                    />
                  </div>

                  <div class="input-group">
                    <!-- Password Input -->
                    <input
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control form-control-lg"
                      id="password"
                      placeholder="Enter password"
                    />
                    <!-- Button to Toggle Password -->
                    <button
                      style="background-color: #041858; color: white"
                      type="button"
                      @click="togglePasswordVisibility"
                    >
                      <i
                        :class="
                          showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                        "
                      ></i>
                    </button>
                  </div>

                  <button class="button px-2 me-3 mt-3" type="submit">
                    Log in
                  </button>

                  <div
                    class="d-flex align-items-center justify-content-center pb-4"
                  >
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <NuxtLink class="button" href="/blog/register"
                      >Register</NuxtLink
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
