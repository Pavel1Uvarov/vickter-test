// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  css: [
    '~/assets/css/global.css'
  ],
  googleFonts: {
    families: {
      Poppins: [700],
      'Nunito+Sans': [600, 700],
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            poppins: ["Poppins"],
            nunitoSans: ["Nunito Sans"]
          },
          colors: {
            primary: "#1B264F",
            primaryHover: "#172042",
            secondary: "#506BCA",
            lightGray: "#f5f5f7",
            slateGray: "#353844",
            gold: "#D2AD81"
          },
          fontSize: {
            "sm": "15px",
            "5xl": "56px",
          },
          gap: {
            "8": "30px",
          },
          height: {
            "15": "60px",
          },
          minWidth: {
            "79": "315px",
          },
          letterSpacing: {
            widest: "0.2em",
          },
          lineHeight: {
            "12": "55px",
          },
        },
      },
    },
  },
});