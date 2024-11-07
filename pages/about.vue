<template>
  <div>
    <section>
      <div class="container my-5">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1">
            <div>
              <h2 class="fw-bold">About Us</h2>
              <p class="fw-bold">
                We are digital marketing agency providing customized solutions
                for businesses. Our data-driven strategies help you reach your
                target audience, increase brand visibility, and drive
                conversions.
              </p>
              <!-- Call to Action Button -->
              <div class="mt-4">
                <NuxtLink href="/contact" class="button text-white"
                  >Get Started Today</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <lottie-player
                src="https://lottie.host/c543f813-8064-4fe5-a2e8-85b87af3dd38/osy5M2mHzJ.json"
                speed="1"
                style="height: 350px; width: 350px"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "About us  | Smgs Digi Marketers",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    // Description
    {
      name: "description",
      content:
        "Boost your online presence with our expert digital marketing services. We specialize in social media marketing,PPC, Web development, and more. We can help you drive traffic, generate leads, and achieve your business goals.",
    },
    // Keywords
    {
      name: "keywords",
      content:
        "digital marketing,web development in hebbal, PPC, social media marketing,Smgs Digi Marketers,smgs",
    },
    // Author
    { name: "author", content: "Smgs Digi Marketers" },
  ],
});
</script>
<script>
export default {
  head() {
    return {
      link: [{ rel: "canonical", href: "https://smgsdigimarketers.in/about" }],
    };
  },
};
</script>
<style>
/* Create two equal columns that floats next to each other */
.column {
  width: 45%;
  padding: 10px;
  height: 360px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
