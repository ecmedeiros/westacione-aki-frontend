/** @type {import('tailwindcss').Config} */
export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  "brand-primary": "#EE7D19",
  "brand-secondary": "#EB6717",
  "brand-background": "#FFD5B6",
  "gray-dividers": "#DDDDDD",
  "gray-horizontal-line": "#C8C8C8",
  "gray-vertical-line": "#D2D2D2",
  "gray-50": "#A9A9A9",
  "gray-100": "#AEAEB1",
  "gray-focus": "#9292A9",
  "gray-subtitles": "#42424F",
  "gray-text-input": "#888888",
  "gray-inputs": "#2D2F34",
  "gray-titles": "#27272E",
  "transparent-black": "#00000080",
  "gray-secondary-button": "#545567",
  "sidebar-text": "#90A0B7",
  "sidebar-background": "#FCFCFC",
  "sidebar-background-selected": "#F2F2F2",
  "success-titles": "#0F660A",
  "success-background": "#EEFFEB",
  "error-titles": "#BD0700",
  "error-background": "#FFCAC9",
  "warning-titles": "#BD9C00",
  "warning-backgroud": "#FFFAE4",
  success: "#0F660A",
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        "aside-shadow": "-12px 4px 18.9px 1px #00000040",
        container: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        card: "0px 0px 6px 3px #00000012",
      },
      height: {
        "layout-main": "calc(100vh - 80px)",
      },
      lineHeight: {
        title: "2.1875rem",
        subtitles: "1.6875rem",
        body: "1.875rem",
      },
    },

    colors,
  },
  plugins: [],
}
