export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    extend: {
      colors: {
        primary: "#0b0f1a",
        accent: "#ff0055",
        muted: "#94a3b8",
      },

      fontFamily: {
        display: ["'Patua One'", "sans-serif"],
        sans: ["system-ui", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 15px 50px rgba(0,0,0,0.25)",
      },
    },
  },

  plugins: [],
};