module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      gradients:{
        "gradient-text": "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67 % )",
        "gradient-bar": "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)"
      },
      colors: {
        bg: "#040c18",
        footer: "#031B34",  
        text: "#81AFDD",
        subtext: "#FF8A71"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}
