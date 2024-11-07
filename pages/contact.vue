<template>
  <ContactForm />
</template>
<script lang="ts" setup>
useHead({
  title: "Contact us  | Smgs Digi Marketers",
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
      link: [
        { rel: "canonical", href: "https://smgsdigimarketers.in/contact" },
      ],
    };
  },
};
</script>
