/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                gold: '#CCA354',
            },
            fontFamily: {
                limeLight: ['Limelight', 'sans-serif'],
                josefin: ['Josefin Sans', 'sans-serif'],
            },
            keyframes: {
                trackingInExpand: {
                    '0%': { letterSpacing: '-0.5em', opacity: 0 },
                    '40%': { opacity: 0.6 },
                    '100%': { opacity: 1 },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                trackingInExpand:
                    'trackingInExpand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
                fadeIn: 'fadeIn 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            },
        },
    },
    plugins: [],
};
