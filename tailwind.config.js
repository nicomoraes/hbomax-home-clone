const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "border-tertiary": "var(--border-tertiary)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--tertiary-foreground)",
        },
        quaternary: {
          DEFAULT: "var(--quaternary)",
        },
        quinary: {
          DEFAULT: "var(--quinary)",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": "8.8px",
      },
      backgroundImage: {
        "btn-secondary-gradient":
          "linear-gradient(345deg, #490cb0 0%, #9b34ef 33%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100% )",

        "mask-gradient":
          "linear-gradient( 180deg, #03032800 0%, #030328 100% )",

        "plan-container-image": "url(/images/plans_background.png)",
        "plan-card-gradient":
          "linear-gradient(180deg,#ffffff1f 0%, #ffffff00 100%)",
        "plan-card-featured-before-gradient":
          "linear-gradient(46deg, #5b16bd, #b908f6)",

        "new-releases-container-gradient":
          "linear-gradient(0, #3e1160, #030328)",
        "new-releases-container-bottom-gradient":
          "linear-gradient(180deg, #3e1160, #03032866)",
        "new-releases-details-date-gradient":
          "linear-gradient(to left, #740979, #b908f6, #5b1ce6)",
        "new-releases-details-mobile-gradient":
          "radial-gradient(50% 66.6% at 50% 20.45%, #c4069aa6 0%, #3e1160 100%)",
      },
      backgroundSize: {
        "btn-secondary-size": "300% 100%",
      },
      backgroundPosition: {
        "btn-secondary-position": "100% 0",
        "btn-secondary-hover-position": "0",
      },
      keyframes: {
        "slide-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "slide-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        "accordion-content-slide-down":
          "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-content-slide-up":
          "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
