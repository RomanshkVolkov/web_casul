import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: false,
    layout: {},
    themes: {
      dark: {
        layout: {
        },
        colors: {
          primary: {
            DEFAULT: '#FFFF00',
            50: '#ffffea',
            100: '#fffbc5',
            200: '#fff885',
            300: '#FFFF00',
            400: '#ffdf1b',
            500: '#ffc107',
            600: '#e29400',
            700: '#bb6902',
            800: '#7c420b',
            900: '#482200',
          },
          secondary: "#393E46",
          background: {
            DEFAULT: '#423841',
            50: '#f8f7f8',
            100: '#f0eef0',
            200: '#dfd8df',
            300: '#c3b6c2',
            400: '#a18fa1',
            500: '#867185',
            600: '#6e5b6d',
            700: '#5a4a58',
            800: '#423841',
            900: '#30292f',
          },
          foreground: {
            DEFAULT: '#FFFFFF',
            50: '#f8f7f8', // use to text on primary
          },
        },
      },
      light: {
        layout: {
        },
        colors: {
          primary: {
            DEFAULT: '#FFFF00',
            50: '#ffffea',
            100: '#fffbc5',
            200: '#fff885',
            300: '#FFFF00',
            400: '#ffdf1b',
            500: '#ffc107',
            600: '#e29400',
            700: '#bb6902',
            800: '#7c420b',
            900: '#482200',
          },
          secondary: "#393E46",
          background: {
            DEFAULT: '#ffffea',
            50: '#ffffea',
            100: '#fffbc5',
          },
          foreground: {
            DEFAULT: '#000000',
          }
        },
      },
    },
  })],
};
export default config;
