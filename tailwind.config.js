/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        queenBlue: {
          50: "#07090D",
          100: "#151A28",
          150: "#232C43",
          200: "#313E5E",
          250: "#3F4F78",
          300: "#4D6193",
          350: "#5F74AB",
          450: "#798BB9",
          500: "#8797C0",
          550: "#94A2C7",
          600: "#A1ADCE",
          650: "#AFB9D5",
          700: "#BCC5DC",
          750: "#CAD1E3",
          800: "#D7DCEA",
          850: "#E4E8F1",
          900: "#F2F3F8",
        },
        seaGreenCrayola: {
          50: "#011310",
          100: "#033A31",
          150: "#044E41",
          200: "#067460",
          250: "#089B80",
          300: "#0AC2A0",
          350: "#0CE9C0",
          450: "#2AF4CF",
          500: "#3DF5D3",
          550: "#51F6D8",
          600: "#64F7DC",
          650: "#77F8E0",
          700: "#9EFAE9",
          750: "#B1FBED",
          800: "#C5FCF2",
          850: "#D8FDF6",
          900: "#ECFEFB",
        },
        blackOliva: {
          50: "#151513",
          100: "#20201D",
          150: "#2B2B26",
          200: "#32322C",
          250: "#4C4C43"
        }
      }
    },
  },
  plugins: [],
}