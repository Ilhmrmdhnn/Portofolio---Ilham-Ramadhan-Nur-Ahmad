/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      borderColor: {
        'profile': '#FF66D5'
      },
      colors: {
        'title': '#000000',
        'dtitle': '#F1F2F4',
        'subtitle': '#575757',
        'dsubtitle': '#A3ABB2',
        'fact': '#3A3A3A',
        'dfact': '#C3C7CB',
        'button': '#000000',
        'light': '#FF66D5',
        'button2': '#000000',
        'dcontact': '#FF66D5'
      },
      backgroundColor: {
        'light': '#E9EBEC',
        'dark': '#0C151D',
        'button': '#FF66D5',
        'dbutton': '#FF66D5',
        'buttonhov': '#FFFFFF',
        'button2': '#171F26',
        'button2hov': '#21272c',
        'button3': '#D7D7D7',
        'dbutton3': '#0C151D'
      },
      dropShadow: {
        'pink-shadow': '0 0 25px rgba(255, 102, 213, 0.5)' 
      }
    },
  },
  plugins: [],
}
