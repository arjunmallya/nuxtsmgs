<template>
  <div style="background-color: #041858">
    <div class="footer py-5 text-white">
      <div class="container">
        <div class="row footer-content">
          <div class="col-md-4 col-sm-6 mb-3">
            <img width="200px" src="/imgs/logo.png" alt="" />
          </div>
          <div class="col-md-2 col-sm-6 mb-3">
            <h4 class="h5">Quick Links</h4>
            <ul class="list-unstyled">
              <li>
                <NuxtLink class="text-white text-decoration-none" href="/">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-white text-decoration-none" href="/about">
                  About Us
                </NuxtLink>
              </li>

              <li>
                <NuxtLink class="text-white text-decoration-none" href="/faqs">
                  Faq's
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="text-white text-decoration-none"
                  href="/contact"
                  >Contact us</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-6 mb-3">
            <h4 class="h5">Legal</h4>
            <ul class="list-unstyled">
              <li>
                <NuxtLink
                  class="text-white text-decoration-none"
                  href="/privacy"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
            <h4 class="h5">Business hours</h4>
            <ul class="list-unstyled">
              <li>
                <h6 class="text-white">Monday-Friday 9am-9pm</h6>
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-6 mb-3">
            <h4 class="h5">Contact Us</h4>
            <NuxtLink
              href="mailto:contact@smgsdigimarketers.in"
              target="_blank"
              class="me-4 text-white text-decoration-none"
            >
              <i className="fa-regular fa-envelope"></i>
              contact@smgsdigimarketers.in
            </NuxtLink>
            <br />
            <NuxtLink
              href="tel:9739429439"
              class="me-4 text-white text-decoration-none"
            >
              <i class="fa-solid fa-phone"></i> 9739429439
            </NuxtLink>

            <h4 class="mt-3 h5">Follow Us</h4>
            <ul class="list-inline d-flex social-icons mt-3">
              <NuxtLink
                href="https://www.facebook.com/smgsdigital123/"
                target="_blank"
                class="me-4 fs-4 text-white text-decoration-none"
              >
                <i class="fa-brands fa-facebook fa-lg"></i>
              </NuxtLink>

              <NuxtLink
                href="https://www.instagram.com/smgs_digi_marketers/"
                target="_blank"
                class="me-4 fs-4 text-white text-decoration-none"
              >
                <i class="fa-brands fa-instagram fa-lg"></i>
              </NuxtLink>

              <NuxtLink
                href="https://smgsdigimarketers.quora.com/"
                target="_blank"
                class="me-4 fs-4 text-white text-decoration-none"
              >
                <i class="fab fa-brands fa-quora fa-lg"></i>
              </NuxtLink>
            </ul>
          </div>
        </div>
        <div class="py-1 text-center">
          <div>
            &copy; 2023
            <NuxtLink
              class="text-decoration-none text-light"
              href="https://smgsdigimarketers.in"
            >
              Smgs Digi Marketers
            </NuxtLink>
            . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
