/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070A17",
          900: "#0B1120",
          800: "#111827",
          700: "#1A2235",
        },
        indigo: {
          950: "#1E1B4B",
        },
        brand: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          teal: "#14B8A6",
          amber: "#F59E0B",
        },
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(at 20% 20%, rgba(139,92,246,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59,130,246,0.30) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(20,184,166,0.25) 0px, transparent 50%), linear-gradient(180deg, #070A17 0%, #0B1120 60%, #111827 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139,92,246,0.45)",
        card: "0 10px 30px -12px rgba(15,23,42,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
