export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        coffee: "#1a1410",
        deep: "#0f0b08",
        surface: "#2a1f15",
        frame: "#3d2f1f",
        accent: "#d4a574",
        "accent-bright": "#e8c492",
        cream: "#e8e3dd",
      },

      fontFamily: {
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      boxShadow: {
        offset: "8px 8px 0px 0px rgba(212,165,116,0.2)",
        "offset-md": "6px 6px 0px 0px rgba(212,165,116,0.15)",
        "offset-md-hover": "6px 6px 0px 0px rgba(212,165,116,0.3)",
        "offset-sm": "4px 4px 0px 0px rgba(212,165,116,0.15)",
        "offset-sm-hover": "4px 4px 0px 0px rgba(212,165,116,0.3)",
        "offset-cta": "4px 4px 0px 0px rgba(61,47,31,0.6)",
      },
    },
  },

  plugins: [],
};
