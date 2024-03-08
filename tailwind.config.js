/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            purple: {
                Light: "#EBE5F9",
                normal: "#8047F8",
                Dark: "#4B2995",
            },
            yellow: {
                Light: "#F1E9C9",
                normal: "#DBAC2C",
                Dark: "#C47F17",
            },
            base: {
                50: "#FFFFFF",
                100: "#FAFAFA",
                200: "#F3F2F2",
                300: "#EDEDED",
                400: "#E6E5E5",
                500: "#D7D5D5",
                600: "#8D8686",
                700: "#574F4D",
                800: "#403937",
                900: "#272221",
            },
        },
    },
    plugins: [],
};
