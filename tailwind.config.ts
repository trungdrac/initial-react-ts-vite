/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    extend: {
      colors: {
        main: "#5e72e4",
        "primary-antd": "#1677ff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".word-break-word": {
          wordBreak: "break-word",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover", "focus", "active", "group-hover"]);
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
