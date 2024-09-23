<template>
  <div>
    <!--Hero section-->
    <section>
      <div class="container my-5">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1">
            <div>
              <h2 class="fw-bold">Smgs Digi Marketers</h2>
              <p class="fs-6 mt-4 fw-bold">
                Boost your online presence with our expert digital marketing
                services. We specialize in social media marketing,PPC, Web
                development, and more. We can help you drive traffic, generate
                leads, and achieve your business goals.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <lottie-player
                src="https://lottie.host/3746bc7b-1a20-4547-9233-aa59abeec53e/yzmVnnQNs5.json"
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
    <!--Services section-->
    <section style="background-color: #041858">
      <h1 class="text-white text-center pt-5">View Our Services</h1>
      <div class="container py-3">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="/imgs/emailmarketing.jpg"
                  class="service-img img-fluid"
                  alt=""
                />
                <h5 class="card-title">Email marketing</h5>
                <p class="card-text">
                  Email marketing boosts brand awareness, engages
                  audiences,drives sales, and fosters customer relationships
                  efficientlyand cost-effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <img src="/imgs/smm.jpg" class="service-img img-fluid" alt="" />
                <h5 class="card-title">Social Media Marketing</h5>
                <p class="card-text">
                  Expand brand reach, engage audiences, boost visibility, drive
                  traffic,gain insights, and enhance credibility through social
                  media marketing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <img src="/imgs/PPC.jpg" class="service-img img-fluid" alt="" />
                <h5 class="card-title">Pay Per Click</h5>
                <p class="card-text">
                  Boost online visibility, drive targeted traffic, and maximize
                  ROI with PPC advertising—effective, measurable, and immediate
                  results.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="/imgs/website.jpg"
                  class="service-img img-fluid"
                  alt=""
                />
                <h5 class="card-title">Website development & optimization</h5>
                <p class="card-text">
                  A website enhances visibility,expands reach, facilitate
                  communication, and strengthens brand presence online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 bg-light">
      <div class="container text-center">
        <!-- Section Title -->
        <h2 class="mb-4 fw-bold">Why Choose Us</h2>
        <p class="mb-5 text-muted fs-5">
          Our commitment to delivering measurable results for your business.
        </p>

        <div class="row g-4">
          <!-- Block 1 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-lg h-100">
              <div class="card-body text-center">
                <div class="icon mb-3">
                  <i class="bi bi-search fs-1 text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">100% client satisfaction</h5>
                <p class="card-text text-muted">
                  We are 100% client satisfaction oriented business
                </p>
              </div>
            </div>
          </div>

          <!-- Block 2 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-lg h-100">
              <div class="card-body text-center">
                <div class="icon mb-3">
                  <i class="bi bi-bar-chart-line fs-1 text-success"></i>
                </div>
                <h5 class="card-title fw-bold">Data-Driven Strategies</h5>
                <p class="card-text text-muted">
                  Our decisions are guided by data analytics, ensuring that
                  every campaign is targeted and effective.
                </p>
              </div>
            </div>
          </div>

          <!-- Block 3 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-lg h-100">
              <div class="card-body text-center">
                <div class="icon mb-3">
                  <i class="bi bi-handshake fs-1 text-warning"></i>
                </div>
                <h5 class="card-title fw-bold">Client-Centric Approach</h5>
                <p class="card-text text-muted">
                  We prioritize our clients' needs, ensuring a personalized
                  experience and long-term success.
                </p>
              </div>
            </div>
          </div>

          <!-- Block 4 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-lg h-100">
              <div class="card-body text-center">
                <div class="icon mb-3">
                  <i class="bi bi-rocket fs-1 text-danger"></i>
                </div>
                <h5 class="card-title fw-bold">Innovative Solutions</h5>
                <p class="card-text text-muted">
                  We stay ahead of industry trends to provide innovative
                  marketing solutions that give you a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action Button -->
        <div class="mt-5">
          <NuxtLink href="/contact" class="button text-white"
            >Get Started Today</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Home | Smgs Digi Marketers",
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

<style>
.service-img {
  background-color: white;
  border-radius: 8px;
}
</style>
