import localFont from "next/font/local"

export const philosopher = localFont({
   src: [
      {
         path: "../../shared/assets/fonts/Philosopher/Philosopher-Regular.ttf",
         weight: "400",
      },
      {
         path: "../../shared/assets/fonts/Philosopher/Philosopher-Italic.ttf",
         weight: "400",
         style: "italic",
      },
      {
         path: "../../shared/assets/fonts/Philosopher/Philosopher-BoldItalic.ttf",
         weight: "700",
         style: "italic",
      },
      {
         path: "../../shared/assets/fonts/Philosopher/Philosopher-Bold.ttf",
         weight: "700",
      },
   ],
   variable: "--font-philosopher",
})
