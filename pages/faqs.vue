<template>
  <div class="py-5 mx-4">
    <h2 class="text-center py-2">Frequently Asked Questions(Faqs)</h2>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style="background-color: #041858"
          >
            Q1: What is Digital Marketing ?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Digital marketing refers to the use of digital channels,
              technologies, and platforms to promote and advertise products,
              services, or brands to a target audience.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            style="background-color: #041858"
          >
            Q2: How can digital marketing benefit my business?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Digital marketing can benefit your business by increasing online
              visibility, driving targeted traffic to your website, generating
              leads, and ultimately boosting sales. It allows you to connect
              with your target audience across various online channels, creating
              a strong online presence for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
            style="background-color: #041858"
          >
            Q3: What is Pay per click?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              PPC advertising allows advertisers to pay a fee each time their ad
              is clicked. It's commonly used in search engine advertising (like
              Google Ads) and social media platforms to drive traffic to a
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
            style="background-color: #041858"
          >
            Q4: What services does your digital marketing agency offer?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              At Smgs Digi Marketers we offer comprehensive range of digital
              marketing services including social media marketing, pay-per-click
              advertising (PPC), content marketing, Web development, and more.
              We tailor our services to meet the unique needs of each client.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
            style="background-color: #041858"
          >
            Q5: What is Seo?
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              SEO involves optimizing a website's content and structure to
              improve its visibility on search engines. The goal is to increase
              organic traffic by ranking higher in search engine results.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="true"
            aria-controls="collapseSix"
            style="background-color: #041858"
          >
            Q6: What is Social media marketing?
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Social media marketing involves promoting products or services on
              social media platforms to connect with the target audience. It
              includes creating and sharing content, running ads, and engaging
              with users on platforms like Facebook, Instagram, Twitter, and
              LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Faqs | Smgs Digi Marketers",
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

<style></style>
