import localFont from "next/font/local";

// Pacifico
export const lato = localFont({
  src: [
    {
      path: "./fonts/lato-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-lato",
});

// Merienda
export const montserrat = localFont({
  src: [
    {
      path: "./fonts/montserrat-variablefont_wght-webfont.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  display: "swap",
  variable: "--font-montserrat"
})
