// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["./assets/style.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          async: true,
        },
        {
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
          async: true,
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Smgs Digi Marketers",
            image: "https://smgsdigimarketers.in/imgs/logo.png",
            "@id": "",
            url: "https://smgsdigimarketers.in/",
            telephone: "9739429439",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "001, Aksha Amber Apartments, 28/27/1, Sri Kalyana Lakshmi Venkateshwara Temple St, beside Kalyania Lakshmi Venkateswara Mandir, Venkategowda Layout, Pampa Extension, Hebbal Kempapura",
              addressLocality: "Bengaluru",
              postalCode: "560024",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "21:00",
            },
          }),
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.}0.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/imgs/logo.png",
        },
      ],
    },
  },
});
