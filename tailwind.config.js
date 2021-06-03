module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
         colors:{
         LightRed:"hsl(356, 100%, 66%)",
         VeryLightRed:"hsl(355, 100%, 74%)",
         VeryDarkBlue:"hsl(208, 49%, 24%)",
         White:"hsl(0, 0%, 100%)",
         GrayishBlue:"hsl(208, 49%, 24%)",
         VeryDarkGrayishBlue:"hsl(208, 49%, 24%)",
         VeryDarkBlackBlue:"hsl(208, 49%, 24%)",
         GrayishBlue:"hsl(208, 49%, 24%)",
       },
       fontFamily:{
        Ubuntu:["Ubuntu"],
        Overpass:["Overpass"],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
