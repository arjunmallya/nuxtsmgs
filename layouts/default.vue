<template>
  <div>
    <Head>
      <meta
        name="google-site-verification"
        content="lQjHY4Xrikg_18iy5b9F1maut-sVfLVfZM9M_Rr-oVg"
      />
      <link rel="icon" href="/imgs/logo.png" />
    </Head>
    <Header />

    <slot />
    <a
      href="https://wa.me/9739429439?text=Hello,%20I%20want%20to%20know%20about%20your%20services.&type=phone_number&app_absent=1"
      class="contact-button"
      style="background-color: #25d366"
      target="_blank"
    >
      <img src="/imgs/whatsapp.png" alt="WhatsApp" />
    </a>
    <Footer />
  </div>
</template>
