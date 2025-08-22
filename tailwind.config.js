/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                brand: {
                    500: "#10b981",
                    600: "#059669",
                },
            },
            boxShadow: {
                card: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 1px rgb(0 0 0 / 0.05)",
            },
        },
    },
    plugins: [],
};