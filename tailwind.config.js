// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
        changa: ['"Changa"', "sans-serif"],
        poppins:['"Poppins"',"sans-serif"] // ✅ Correct usage
      },
      animation: {
        shine: "shine 1s ease-in-out",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".neon-heading": {
          position: "relative",
          display: "inline-block",
        },
        ".neon-heading::before": {
          content: '""',
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "2px",
          background: "linear-gradient(to right, #ff00ff, #00f0ff)",
          boxShadow: "0 0 10px #ff00ff, 0 0 20px #00f0ff",
        },
        ".glassmorphism": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
