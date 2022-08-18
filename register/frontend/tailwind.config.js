/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#325ae7",
        "secondary": "#79AAD2",
        "darkmode": "#061426",
        "header": "#d9d8dc",
        "sidebar-text": "#697078",
        "straight-sidebar":"#dadde1",
        "secondary-sidebar":"#f2f2f2",
        "secondary-dark-sidebar":"#54649a87",
        "add-dark": "#3d3c3f",
        "basic-home":"#f8f9fa",
        "notify": "#f5f7fb",
        "rightSidebar": "#dcebff",
        "modal": "rgba(0,0,0,0.7)",
        "note-0": "#ffffff",
        "note-1": "#afe4ec",
        "note-2": "#edebfa",
        "note-3": "#e4eef8",
        "note-4": "#ffecc9",
        "note-5": "#ffffb3",
        "note-6": "#fceeec",
        "t-note-1": "#0a8b42",
        "t-note-2": "#725fb4",
        "t-note-3": "#4081ba",
        "t-note-4": "#d68c45",
        "t-note-5": "#9b9b3b",
        "t-note-6": "#c56d53",
        "t-bold-note-1": "#0e6017",
        "t-bold-note-2": "#4b2491",
        "t-bold-note-3": "#2d5072",
        "t-bold-note-4": "#755632",
        "t-bold-note-5": "#6c6c20",
        "t-bold-note-6": "#693327",
      },
      color: {
        "primary-text-color": "#325ae7",
        "sidebar": "#697078",
        
      },
      width: {
        sm: '1px',
        base: '200px',
        lg: '240px' ,
        xl: '270px'
      },
      maxHeight: {
        xl: '600px'
      },
      height: {
        xl: '350px',
        "2xl": '530px',
        "9/10": "90%",
        "1/10": "10%"
      },
      borderWidth: {
        sm: "1px",
      },
      translate: {
        half: "-30px"
      },
      fontSize: {
        basic: "14px",
        big: "18px"
      },
      backgroundColor: {
        "primary-background-color" : "#BED3F3",
        "primary-color": "#BBDEFB",
        "secondary-color": "#79AAD2",
        "primary-button-color": "#325ae7",
        "sidebar-color": "#e5f0f8",
        "sidebar-darkmode-color": "#061426"
      },
      boxShadow: {
        primaryBoxShadow :"5px 8px 0 0 rgb(69 106 235 / 53%)",
        buttonBoxShadow :"7px 7px 0 0 rgb(69 106 235 / 58%)",
        headerShadow :"4px 5px 0px 0px rgb(69 106 235 / 40%)",
        "navbar" :"0 1px 2px 0 rgba(0,0,0,0.1)",
        box: "5px 7px 8px rgb(69 106 235 / 40%)"
      },
      animation: {
        fadeInUp: "fadeInUp 5s ease-in-out"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}