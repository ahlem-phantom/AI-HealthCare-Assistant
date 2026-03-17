/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      boxShadow: {
        halo:   "0 18px 50px rgba(3, 105, 161, 0.14)",
        glow:   "0 0 40px -8px rgba(14, 165, 233, 0.6)",
        "glow-lg": "0 0 70px -10px rgba(14, 165, 233, 0.5)",
        card:   "0 4px 24px rgba(9, 18, 37, 0.08)",
        "card-hover": "0 12px 40px rgba(9, 18, 37, 0.14)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-sky-indigo": "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.88)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseRing: {
          "0%":   { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(14,165,233,0.4)" },
          "70%":  { transform: "scale(1)",    boxShadow: "0 0 0 18px rgba(14,165,233,0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(14,165,233,0)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(8px)" },
        },
      },
      animation: {
        "float-slow":    "floatSlow 7s ease-in-out infinite",
        "fade-in-up":    "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-down":    "slideDown 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in":      "scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "shimmer":       "shimmer 1.8s infinite",
        "gradient-shift":"gradientShift 3s ease infinite",
        "pulse-ring":    "pulseRing 2.5s ease-out infinite",
        "bounce-soft":   "bounceSoft 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};