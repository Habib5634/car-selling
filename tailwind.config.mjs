/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          light: "#d1e7f8", 
          DEFAULT: "#003f8a", 
          dark: "#005bb5", 
          gray:"#f5f5f5"
        }
      },
      backgroundImage: {
        'herobg': "url('/assets/hero.png')",
        'aboutbg': "url('/assets/aboutbg.png')",
               

      },
      boxShadow: {
        shad: '0px 0px 6px 6px #c2c0c033',
        lightshad: '0px 0px 8px 0px #0000001A',
        custom: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': "#fff",
        'blue': "#005bb5",
        'blueDark': "#00152c",
        'blueLight': "#d1e7f8",
        'gray': "#f5f5f5",
        'blackish': "#25262f",
        'red':'#ef1d26'
        
      },
    },
  },
  plugins: [],
};
