<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #041858">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand text-white" href="/"
          ><img width="80px" src="/imgs/logo.png" alt=""
        /></NuxtLink>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style="margin-right: 70px"
            class="navbar-nav ms-auto mb-1 mb-lg-0"
          >
            <li class="nav-item">
              <NuxtLink class="nav-link text-white" aria-current="page" href="/"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white" href="/about"
                >About us
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white" href="/faqs">FAQs</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white" href="/contact"
                >Contact us</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
