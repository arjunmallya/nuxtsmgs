<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  try {
    await axios.post("http://localhost:8000/api/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    router.push("/blog/login");
  } catch (error) {
    console.error("Registration failed:", error);
  }
};
// Reactive state to track visibility
const showPassword = ref(false);

// Method to toggle visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div>
    <section class="h-100 gradient-form" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="card-body p-md-5 mx-md-4">
                <h4 class="mt-1 mb-5 pb-1 text-center">Register</h4>

                <form @submit.prevent="handleRegister">
                  <div class="form-outline mb-4">
                    <input
                      v-model="name"
                      type="text"
                      id="name"
                      class="form-control form-control-lg"
                      placeholder="Enter name"
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      v-model="email"
                      type="email"
                      id="email"
                      class="form-control form-control-lg"
                      placeholder="Enter email"
                    />
                  </div>

                  <div class="input-group">
                    <input
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control form-control-lg"
                      id="password"
                      placeholder="Enter password"
                    />
                    <!-- Button to Toggle Password -->
                    <button
                      class="button"
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

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="button px-2 me-3" type="submit">
                      Register
                    </button>
                  </div>

                  <div
                    class="d-flex align-items-center justify-content-center pb-4"
                  >
                    <p class="mb-0 me-2">Already have an account?</p>
                    <NuxtLink class="button" href="/blog/login">Login</NuxtLink>
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
