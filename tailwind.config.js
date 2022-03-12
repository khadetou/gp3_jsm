module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text":
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67 % )",
        "gradient-bar":
          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
        "gradient-bg":
          "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)",
      },
      colors: {
        bg: "#040c18",
        footer: "#031B34",
        text: "#81AFDD",
        subtext: "#FF8A71",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(0.5)",
          },
          "100% ": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "scale-up-center":
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      screens: {
        laptop: "1050px",
        tablet: "700px",
        mobile: "550px",
      },
    },
  },
  plugins: [],
};
