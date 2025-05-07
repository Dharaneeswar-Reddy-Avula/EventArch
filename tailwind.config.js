/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    // Add a futuristic font (e.g., Orbitron)
    fontFamily: {
      orbitron: ['"Orbitron"', "sans-serif"],
    },
    // Add neon glow animation
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
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      // Base class for the heading to ensure proper positioning
      ".neon-heading": {
        position: "relative",
        display: "inline-block",
      },
      // ::before - Glowing gradient line below the heading
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
      // ::after - Decorative neon arc above the heading
      // ".neon-heading::after": {
      //   content: '""',
      //   position: "absolute",
      //   top: "-20px",
      //   left: "50%",
      //   transform: "translateX(-50%)",
      //   width: "50px",
      //   height: "10px",
      //   borderRadius: "50%",
      //   border: "2px solid transparent",
      //   borderTopColor: "#00f0ff",
      //   borderBottomColor: "#ff00ff",
      //   boxShadow: "0 0 10px #00f0ff, 0 0 20px #ff00ff",
      // },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  },
];