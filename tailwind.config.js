/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Creating custom Animation for background color and translate property
      keyframes: {
        "bg-change": {
          "0%,20%,40%,60%,80%,100%": {
            backgroundImage: "linear-gradient(to right , #DF8908 ,#B415FF)",
          },
          "10%,30%,50%,70%,90%": {
            backgroundImage: "linear-gradient(to right ,#B415FF,#DF8908)",
          },
        },
        "r-slide-nav": {
          "0%": {
            transform: "translate(400px , 0px)",
          },
        },
      },
      animation: {
        "bg-change": "bg-change 2s linear infinite",
        "r-slide-nav": "r-slide-nav 1s linear 1",
      },
    },
  },
  plugins: [],
};
