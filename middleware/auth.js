// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem("token");

    // If no token, redirect to login page
    if (!token) {
      const router = useRouter();
      router.push("/blog/login"); // Use Vue Router for redirection
    }
  }
});
